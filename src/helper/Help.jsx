import React, { createContext, useState } from "react";
export const Help = createContext();
const DataProvider = (props) => {
  const [addedItem, setAddedItem] = useState([]);

  const removeItem = (id) => {
    let updatedData = addedItem.filter((cval) => {
      return cval.id !== id;
    });
    setAddedItem(updatedData);
  };

const incQty =(id)=>{
    let updatedData = addedItem.map((cval) => {

        if(id===cval.id){
        return {...cval,quantity :cval.quantity+1}
        }
        return cval;
      });
      setAddedItem(updatedData);
}

const decQty =(id)=>{
    let updatedData = addedItem.map((cval) => {
    
        if(id===cval.id){
        return {...cval,quantity :cval.quantity-1}
        }
        return cval;
      }).filter((cval)=>{
          return cval.quantity !== 0;
      });
      setAddedItem(updatedData);
}


  return (
    <>
      <Help.Provider value={{ addedItem, setAddedItem, removeItem,incQty,decQty}}>
        {props.children}
      </Help.Provider>
    </>
  );
};

export default DataProvider;
