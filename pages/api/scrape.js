// pages/api/scrape.js
import axios from 'axios';
import cheerio from 'cheerio';

// Esta función manejará las solicitudes a tu ruta API de scraping
export default async function handler(req, res) {
  // Obtener la URL de la query string
  const { url } = req.query;

  // Verifica si la URL está presente
  if (!url) {
    return res.status(400).json({ message: 'No URL provided' });
  }

  try {
    // Realiza la petición HTTP para obtener el contenido de la página
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Extrae los datos específicos utilizando selectores CSS apropiados
    // Reemplaza los 'selector-for-...' con los selectores CSS reales que necesitas
    const name = $('selector-for-name').text().trim();
    const category = $('selector-for-category').text().trim();
    const vendor = $('selector-for-vendor').text().trim();
    const priceString = $('selector-for-price').text().replace(/[^0-9.,]/g, '').trim();
    const price = parseFloat(priceString.replace(/,/g, '.'));
    const currency = $('selector-for-currency').text().trim();
    const deliveryTime = $('selector-for-delivery-time').text().trim();
    const imageUrl = $('selector-for-image-url').attr('src') || ''; // Asegúrate de proporcionar un selector válido

    // Construye el objeto con los datos extraídos
    const productData = {
      name,
      category,
      vendor,
      price,
      currency,
      deliveryTime,
      imageUrl
    };

    // Envía la respuesta con los datos del producto
    res.status(200).json(productData);
  } catch (error) {
    // En caso de error, imprime el error y envía una respuesta con código de estado 500
    console.error('Error during web scraping:', error);
    res.status(500).json({ message: 'Error during web scraping' });
  }
}
