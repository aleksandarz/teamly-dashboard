import { ReactNode } from "react";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

type Props = {
  children?: ReactNode;
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-0 mr-1.5 top-1/2"/>
    </>
  );
}