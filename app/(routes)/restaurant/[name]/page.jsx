"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function RestaurantDetails() {
  const param = usePathname();
  useEffect(() => {
    console.log(param);
  }, []);
  const GetBusinessDetails = () => {
    GlobalApi.GetBusinessDetail().then((resp) => {
      console.log(resp);
    });
  };
  return <div>RestaurantDetails</div>;
}

export default RestaurantDetails;
