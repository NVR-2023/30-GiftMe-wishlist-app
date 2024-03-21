import { scrappedProductDetailsResult } from "@/types/types";

export async function scrapeProductDetails(url: string){
  
  
  let scrappedProductDetails: scrappedProductDetailsResult=
   {
    name: "Product NAme",
    category: "Product category",
    vendor: "Product Vendor",
    price: 19.99,
    currency: "USD",
    deliveryTime: "5 days",
    imageUrl: "www.amazon.com",
  };

  return scrappedProductDetails;;
}
  