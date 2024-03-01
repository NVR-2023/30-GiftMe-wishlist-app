 "use client"

import { useState } from "react";
// import Image from "next/image";
import { scrappedProductDetailsResult } from "@/types/types";
import { scrapeProductDetails } from "../../../frontend/data-science/scrapeProductDetails";



const DataSciencePage = () => {
  const [url, setUrl] = useState<string>("");
  const [productData, setProductData] = useState<scrappedProductDetailsResult>({});
  const [error, setError] = useState<string>("");

  const handleScrape = async () => {
    if (!url) {
      setError("Enter a valid URL");
      return;
    }

    try {
      const data: scrappedProductDetailsResult = await scrapeProductDetails(url);
      setProductData(data);
      setError("");
    } catch (err) {
      setError("Error in data extraction");
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <div className="space-x-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the URL"
            className="border-2 rounded border-blue-400"
          />
          <button className="bg-2 bg-zinc-700 text-white px-3 py-2 rounded" onClick={handleScrape}>
            Get data
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {productData && (
          <div>
            {Object.entries(productData).map(([key, value]) => (
              <div key={key as keyof scrappedProductDetailsResult}>{`${key}: ${value}`}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSciencePage;
