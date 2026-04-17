import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaBand() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground mb-6 max-w-4xl mx-auto">
          Ready to build something structured, modern, and reliable?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          If your business, brand, or project needs strong technical execution, TINSYS DIGITAL is ready to review your request.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90" asChild>
            <Link href="#contact">Start a Project</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto mt-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
