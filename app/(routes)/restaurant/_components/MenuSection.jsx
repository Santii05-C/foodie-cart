import { Button } from "@/components/ui/button";
import React from "react";

function MenuSection({ restaurant }) {
  const filterMenu = () => {};
  return (
    <div>
      <div className="grid grid-cols-4 mt-2">
        <div className="hidden md:flex flex-col mr-10 gap-2">
          {restaurant?.menu?.map((item, index) => (
            <Button
              variant="ghost"
              className="flex justify-start"
              onClick={() => filterMenu(item.category)}
            >
              {item.category}
            </Button>
          ))}
        </div>
        <div className="col-span-3">Menu List</div>
      </div>
    </div>
  );
}

export default MenuSection;
