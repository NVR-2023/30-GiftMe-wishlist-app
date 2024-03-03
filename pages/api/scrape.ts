import axios from 'axios';
import cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

type ScrapeResponse = {
  name: string;
  category: string;
  vendor: string;
  price: number;
  currency: string;
  deliveryTime: string;
  imageUrl?: string;
};

type ErrorResponse = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScrapeResponse | ErrorResponse>
) {
  
  const { url } = req.query;

  if (typeof url !== 'string') {
    
    return res.status(400).json({ message: 'URL must be a string' });
  }

  try {
    const encodedUrl = decodeURIComponent(url);
    const response = await axios.get(encodedUrl);
    const html = response.data;
    const $ = cheerio.load(html);

    const productData: ScrapeResponse = {
      name: $('#productTitle').text().trim(),
      category: $('span.a-list-item').first().text().trim(),
      vendor: $('a#bylineInfo').text().replace('Visita la tienda de ', '').trim(),
      price: parseFloat($('.a-offscreen').first().text().replace(/[^0-9.,]/g, '').replace(/,/g, '.')),
      currency: $('.a-price-symbol').first().text().trim(),
      deliveryTime: $('[data-csa-c-delivery-time]').attr('data-csa-c-delivery-time') || '',
      imageUrl: $('img#landingImage').attr('src') || '',
    };

    if (productData.name && productData.price) {
      res.status(200).json(productData);
    } else {
      throw new Error('Some product details are missing');
    }
  } catch (error: unknown) {
    console.error('Error during web scraping:', error);

    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({ message: 'Error during web scraping', error: errorMessage });
  }
}
