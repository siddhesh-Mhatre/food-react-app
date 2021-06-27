import React, { useState } from "react";
import Heading from "./Heading";
import Pop from "./Pop";
import Foodimg from "./Foodimg";
import Sdata from "./Sdata";
import Button from '@material-ui/core/Button';


import f12 from "C:/react-project7/react-web-project/src/images/f12.jpg";
import f13 from "C:/react-project7/react-web-project/src/images/f13.jpg";
import f14 from "C:/react-project7/react-web-project/src/images/f14.jpg";
import f15 from "C:/react-project7/react-web-project/src/images/f15.jpg";
import f16 from "C:/react-project7/react-web-project/src/images/f16.jpg";

const Reservations = () => {
  const [Data, setfullData] = useState({
    date: "",
    time: "",
    size:"",
  });

  const inputEvent = (event) => {

    const {value,name}=event.target;
    setfullData((preValue) => {
      console.log([name]);
      console.log(value);
     return{
       
       ...preValue,
       [name]:value //using name pass the value
     }

    });
  };





const click=(event)=>{
  event.preventDefault();
  console.log("hfgd");
//   console.log(Data.size);
// console.log(Data.date);
// console.log(Data.time);
// return (<Popdata Date_={Data.date} Time={Data.time}/>);
}



  const [expand, setExpand] = useState(false);
  const expandIt = () => {
    setExpand(true);
  };

  const shrinkIt = () => {
    setExpand(false);
  };
  return (
    <>
      <section className="Reservation">
        <Heading head_data="Reservation" />
        <div className="res-content">
          <form onSubmit={click}>
            <div className="row">
              <input type="date" min="2021-06-10"  name='date'  onChange={inputEvent} value={Data.date}/>

              <input type="time"  step="900"  name='time'  onChange={inputEvent} value={Data.time}/>

              <select name="size" id="size" name='size'  onChange={inputEvent} value={Data.size}>
                <option value="-1" select="true">
                  Party Size
                </option>
                <option value="0">1 person</option>
                <option value="1">2 person</option>
                <option value="2">3 person</option>
                <option value="3">4 person</option>
              </select>

              <Pop  Date_={Data.date} Time={Data.time} />
              
            </div>
          </form>
          <div className="food-imgs" >
            <Foodimg Img_={f12} Title="#pizza" />
            <Foodimg Img_={f13} Title={"#pizza"} />
            <Foodimg Img_={f14} Title={"#pizza"} />
            <Foodimg Img_={f15} Title={"#pizza"} />
            <Foodimg Img_={f16} Title={"#pizza"} />
  
            {expand
              ? Sdata.map((val, ind) => {
                  return (
                    <Foodimg key={ind} Img_={val.imgsrc} Title={val.title} />
                  );
                })
              : null}
          </div>

<div className="center">
          <Button type="submit" onClick={expandIt} onDoubleClick={shrinkIt}  variant="contained" color="primary" title={expand ? "dobble click" : "Click"}>
            {expand ? "show less" : "show more"}
          </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservations;
