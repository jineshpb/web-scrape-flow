"use client";

import React, { useCallback } from "react";
import { TaskParam, TaskParamType } from "@/types/task";
import { Input } from "@/components/ui/input";
import StringParam from "./param/StringParam";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/types/appNode";
import BrowserInstanceParam from "./param/BrowserInstanceParam";
import SelectParam from "./param/SelectParam";
import CredentialsParam from "./param/Credentialsparam";
import TextAreaParam from "./param/TextAreaParam";
import { Switch } from "@/components/ui/switch";

function NodeparamField({
  param,
  nodeId,
  disabled,
}: {
  param: TaskParam;
  nodeId: string;
  disabled: boolean;
}) {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data.inputs?.[param.name];

  const updatedParamValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node?.data.inputs,
          [param.name]: newValue,
        },
      });
    },
    [nodeId, updateNodeData, param.name, node?.data.inputs]
  );

  switch (param.type) {
    case TaskParamType.STRING:
      return param.variant === "textarea" ? (
        <TextAreaParam
          param={param}
          value={value}
          updateNodeParamValue={updatedParamValue}
          disabled={disabled}
        />
      ) : (
        <StringParam
          param={param}
          value={value}
          updateNodeParamValue={updatedParamValue}
          disabled={disabled}
        />
      );
    case TaskParamType.BROWSER_INSTANCE:
      return (
        <BrowserInstanceParam
          param={param}
          value={value}
          updateNodeParamValue={updatedParamValue}
        />
      );
    case TaskParamType.SELECT:
      return (
        <SelectParam
          param={param}
          value={value}
          updateNodeParamValue={updatedParamValue}
          disabled={disabled}
        />
      );
    case TaskParamType.CREDENTIAL:
      return (
        <CredentialsParam
          param={param}
          value={value}
          updateNodeParamValue={updatedParamValue}
          disabled={disabled}
        />
      );
    case TaskParamType.NUMBER:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">{param.name}</p>
          <Input
            type="number"
            value={value}
            onChange={(e) => updatedParamValue(e.target.value)}
            disabled={disabled}
            placeholder={param.placeholder}
          />
        </div>
      );
    case TaskParamType.BOOLEAN:
      return (
        <div className="w-full flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{param.name}</p>
          <Switch
            checked={value === "true"}
            onCheckedChange={(checked) => updatedParamValue(checked.toString())}
            disabled={disabled}
          />
        </div>
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">{param.name}</p>
        </div>
      );
  }
}

export default NodeparamField;
