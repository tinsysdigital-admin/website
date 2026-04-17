import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, Layers, Network, ShieldCheck } from "lucide-react";

export function TrustSection() {
  const trustItems = [
    {
      title: "Custom-built solutions",
      text: "Every project is shaped around actual business or operational needs, not generic templates.",
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
    {
      title: "Scalable engineering",
      text: "We design systems that can evolve over time instead of collapsing after the first release.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Clean technical process",
      text: "From scope to deployment, every step is structured for clarity, quality, and maintainability.",
      icon: <Network className="w-6 h-6 text-primary" />,
    },
    {
      title: "Support after launch",
      text: "Delivery is not the end. Ongoing maintenance, fixes, and technical support remain part of the service mindset.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-card border-y border-border" id="trust">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Built for real execution.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TINSYS DIGITAL is designed around one principle: build systems that work in the real world. We focus on clear architecture, reliable delivery, maintainable code, and technical decisions that support long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
