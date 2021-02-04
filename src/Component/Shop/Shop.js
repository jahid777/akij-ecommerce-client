import React, { useEffect, useState } from 'react';
import oil from '../../image/oil.jpeg';
import butter from '../../image/butter.png';
import cookie from '../../image/cookies.jpeg';
import Product from '../Product/Product';


// const fakeProduct = [
//     {
//         img: oil,
//         name: 'fresh oil',
//         price: '$20',
//         expireDate: '10/12/21',
//         descriptor: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veniam"

//     },
//     {
//         img: butter,
//         name: 'Akij Butter',
//         price: '$10',
//         expireDate: '10/12/21',
//         descriptor: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veniam"

//     },
//     {
//         img: cookie,
//         name: 'Akij Cokie',
//         price: '$30',
//         expireDate: '10/12/21',
//         descriptor: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veniam"

//     }
// ]

const Shop = () => {
    const [product, setProduct] = useState([]);

    //all product
    // useEffect(()=>{
    //     fetch('http://localhost:8000/allProducts')
    //     .then(res => res.json())
    //     .then(data => setProduct(data))
    // },[])

    
    useEffect(()=>{
        fetch('http://localhost:8000/getALlData')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
   
    console.log(product);
    
    return (
        
            <div class="container-fluid mt-5 row">
            {
                product.map(pd => <Product product={pd}></Product> )
            }
            </div>
        
    );
};

export default Shop;