import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import uploadIcon from '../../../image/upload.png';
import './CreateProduct.css';

const CreateProduct = () => {
   const history = useHistory();
    const [createdProduct, setCreatedProduct] = useState([]);
    console.log(createdProduct);
  

    const handleChange = (e) => {
        const newUserInfo = { ...createdProduct};
        newUserInfo[e.target.name] = e.target.value;
        setCreatedProduct(newUserInfo);
      };
       const[file, setFile] = useState(null);
       const handleFile = (e) => {
          const newFile = e.target.files[0]
          setFile(newFile)
       };

       const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', createdProduct.name)
        formData.append('date', createdProduct.date)
        formData.append('price', createdProduct.price)
         
        fetch('https://enigmatic-brook-14059.herokuapp.com/addAProduct', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        alert('product added successfully')
        history.push('/');
       }
    return (
        <div className="rightOption">
      <form onSubmit={handleSubmit} className="order-form" action="">
        <div className="form-group">
          
          <input
            type="text"
            name="name"
            placeholder="Product name"
            id=""
            onChange={handleChange}
            required
          />

        <br/>
         
         
          <input
            type="date"
            name="date"
            onChange={handleChange}       
            required
          />


          <div className="form-row inline d-block">
            <div className=" form-group col mr-2">
            <br/>
            
              <input
                type="number"
                name="price"
                className=""
                placeholder="Price"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col ml-4 ">
              <input
                onChange={handleFile}
                name="file"
                id="upload"
                type="file"
                hidden
                accept="image/*"
              />
              <label for="upload" className="upload-design">
                {" "}
                <img className="upload-img" src={uploadIcon} alt="" /> Choose
                file
              </label>
            </div>
          </div>
        </div>

        <div className="" style={{ width: " 170px", marginTop:'-20px'}}>
          <input
            className="submit-button "
            type="submit"
            value="Send"
            style={{
              background: "#111430",
              padding: " 0 60px 0 60px",
              width: "170px",
              color:"white"
            }}
          />
          </div>
      </form>
    </div>
    );
};

export default CreateProduct;