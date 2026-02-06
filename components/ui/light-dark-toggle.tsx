"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const LightDarkToggle = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className={className}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-block">
              <Button variant="outline" type="button" onClick={toggleTheme}>
                <SunIcon className="block dark:hidden" />
                <MoonIcon className="hidden dark:block" />
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <span className="hidden dark:inline">Enable light mode</span>
            <span className="inline dark:hidden">Enable dark mode</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default LightDarkToggle;