import React from 'react'
import { useDispatch } from 'react-redux';
 import { addToCart } from '../../store/actions/cartActions';
 import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-50">
    
      <Link to={`/Details/${product._id}`}>
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
          <p>{ product.short }</p>

          <div className= "container d-flex " >
           <button className="btn btn-dark" onClick={() => {
            dispatch(addToCart(product))
          }}>Add to cart</button>

         
          </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;