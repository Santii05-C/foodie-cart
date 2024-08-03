"use client";
import React, { useEffect, useState, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.GetCategory().then((resp) => {
      console.log(resp.categories);
      setCategoryList(resp.categories);
    });
  };
  return <div>CategoryList</div>;
}

export default CategoryList;
