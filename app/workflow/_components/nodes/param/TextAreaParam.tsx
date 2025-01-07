"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ParamProps } from "@/types/appNode";
import React, { useEffect, useId, useState } from "react";

function TextAreaParam({
  param,
  value,
  updateNodeParamValue,
  disabled,
}: ParamProps) {
  const [internalValue, setInternalValue] = useState(value);
  const id = useId();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-500 px-2">*</p>}
      </Label>
      <Textarea
        className="text-xs min-h-[100px]"
        id={id}
        value={internalValue}
        placeholder="Enter value here"
        disabled={disabled}
        onChange={(e) => setInternalValue(e.target.value)}
        onBlur={() => updateNodeParamValue(internalValue)}
      />
      {param.helperText && (
        <p className="text-xs text-muted-foreground">{param.helperText}</p>
      )}
    </div>
  );
}

export default TextAreaParam;
