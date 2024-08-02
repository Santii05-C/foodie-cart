import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={200} height={200} />

      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search />
      </div>

      <div>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default Header;
