
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';

const ProductDetails = () => {
   const products = useSelector((state) => state.product)
    // const data  = product;
    console.log(products);
    const { id } = useParams();
     const {image, title, price , category, description} = products;
   
   
    const dispatch = useDispatch();

     const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
            

        })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (id && id !== "") fetchProductDetails();
        return () =>{
            dispatch(removeSelectedProduct());
        }
    }, [])
    return (
     <div>
         {Object.keys(products).length === 0 ? <div>ssss</div> : 
         ( 
         <div><h1>{products.product.title}</h1>
     <img src={products.product.image} alt={title} />
     <h1>{products.product.description}</h1>
     <h1>{products.product.price}</h1>
     <h1>{products.product.category}</h1>
     </div>)
         }
        
    </div>)
}

export default ProductDetails;