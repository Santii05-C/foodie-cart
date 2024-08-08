import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function MenuSection({ restaurant }) {
  const [menuItemList, setMenuItemList] = useState([]);

  const filterMenu = (category) => {
    const result = restaurant?.menu?.filter(
      (item) => item.category == category
    );
    setMenuItemList(result[0]);
  };

  return (
    <div className="grid grid-cols-4 mt-2">
      <div className="hidden md:flex flex-col mr-10 gap-2">
        {restaurant?.menu?.map((item, index) => (
          <Button
            variant="ghost"
            key={index}
            className="flex justify-start"
            onClick={() => filterMenu(item.category)}
          >
            {item.category}
          </Button>
        ))}
      </div>
      <div className="col-span-3">
        <h2 className="font-extrabold text-lg">{menuItemList.category}</h2>
        <div></div>
      </div>
    </div>
  );
}

export default MenuSection;
//2:30
