"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteCredential(name: string) {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  await prisma.credential.delete({
    where: {
      userId_name: {
        userId,
        name,
      },
    },
  });

  revalidatePath("/credentials");
}
