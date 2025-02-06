import { OpenAI } from "openai";
import prisma from "@/lib/prisma";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { AppNode } from "@/types/appNode";
import { auth } from "@clerk/nextjs/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION_ID,
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { workflowId, nodeId } = await request.json();

    const workflow = await prisma.workflow.findUnique({
      where: {
        id: workflowId,
        userId,
      },
    });

    if (!workflow) {
      return Response.json({ error: "Workflow not found" }, { status: 404 });
    }

    const definition = JSON.parse(workflow.definition);
    const nodes = definition.nodes;
    const edges = definition.edges;

    const currentNode = nodes.find(
      (n: { id: string }) => n.id === nodeId
    ) as AppNode;
    const nodeType = currentNode.data.type;

    if (!currentNode) {
      return Response.json({ error: "Node not found" }, { status: 404 });
    }

    const upstreamNodes = nodes.filter((n: { id: string }) =>
      edges.some(
        (e: { target: string; source: string }) =>
          e.target === nodeId && e.source === n.id
      )
    ) as AppNode[];

    const downstreamNodes = nodes.filter((n: { id: string }) =>
      edges.some(
        (e: { source: string; target: string }) =>
          e.source === nodeId && e.target === n.id
      )
    ) as AppNode[];

    const prompt = `Generate a concise technical caption for this workflow node:

Node Type: ${TaskRegistry[nodeType].label}
Node Inputs: ${JSON.stringify(currentNode.data.inputs)}
Connected From: ${
      upstreamNodes.map((n) => TaskRegistry[n.data.type].label).join(", ") ||
      "None"
    }
Connected To: ${
      downstreamNodes.map((n) => TaskRegistry[n.data.type].label).join(", ") ||
      "None"
    }

Requirements:
1. Maximum 2 sentences
2. Explain what this node does with its specific configuration
3. Mention its role in the workflow chain if relevant
4. Be technical but clear`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a technical workflow assistant that generates clear, concise node descriptions.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    const caption = completion.choices[0].message?.content?.trim();
    return Response.json({ caption });
  } catch (error: any) {
    console.error("Caption generation error:", error);
    return Response.json(
      { error: "Failed to generate caption" },
      { status: 500 }
    );
  }
}
