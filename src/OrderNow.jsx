import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function OrderNow(props) {
  const [amount] = useState(props.prod_detail.price_);



const [msg,setmsg]=useState(false);  
const fun_=()=>{
setmsg(true);
}

  const [inc, setinc] = useState(1);
  const increment = () => {
    setinc(inc + 1);
  };

  const decrement = () => {
    if (inc > 0) {
      setinc(inc - 1);
    }
    setinc(1);
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// for cancel
const cancel=()=>{
  setOpen(false);
}

const click = (event) => {
  event.preventDefault();
  alert("form submitted");
};
  return (
    <div>
      <button type="button" onClick={handleOpen} className="btn">
        OrderNow
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

        
          <div className={classes.paper}>
          <button onClick={cancel}>X</button>
            <h2>{props.prod_detail.name_}</h2>
            <h4>price</h4>
            <h5>{inc * amount}$</h5>
        

             <h4>quantity</h4>
       
            <div className="add-minus-quantity">
          <i className="fa fa-minus minus" aria-hidden="true"   onClick={decrement} ></i>
          <input type="text" placeholder={inc}></input>
          <i className="fa fa-plus add" aria-hidden="true"  onClick={increment} ></i>
        </div>



            <h3>pay by credit</h3>
            <form onSubmit={click}>
            <div className="row">
            <input type="text" name="add" placeholder="Enter your address" required />
            <input type="text" name="cvv" placeholder="Enter CVV" required />
            <input type="password" name="pass" className="fade_pass" placeholder="OTP"  required/>
            </div>
            <button type="submit" onClick={()=>fun_(props.prod_detail)} className="order-btn">order</button>
            </form>
          
          </div>
         

        </Fade>
      </Modal>
    </div>
  );
}

export default OrderNow;
