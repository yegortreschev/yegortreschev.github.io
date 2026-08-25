import type { ReactNode } from "react";

export default function ResultBadge({ value, children }: { value: string; children: ReactNode }) {
  return <div className="resultBadge">
    <svg className="resultBorder" aria-hidden="true"><rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="31" fill="none" stroke="#CBCBCB" strokeWidth="2" strokeDasharray="12 12" strokeDashoffset="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg>
    <strong>{value}</strong>
    <span>{children}</span>
  </div>;
}
