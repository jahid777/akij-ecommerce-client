import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  console.log("this is printing",search);

  //all product
  // useEffect(()=>{
  //     fetch('https://enigmatic-brook-14059.herokuapp.com/allProducts')
  //     .then(res => res.json())
  //     .then(data => setProduct(data))
  // },[])

  // useEffect(() => {
  //   fetch("https://enigmatic-brook-14059.herokuapp.com/getALlData")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);

  //this is for search box
    useEffect(() => {
      fetch("https://enigmatic-brook-14059.herokuapp.com/getALlData?search="+search)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [search]);

  const handleSearchBlur = (event) => {
    event.preventDefault();
     setSearch(event.target.value)
     console.log("clicked");    
  };

  return (
    <section>
      <form  className="d-flex" style={{ justifyContent: "center" }}>
        <div class="form-group  mt-4">
          <label for="exampleInputEmail1">Search your product</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{
              width: "200px",
              border: "1px solid black",
              justifyContent: "center",
            }}   
            onChange={handleSearchBlur}      
          />
        </div>
        {/* <input
          type="submit"
          class="btn btn-primary"
          style={{ height: "40px", marginTop: "55px" }}
          value="search"
        /> */}
      </form>

      <div class="container-fluid mt-5 row">
        {product.map(pd => (
          <Product product={pd}></Product>
        ))}
      </div>
    </section>
  );
};

export default Shop;
