import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Item({key, details, add, subtract}) {
    return (
        <div className='product'>
            <Link to={`/product/${details.id}`}><img className='productImage' src={details.thumbnail} alt={details.title} /></Link>
            <h3 style={{minHeight: "100px"}}className='title'>{details.title}</h3>
            <h6 style={{fontSize: "20px", borderTop: "2px solid yellow"}}>${details.price}</h6>
            {details.count > 0 ? 
                <div className='rectangle'>
                <div className='borderStyles'>
                <AiOutlineMinus onClick={() => subtract(details)} className='icon' />
                <p className='count'>{details.count}</p>
                <AiOutlinePlus onClick={() => add(details)} className='icon' />
                </div>
                </div>
            : 
                <p className='AddToCart' onClick={() => add(details)}>Add to Cart</p>
            }
        </div>
    );
};