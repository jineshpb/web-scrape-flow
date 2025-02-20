"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function ReactCountUpWrapper({ value }: { value: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return "-";

  return <CountUp preserveValue decimals={0} end={value} duration={0.5} />;
}

export default ReactCountUpWrapper;
