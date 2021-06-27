import React from 'react';
const Heading=(props)=>{
    return(
        <>
        <div className="story-head">
            <h1>{props.head_data}</h1>
        </div>
        </>
    );
}

export default Heading;