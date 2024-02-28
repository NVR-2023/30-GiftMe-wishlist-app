/* page.tsx
Directorio de Página de Next.js (src\app\(data-science))
En este directorio crearás el archivo page.tsx que será la página de Next.js donde los usuarios pueden ingresar una URL para hacer scraping. 
Esta página importará y utilizará la función de scrapeProductDetails desde el directorio de ciencia de datos.
*/
src\app\(data-science)\page.tsx:
import React, { useState } from 'react';
import { scrapeProductDetails } from '../../frontend/data-science/scrapeProductDetails';

const DataSciencePage = () => {
  const [url, setUrl] = useState('');
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    if (!url) {
      setError('Por favor, ingresa una URL válida.');
      return;
    }
    
    try {
      const data = await scrapeProductDetails(url);
      setProductData(data);
      setError('');
    } catch (err) {
      setError('Hubo un error al intentar extraer los datos.');
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Ingresa la URL del producto aquí"
      />
      <button onClick={handleScrape}>Obtener Datos</button>

      {error && <p className="error">{error}</p>}

      {productData && (
        <div>
          <h1>{productData.name}</h1>
          {/* Renderiza más datos del producto aquí */}
          {productData.imageUrl && <img src={productData.imageUrl} alt="Imagen del Producto" />}
        </div>
      )}
    </div>
  );
};

export default DataSciencePage;


