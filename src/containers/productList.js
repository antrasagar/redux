import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import {setProduct} from './../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './productcomponent';

const ProductList = () => {
  const dispatch = useDispatch();
    const fetchDate = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("ERROR");
        })
        dispatch(setProduct(response.data));

    }
    useEffect(() => {
        fetchDate();
    }, [])
    return (

        <div><ProductComponent /></div>)
}
export default ProductList;