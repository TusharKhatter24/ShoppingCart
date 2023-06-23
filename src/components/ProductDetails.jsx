import { useParams } from 'react-router-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

export default function ProductDetails({ products, add, subtract }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();

  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  function handleNextImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  function handlePrevImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2 className='heading'>Product Details</h2>
      <div className='ProductDetails'>
        <div className='ProductDetailsImage'>
          <img
            src={product.images[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            className='imageStyles'
          />
          <div className='buttonContainer'>
            <GrPrevious onClick={handlePrevImage} className='buttonStyles' />
            <GrNext onClick={handleNextImage} className='buttonStyles' />
          </div>
        </div>
        <div className='ProductDetailsContent'>
          <h3 style={{borderBottom: "2px solid yellow"}}>{product.title}</h3>
          <p>{product.description}</p>
          <p><span className='red'>Price:</span> $ {product.price}</p>
          <p><span className='red'>Discount Percentage:</span> {product.discountPercentage}%</p>
          <p><span className='red'>Rating:</span> {product.rating}★</p>
          <p><span className='red'>Stock:</span> {product.stock}</p>
          <p><span className='red'>Brand:</span> {product.brand}</p>
          <p><span className='red'>Category:</span> {product.category}</p>
          {product.count > 0 ? 
              <div className='borderStyles'>
              <AiOutlineMinus onClick={() => subtract(product)} className='icon' />
              <p className='count'>{product.count}</p>
              <AiOutlinePlus onClick={() => add(product)} className='icon' />
              </div>
           : 
            <button onClick={() => add(product)} className='ATC'>Add to Cart</button>
          }
        </div>
      </div>
    </div>
  );
}