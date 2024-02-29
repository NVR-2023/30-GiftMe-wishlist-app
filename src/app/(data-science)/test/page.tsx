"use client";

import { useState } from "react";
import Image from "next/image";
import { scrapeProductDetails } from "../../../frontend/data-science/scrapeProductDetails";

const DataSciencePage = () => {
  const [url, setUrl] = useState("");
  const [productData, setProductData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleScrape = async () => {
    if (!url) {
      setError("Enter a valid URL");
      return;
    }

    try {
      const data: any = await scrapeProductDetails(url);
      setProductData(data);
      setError("");
    } catch (err) {
      setError("error in data extraction");
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
            className=" border-2 rounded border-blue-400 "
          />
          <button className="bg-2 bg-zinc-700 text-white  px-3 py-2 rounded" onClick={handleScrape}>
            Get data
          </button>
        </div>
        {error && <p className="error">{error}</p>}

        {productData && (
          <div>
            <h1>{productData.name}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSciencePage;
