import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
import { GrCart } from 'react-icons/gr';
import { RxCross1 } from 'react-icons/rx';

export default function ShoppingCart({ totalItems, toggle, handleClick, cartItems, add, subtract, removeFromCart }) {

  const totalPrice = cartItems.reduce((total, product) => total + (product.price * product.count), 0);

  const items = cartItems.map((product) => (
    product.count>0 && 
    <div key={product.id}>
      <tr>
      <td style={{width: "80px"}}><img src={product.thumbnail} alt={product.title} className='cardImage'/></td>  
      <td style={{width: "250px", lineHeight: "20px", fontSize: "11px"}}><p>{product.title}</p></td>
      <td style={{color: "yellow"}}><p>${product.price}</p></td>
      <div>  
      <td><AiOutlineMinus onClick={() => subtract(product)} className='icon' /></td>
      <td><p className='count'>{product.count}</p></td>
      <td><AiOutlinePlus onClick={() => add(product)} className='icon' /></td>
      </div>
      <td><AiOutlineDelete  className='icon' onClick={() => removeFromCart(product)} /></td>
      </tr>
    </div>
  ));

  return (
    <>
    {
      toggle ?
      <div className='cart'>
        <RxCross1 className='sign' onClick={handleClick}/>
        <h2 className='shoppingHeading'>{totalItems ? `TOTAL ITEMS:${totalItems}` : "CART EMPTY"}</h2>
        <div className='cardContainer'>
          <table>{items}</table>
        </div>
        <div className='checkout'>
          <div className='subTotal'>
            <p style={{color: "#555454"}}>SUBTOTAL</p>
            <p style={{color: "yellow"}}>${totalPrice}</p>
          </div>
          <p className='checkoutButton' onClick={() => alert(totalPrice)}>CHECKOUT</p>
        </div>
      </div>
      :
      <div className='sign'>
        <GrCart onClick={handleClick}/>
        <span style={{color: "red"}}>{totalItems}</span>
      </div>
    }
    </>
  );
};