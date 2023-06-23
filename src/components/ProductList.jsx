import Item from './Item';

export default function ProductList({ products, add, subtract }) {

  const list = products.map(item => {
    return <Item key={item.id} details={item} add={add} subtract={subtract} />
  });
  
  return (
    <div>
      <h2 className='heading'>OUR PRODUCTS</h2>
      <div className='main'>
        {list}
      </div>
    </div>
  );
};