import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
   <section className="main-container">
        <footer className="row">
      <div className="col-md-6 text-center">
        <h2 className="mt-5">
          
          <b>
            Our product <br/> into your hand.
          </b>
        </h2>
        <p className="mt-3">
          With well written codes, we build amazing apps for all <br/>
          platforms, mobile and web apps in general.
        </p>
      </div>

      <div className="col-md-6">
        <form className="mt-5">
          <div className="form-group input-style">
            <input
            style={{ height:'50px',outline:'none',boxShadow:'none'}}
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Your email address"
            />
          </div>
          <div className="form-group input-style">
            <input
              style={{ height:'50px',outline:'none',boxShadow:'none'}}
              type="text"
              class="form-control"
              placeholder="Your name/Company's name"
            />
          </div>
          <div className="form-group">
            <textarea 
            className="textArea-style"
            name="text" id="" cols="30" rows="10"
            placeholder="Your message"
            >
            </textarea>
          </div>
          
          <button type="submit" className="footer-button">
            Send
          </button>
        </form>
      </div>
    </footer>
    <p className="text-center mt-5">Copyright {new Date().getFullYear()} All Rights Reserved</p>
   </section>
  );
};

export default Footer;
