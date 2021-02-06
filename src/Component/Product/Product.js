import React from 'react';

const Product = ({product}) => { 
  const imgDesign = {
    height:'150px',
    width: '150px',
    marginLeft: '130px',
    marginTop: '5px'
  }
    // const {name, price,  date, file} = props.product;
    return (       
        <div class="col-md-4 mb-5" style={{boxShadow:'2px 2px 3px lightGray'}}>

         {
            product.image ? <img style={imgDesign} src={`data:image/png;base64,${product.image.img}`} alt=""/>
            :<img style={imgDesign}  src={`http://enigmatic-brook-14059.herokuapp.com/${product?.file?.name}`} class="card-img-top" alt="..."/>
         }
         {/* <img style={imgDesign}  src={`https://enigmatic-brook-14059.herokuapp.com/${product?.file?.name}`} class="card-img-top" alt="..."/> */}
         

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