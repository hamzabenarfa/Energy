"use client";
import { useState } from "react";
import { Logo } from "@/app/(dashboard)/_components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Login from "@/components/login";

const Main = () => {


  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="pt-4  md:px-24 flex md:flex-row justify-between">
        <Logo />
        <div className="flex flex-row gap-2">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About Us</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </div>
      <div className=" space-y-8 p-2  flex flex-col justify-center items-center md:flex-row xl:gap-x-20">
        <div className=" p-2 space-y-2">
          <div className="">
            <h1 className="text-5xl pb-1 font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              Energize Your Power Infrastructure:
            </h1>
            <h1 className="text-4xl font-bold text-slate-700">
              The Ultimate Solution for
            </h1>
            <h1 className="text-4xl font-bold text-slate-700">
              Supervisors and Users
            </h1>
          </div>
          <div className="px-1">
            <p className="text-sm font-medium">
              Empower your engineering team, supervisors, and users with our
              comprehensive platform,
            </p>
            <p className="text-sm font-medium">
              ensuring efficient device management and real-time monitoring.
            </p>
          </div>
        </div>

       <Login />
      </div>

      <div className="flex items-center gap-1 justify-center">
        {/* <small className="text-xs text-center">All rights reserved to</small>
        <Link
          className="text-md text-center font-bold"
          href="https://www.facebook.com/benarfahamza/"
        >
          Hamza Benarfa
        </Link> */}
      </div>
    </div>
  );
};

export default Main;
