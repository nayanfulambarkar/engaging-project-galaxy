
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  colorClass?: string;
  label?: string;
  animated?: boolean;
}

const ProgressBar = ({
  value,
  colorClass = "bg-secondary",
  label,
  animated = true,
}: ProgressBarProps) => {
  const [width, setWidth] = useState(animated ? 0 : value);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(value);
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [value, animated]);

  return (
    <div className="w-full mb-4">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-sm font-medium">{value}%</span>
        </div>
      )}
      <div className="progress-bar" ref={progressRef}>
        <div
          className={cn("progress-bar-fill", colorClass)}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
