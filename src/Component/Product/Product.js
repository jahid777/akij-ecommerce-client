import React from 'react';

const Product = ({product}) => { 
    // const {name, price,  date, file} = props.product;
    return (       
        <div class="col-md-4 mb-5" style={{boxShadow:'2px 2px 3px lightGray'}}>
          <img style={{height:'150px',width:'150px',marginLeft:'130px',marginTop:'5px'}}  src={`http://localhost:8000/${product?.file?.name}`} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Name: {product.name}</h5>
             <h6>Price: ${product.price}</h6>
            <small class="text-muted">Expiry date: {product.date}</small>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rerum.</p>
          </div>
            <button className="btn btn-primary mb-2">Buy now</button>
        </div>
    );
};

export default Product;