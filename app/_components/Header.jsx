"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { CartUpdateContext } from "../_context/CartUpdateContext";

function Header() {
  const { user, isSignedIn } = useUser();
  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);

  useEffect(() => {
    console.log("Execute Me!");
  }, [updateCart]);

  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-md ">
      <Image src="/logo.png" alt="logo" width={200} height={200} />

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search />
      </div>

      {isSignedIn ? (
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <ShoppingCart />
            <label className="p-1  px-2 rounded-full bg-slate-200">0</label>
          </div>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}
//2:41
export default Header;
