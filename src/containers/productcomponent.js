
import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const ProductComponent = () => {
   const products = useSelector((state) => state.allProduct.products);
   console.log(products);
   const myStyle = {
      width: "200px",
      height: "100px",

   }
   const data = {
      display: "flex",
      
   }
   const renderList =
      products.map((item, i) => {
         const { id, title, image, price, category } = item;
         return (<div className="col" key = {id} style={data} style={{border: "none"}}>
            <Link to ={`/product/${id}`}>
            <div className="ui links card" style={{border: "none"}}>
               <div className="card" style={{border: "none"}}>
                  <div className="col-6" >  <img src={image} alt={title} style={myStyle} /></div>
                  <div className="col-12">{title}</div>
                  <div className="col-8">{price}</div>
               </div>
            </div>
            </Link>
         </div>)


      })

   // const {id, title} = products[0];
   return (<div className="row" style={{border: "none"}}>{renderList}</div>)
}

export default ProductComponent;