import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProductCatalog, loading } from '../store/actions/productCatalogActions';

const Products = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog.productCatalog)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  console.log(productCatalog)

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
       {loading && !productCatalog && <p>Loading...</p>}
      { productCatalog && productCatalog.map( product => <ProductCard key={product._id} product={product}  /> )}
    </div>
  )
}

export default Products