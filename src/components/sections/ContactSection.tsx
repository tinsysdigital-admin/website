"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-muted border border-border">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Start your project request.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Send your project details through the form below. TINSYS DIGITAL will review the request and respond with the next step.
            </p>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6 border-b border-border pb-4">Direct Contact</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company</p>
                  <p className="text-foreground font-medium">TINSYS DIGITAL</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:tinsysdigital.official@gmail.com" className="text-primary hover:underline font-medium">
                    tinsysdigital.official@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Project inquiries are reviewed in the order they are received.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-2xl border border-border">
              
              {status === "success" && (
                <div className="p-4 rounded-md bg-success/10 border border-success/20 flex items-start gap-3 text-success">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium">
                    Your request has been received successfully. TINSYS DIGITAL will review your submission and contact you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-md bg-error/10 border border-error/20 flex items-start gap-3 text-error">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium">
                    Something went wrong while submitting your request. Please try again.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-error">*</span></Label>
                  <Input id="name" name="name" required placeholder="John Doe" disabled={status === "loading"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-error">*</span></Label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" disabled={status === "loading"} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company or Brand Name</Label>
                  <Input id="company" name="company" placeholder="Acme Corp" disabled={status === "loading"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type <span className="text-error">*</span></Label>
                  <select 
                    id="service" 
                    name="service" 
                    required 
                    className="flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    disabled={status === "loading"}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Automation Tools">Automation Tools</option>
                    <option value="Bot Development">Bot Development</option>
                    <option value="API Development">API Development</option>
                    <option value="System Setup">System Setup</option>
                    <option value="Server Setup">Server Setup</option>
                    <option value="Software Maintenance">Software Maintenance</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description <span className="text-error">*</span></Label>
                <Textarea id="description" name="description" required placeholder="Tell us about your project goals, requirements, and timeline..." className="min-h-[150px]" disabled={status === "loading"} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (Optional)</Label>
                  <Input id="budget" name="budget" placeholder="e.g. $5k - $10k" disabled={status === "loading"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline (Optional)</Label>
                  <Input id="deadline" name="deadline" placeholder="e.g. Q3 2026" disabled={status === "loading"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <select 
                    id="contactMethod" 
                    name="contactMethod" 
                    className="flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    disabled={status === "loading"}
                    defaultValue="Email"
                  >
                    <option value="Email">Email</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Zalo">Zalo</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Project Request"
                  )}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
