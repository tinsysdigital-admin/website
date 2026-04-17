import React from "react";

export function ProcessSection() {
  const steps = [
    {
      title: "Discovery",
      text: "We review the request, clarify objectives, and define the real problem that needs to be solved.",
    },
    {
      title: "Scope & Planning",
      text: "We organize project scope, priorities, technical direction, and expected deliverables before execution begins.",
    },
    {
      title: "Development",
      text: "We build the solution with a focus on clean structure, practical functionality, and maintainable implementation.",
    },
    {
      title: "Testing & QA",
      text: "We review behavior, fix issues, and verify that the solution works as expected before release.",
    },
    {
      title: "Deployment",
      text: "We launch the system in a controlled way and make sure the live version is stable and usable.",
    },
    {
      title: "Support",
      text: "We continue with fixes, improvements, and technical support when ongoing help is required.",
    },
  ];

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden" id="process">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-muted border border-border">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            A structured workflow from request to delivery.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TINSYS DIGITAL follows a practical and disciplined process to keep communication clear, reduce risk, and deliver work that is technically sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
              <span className="absolute top-8 right-8 text-6xl font-bold text-muted/20 select-none">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
