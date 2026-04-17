import React from "react";
import { CheckCircle2 } from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Company Websites",
      text: "Professional websites that present a business clearly and support long-term digital presence.",
    },
    {
      title: "Internal Dashboards",
      text: "Operational panels and internal tools that organize information, actions, and team workflows.",
    },
    {
      title: "Automation Tools",
      text: "Custom-built utilities that reduce manual work and create more efficient digital processes.",
    },
    {
      title: "API Integrations",
      text: "Connections between platforms, tools, and services that keep systems synchronized and functional.",
    },
    {
      title: "Bot Systems",
      text: "Structured bot solutions for controlled automation, communication, or operational support.",
    },
    {
      title: "Deployment Foundations",
      text: "Technical setup for environments, servers, and system delivery pipelines.",
    },
  ];

  return (
    <section className="py-24 bg-background" id="capabilities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-muted border border-border">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            What TINSYS DIGITAL can build.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The company focuses on practical digital systems that support operations, automation, and technical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:bg-card/80 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
