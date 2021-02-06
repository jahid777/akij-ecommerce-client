import React, { useEffect, useState } from 'react';

const AllProductControl = () => {

    //edit korer jonno single data take state a raksi
    const [singleProductData, setSingleProductData] = useState({});
    // console.log(singleProductData);
    
    //all data read korsi
    const [productsData, setProductsData] = useState([])
    useEffect(()=>{
        fetch('https://enigmatic-brook-14059.herokuapp.com/getALlDataForUpdate')
        .then(res => res.json())
        .then(data => setProductsData(data))
    },[productsData])
    // console.log(productsControl);

    
    const handleDelete = (id) => {
        fetch(`https://enigmatic-brook-14059.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
                
              // console.log('deleted successfully');
            });
            alert('product successfully deleted')
    }


    //product update korer jonno single product load
    const loadProduct = (id) => {
        fetch(`https://enigmatic-brook-14059.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(result => {
            //   console.log(result);
              setSingleProductData(result);
            });
    }

    //akhane input ar data raktesi
    const [dataOfInput, setDataOfInput] = useState({});
    //product update submiting korer jonno.. 
    const updateProduct = (id) =>{
        fetch(`https://enigmatic-brook-14059.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(dataOfInput),
          })
            .then(res => res.json())
            .then(result => {              
              console.log(result);
            });
            alert('product successfully updated')
    }

    const handleChange = (e) =>{
        const newUserInfo = {...dataOfInput}
        newUserInfo[e.target.name] = e.target.value;
        setDataOfInput(newUserInfo);
    }


    const imgDesign = {
      height:'150px',
      width: '150px',
      marginTop: '25px'
    }


    return (
       <>
          {
           productsData.map((data,index) => (
            <div key={index} class="card mb-3 container mt-5" style={{maxWidth: "540px"}}>
            <div class="row no-gutters">
              <div class="col-md-4">

              {
            data.image ? <img style={imgDesign} src={`data:image/png;base64,${data.image.img}`} alt=""/>
            :<img style={imgDesign}  src={`http://enigmatic-brook-14059.herokuapp.com/${data?.file?.name}`} class="card-img-top" alt="..."/>
           }


                {/* <img style={{height:'150px',width:'150px',marginTop:'25px'}} src={`https://enigmatic-brook-14059.herokuapp.com/${data?.file?.name}`} alt=""/> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Name:{data.name}</h5>
                  <h6 class="card-text">Price: {data.price}</h6>
                  <small class="text-muted">Expiry date: {data.date}</small>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, animi!</p>
                </div>
                  <div className="mb-2">
                  <button className="btn btn-primary"
                  style={{height:'40px',width:'120px'}}
                  onClick={() => handleDelete(data._id)}
                  >Delete</button>
                  
                   <button className="btn btn-primary ml-5"
                   style={{height:'40px',width:'120px'}}
                   onClick={() => loadProduct(data._id)}
                   >Edit</button>
                  </div>
              </div>
               
                <form action="" onSubmit={()=>updateProduct(data._id)} className="mb-2">
                   <input type="text" name="name" 
                   className="mb-2 mr-2"
                   placeholder="name"
                    onChange={handleChange}
                   defaultValue={singleProductData.name} id=""/>
                    <input type="text" name="price" 
                    placeholder="price"
                    onChange={handleChange}
                    defaultValue={singleProductData.price} id=""/>
                    <input type="text" name="date" 
                    placeholder="date"
                    onChange={handleChange}
                    className="mr-2"
                    defaultValue={singleProductData.date} id=""/> 
                    
                   <input type="submit" value="Submit"
                   style={{color:'white',borderRadius:'5px'}}
                   className="bg bg-primary"
                   />
                </form>
               
            </div>
          </div>
           ))
          }
      </>
    );
};

export default AllProductControl;