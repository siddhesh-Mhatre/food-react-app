import React from 'react';
import Footer from './Footer';
import Letter from 'C:/react-project7/react-web-project/src/images/email.png';
import Button from '@material-ui/core/Button';
const Contact =()=>{
    return(
        <>
        <section className='conatact'>
          <div className="container center">
              <h1>Have some Quetion ?</h1>
              <div className="row">
                <div className="msg-icon">
             <img src={Letter} alt="..." />
                </div>
                <form>
                  <input type="text" placeholder="first name"/>
                  <input type="text" placeholder=" last name"/>
                  <input type="email" placeholder="email" />
                  <textarea  placeholder="your question"/>
                  <Button  type="submit" variant="contained" color="seconday" > Submit</Button>
                </form>
              </div>
          </div>
        </section>
          <Footer/>
        </>
    );
}

export default Contact;