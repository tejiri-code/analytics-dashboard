// CurveChart.jsx
import React from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";

export default function CurveChart({
  data,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  stroke,
  strokeWidth,
}) {
  const width = 207;
  const height = 40;

  const xScale = scaleTime({
    range: [margin.left, width - margin.right],
    domain: [new Date(data[0].date), new Date(data[data.length - 1].date)],
  });

  const yScale = scaleLinear({
    range: [height - margin.bottom, margin.top],
    domain: [0, Math.max(...data.map((d) => Number(d.value)))],
  });

  return (
    <svg width={width} height={height} style={{ justifySelf: "space-between" }}>
      <LinePath
        data={data}
        x={(d) => xScale(new Date(d.date)) || 0}
        y={(d) => yScale(Number(d.value)) || 0}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    
    </svg>
  );
}
