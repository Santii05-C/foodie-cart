"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from "./BusinessItem";

function BusinessList() {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    params && setCategory(params.get("category"));
    params && getBusinessList(params.get("category"));
  }, [params]);

  const getBusinessList = (category_) => {
    setLoading(true);
    GlobalApi.GetBusiness(category_).then((resp) => {
      setBusinessList(resp?.restaurants);
      setLoading(false);
    });
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl">Popular {category} Restaurants</h2>
      <h2 className="font-bold text-primary">{businessList?.length} Results</h2>

      <div
        className="grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-7 mt-2
      "
      >
        {!loading ? (
          businessList.map((restaurants, index) => (
            <div>
              <BusinessItem key={index} business={restaurants} />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default BusinessList;
