import React from "react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
        <span>Engineering digital systems for modern businesses.</span>
        <span className="hidden sm:inline-block opacity-80 text-xs">Software. Automation. Infrastructure.</span>
      </div>
    </div>
  );
}
