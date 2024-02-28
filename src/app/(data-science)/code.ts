import axios from 'axios';
import * as cheerio from 'cheerio';
type ProductDataType = {
  name?: string;
  category?: string;
  vendor?: string;
  price?: number;
  currency?: string;
  deliveryTime?: string;
};
async function scrapeProductDetails(url: string): Promise<ProductDataType> {
  const productData: ProductDataType = {};
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Your User Agent Here' 
      }
    });
    const html = response.data;
    const $ = cheerio.load(html);
    productData.name = $('#productTitle').text().trim();
    productData.category = $('span.a-list-item').first().text().trim(); 
    productData.vendor = $('a#bylineInfo').text().replace('Visita la tienda de ', '').trim();
    const priceString = $('.a-offscreen').first().text().replace(/[^0-9.,]/g, '');
    productData.price = parseFloat(priceString.replace(/,/g, '.'));
    productData.currency = $('.a-price-symbol').first().text().trim();
    productData.deliveryTime = $('[data-csa-c-delivery-time]').attr('data-csa-c-delivery-time');
  } catch (error) {
    console.error('Error during web scraping:', error);
  }
  return productData;
}
// Use this function with a valid URL
scrapeProductDetails('https://www.amazon.es/Plegable-Portatil-Auxiliar-Trabajar-Cervical/dp/B0BLT9MTHB/?_encoding=UTF8&pd_rd_w=WFHFY&content-id=amzn1.sym.a8383acb-a908-4bb7-9c0f-de08653f596d%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=a8383acb-a908-4bb7-9c0f-de08653f596d&pf_rd_r=30D4HH83BAJB7VV5PVK2&pd_rd_wg=ZjwBv&pd_rd_r=2f7158ec-4a22-46d7-b10c-c71cd5dc1bd3&ref_=pd_gw_ci_mcx_mr_hp_d').then(data => console.log(data));