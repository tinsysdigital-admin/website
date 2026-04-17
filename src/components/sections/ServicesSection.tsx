import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const serviceGroups = [
    {
      title: "Development",
      services: [
        {
          name: "Web Development",
          desc: "We design and build modern, responsive websites that present brands professionally and support real business goals.",
        },
        {
          name: "Software Development",
          desc: "We create custom software systems tailored to workflows, operations, and unique project requirements.",
        },
        {
          name: "API Development",
          desc: "We build and integrate APIs that connect systems, automate data flow, and support scalable digital operations.",
        },
      ],
    },
    {
      title: "Automation",
      services: [
        {
          name: "Automation Tools",
          desc: "We develop tools that reduce repetitive manual work and improve digital efficiency across business processes.",
        },
        {
          name: "Bot Development",
          desc: "We build custom bots for communication flows, notifications, operational tasks, and controlled automation scenarios.",
        },
      ],
    },
    {
      title: "Infrastructure",
      services: [
        {
          name: "System Setup",
          desc: "We configure technical systems that support business operations, workflows, and internal digital structure.",
        },
        {
          name: "Server Setup",
          desc: "We prepare hosting environments, server deployments, and infrastructure foundations for reliable delivery.",
        },
      ],
    },
    {
      title: "Support",
      services: [
        {
          name: "Software Maintenance",
          desc: "We maintain, improve, troubleshoot, and support software systems after launch to keep them stable and useful.",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-muted border border-border">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Technical services for serious digital operations.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From custom builds to infrastructure and maintenance, TINSYS DIGITAL delivers practical technical services designed for execution, stability, and growth.
          </p>
        </div>

        <div className="space-y-24">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">{group.title}</h3>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {group.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group">
                    <h4 className="text-xl font-semibold mb-4 text-foreground">{service.name}</h4>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.desc}</p>
                    <Button variant="ghost" className="p-0 h-auto text-primary group-hover:underline group-hover:translate-x-1 transition-all" asChild>
                      <Link href={`#contact?service=${encodeURIComponent(service.name)}`}>
                        Request this service <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
