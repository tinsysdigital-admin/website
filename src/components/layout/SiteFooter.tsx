import React from "react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <span className="font-bold text-xl tracking-tight text-foreground block mb-4">
              TINSYS DIGITAL
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium software development, automation systems, digital infrastructure, and technical execution for modern digital operations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Process", "Capabilities", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Software Development",
                "Automation Tools",
                "Bot Development",
                "API Development",
                "System Setup",
                "Server Setup",
                "Software Maintenance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:tinsysdigital.official@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  tinsysdigital.official@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 TINSYS DIGITAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
