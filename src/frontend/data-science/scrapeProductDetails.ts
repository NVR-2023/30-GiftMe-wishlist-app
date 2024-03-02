// scrapeProductDetails.ts
import axios from 'axios';
import cheerio from 'cheerio';
import { scrappedProductDetailsResult } from "@/types/types";

export async function scrapeProductDetails(url: string): Promise<scrappedProductDetailsResult | null> {
  try {
    // Realiza la petición HTTP para obtener el contenido de la página
    const response = await axios.get(url);
    const html = response.data;

    // Carga el HTML en Cheerio para su análisis
    const $ = cheerio.load(html);

    // Extrae los datos específicos utilizando selectores CSS apropiados
    // Estos selectores son solo ejemplos y deben ser reemplazados por los selectores reales que necesitas
    const name = $('selector-for-name').text().trim();
    const category = $('selector-for-category').text().trim();
    const vendor = $('selector-for-vendor').text().trim();
    const priceString = $('selector-for-price').text().replace(/[^0-9.,]/g, '').trim();
    const price = parseFloat(priceString.replace(/,/g, '.'));
    const currency = $('selector-for-currency').text().trim();
    const deliveryTime = $('selector-for-delivery-time').text().trim();
    const imageUrl = $('selector-for-image').attr('src') || ''; // Asegúrate de proporcionar un selector válido para la imagen

    // Construye el objeto con los datos extraídos
    const productData: scrappedProductDetailsResult = {
      name,
      category,
      vendor,
      price,
      currency,
      deliveryTime,
      imageUrl
    };

    return productData;
  } catch (error) {
    console.error('Error during web scraping:', error);
    return null;
  }
}
