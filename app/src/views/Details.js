import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getOneProduct, setProduct } from '../store/actions/productCatalogActions'
import {addToCart} from '../store/actions/cartActions'
import { useParams } from 'react-router-dom'

const Details = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id))

    return () => {
      // console.log('cleanup');
      dispatch(setProduct(null))
    }

  }, [dispatch, id])

  const product = useSelector(state => state.productCatalog.product);
  const loading = useSelector(state => state.productCatalog.loading);

  const _product = ( product && 
    <div className="col">
    
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div className="card-text">
        <p>{ product.short }</p>
        <p className="text-danger h5">{ product.price } kr</p>
        <div className= "container d-flex " >
         <button className="btn btn-info" onClick={() => {
          dispatch(addToCart(product))
        }}>Add to cart</button>

        </div>
         
        </div>
      </div>
    </div>
  </div>
)

  return (
    <div>
      { _product }
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default Details;
