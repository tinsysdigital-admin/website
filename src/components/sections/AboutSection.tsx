import React from "react";

export function AboutSection() {
  return (
    <section className="py-24 bg-card border-y border-border" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-muted border border-border">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">About</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              A company built around technical execution.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                TINSYS DIGITAL is a technology company focused on building modern digital systems with clarity, structure, and strong implementation discipline.
              </p>
              <p>
                The company works across software development, web systems, automation tools, APIs, infrastructure setup, and ongoing technical support. The goal is simple: deliver practical systems that are clean, reliable, and ready to scale.
              </p>
              <p>
                TINSYS DIGITAL approaches every project with an engineering-first mindset, balancing speed, usability, maintainability, and long-term technical value.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-2xl border border-border p-8 md:p-12 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 relative z-10">
              Founder
            </h3>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2 relative z-10">
              Le Duc Tin
            </p>
            <p className="text-muted-foreground relative z-10">
              Founder of TINSYS DIGITAL
            </p>

            <div className="mt-12 pt-8 border-t border-border relative z-10">
              <p className="text-xl font-medium text-foreground italic">
                "Engineering digital systems that scale."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
