import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

function BusinessList() {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");

  useEffect(() => {
    params && setCategory(params.get("category"));
  }, [params]);
  return <div>BusinessList</div>;
}

export default BusinessList;
