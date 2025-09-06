"use client";

import { useEffect, useState } from "react";

const MyLoading = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  
  return (
    <div className="h-full w-full flex justify-center items-center">
    <p>sfdds</p>
    </div>
  );
};

export default MyLoading;
