import { Info, AlertTriangle, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "success" | "error" | "tip";

interface CalloutProps {
  children: React.ReactNode;
  type?: CalloutType;
  title?: string;
}

export default function Callout({ children, type = "info", title }: CalloutProps) {
  const styles = {
    info: {
      container: "bg-indigo-500/10 border-indigo-500/20 text-indigo-200",
      icon: <Info className="text-indigo-400" size={20} />,
      titleColor: "text-indigo-400",
    },
    warning: {
      container: "bg-amber-500/10 border-amber-500/20 text-amber-200",
      icon: <AlertTriangle className="text-amber-400" size={20} />,
      titleColor: "text-amber-400",
    },
    success: {
      container: "bg-emerald-500/10 border-emerald-500/20 text-emerald-200",
      icon: <CheckCircle2 className="text-emerald-400" size={20} />,
      titleColor: "text-emerald-400",
    },
    error: {
      container: "bg-rose-500/10 border-rose-500/20 text-rose-200",
      icon: <AlertCircle className="text-rose-400" size={20} />,
      titleColor: "text-rose-400",
    },
    tip: {
      container: "bg-purple-500/10 border-purple-500/20 text-purple-200",
      icon: <Info className="text-purple-400" size={20} />,
      titleColor: "text-purple-400",
    },
  };

  const style = styles[type];

  return (
    <div className={cn("my-6 flex gap-4 p-4 rounded-xl border", style.container)}>
      <div className="shrink-0 mt-0.5">{style.icon}</div>
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className={cn("text-sm font-bold mb-1 uppercase tracking-tight", style.titleColor)}>
            {title}
          </h4>
        )}
        <div className="text-sm leading-relaxed prose-sm prose-invert max-w-none prose-p:my-0">
          {children}
        </div>
      </div>
    </div>
  );
}
