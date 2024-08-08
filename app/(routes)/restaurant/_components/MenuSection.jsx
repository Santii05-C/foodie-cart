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
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {menuItemList?.menuItem?.map((item, index) => (
            <div className="p-2">
              <Image
                src={item?.productImage.url}
                alt={item.name}
                width={120}
                height={120}
                className="object-cover w-[120px] h-[120px rounded-lg"
              />

              <div>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <h2>{item.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
