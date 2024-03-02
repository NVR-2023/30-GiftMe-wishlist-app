// page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { scrappedProductDetailsResult } from "@/types/types";

const DataSciencePage = () => {
  const [url, setUrl] = useState<string>("");
  const [productData, setProductData] = useState<scrappedProductDetailsResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleScrape = async () => {
    if (!url) {
      setError("Enter a valid URL");
      return;
    }

    try {
      // Codifica la URL para su uso en una consulta URI
      const encodedUrl = encodeURIComponent(url);
      // Realiza la solicitud al endpoint de la API de scraping
      const response = await fetch(`/api/scrape?url=${encodedUrl}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setProductData(data);
        setError("");
      } else {
        // Manejo cuando data es null
        setProductData(null);
        setError("No data found");
      }
    } catch (err) {
      // Actualizar el estado para manejar el error
      setProductData(null);
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleScrape}
          >
            Get data
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {productData && (
          <div className="mt-4">
            {Object.entries(productData).map(([key, value]) => (
              <div key={key} className="py-2">
                <strong>{key}:</strong> {value ?? 'N/A'}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSciencePage;
