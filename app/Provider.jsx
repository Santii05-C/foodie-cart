import React from "react";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner";

function Provider({ children }) {
  return (
    <div className="px-10 md:px-20 relative ">
      <Header />
      <Toaster />
      {children}
    </div>
  );
}

export default Provider;
