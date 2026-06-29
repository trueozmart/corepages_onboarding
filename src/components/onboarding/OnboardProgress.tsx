type Props = { currentStep: number; totalSteps: number };

const labels = ["Your Details", "Photos", "Done"];

export default function OnboardProgress({ currentStep, totalSteps }: Props) {
  const steps = labels.slice(0, totalSteps);
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((label, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <div key={label} className="flex-1 flex flex-col items-center relative">
              {i > 0 && (
                <div
                  className={`absolute top-4 right-1/2 w-full h-0.5 -translate-y-1/2 ${
                    done ? "bg-marine" : "bg-border"
                  }`}
                />
              )}
              <div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-heading font-semibold transition-colors ${
                  done
                    ? "bg-marine text-white"
                    : active
                    ? "bg-forest text-white"
                    : "bg-border text-muted-foreground"
                }`}
              >
                {done ? "✓" : i + 1}
              </div>
              <span
                className={`mt-1.5 text-[10px] font-body text-center leading-tight ${
                  active ? "text-forest font-semibold" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
