"use client";
import { Prism as SH } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  code: string;
  language: string;
}

export function SyntaxHighlighter({ code, language }: Props) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const style = resolvedTheme === "dark" ? oneDark : oneLight;

  return (
    <div className="relative group rounded-b-[8px] overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      <button
        onClick={copy}
        className="absolute top-3 right-3 z-10 p-1.5 rounded-[6px] border opacity-0 group-hover:opacity-100 transition-all duration-200"
        style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
      >
        {copied ? <Check size={13} style={{ color: "var(--success)" }} /> : <Copy size={13} />}
      </button>
      <SH
        language={language}
        style={style}
        customStyle={{
          margin: 0,
          padding: "20px",
          fontSize: "13px",
          background: resolvedTheme === "dark" ? "#1C1915" : "#F5F0E8",
          fontFamily: "var(--font-mono)",
          maxHeight: "380px",
          overflowY: "auto",
        }}
        showLineNumbers
        lineNumberStyle={{ color: "var(--text-muted)", fontSize: "11px" }}
      >
        {code}
      </SH>
    </div>
  );
}
