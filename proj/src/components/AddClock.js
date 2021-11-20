import React, { useState } from 'react';
// import useState from 'usestate';
const AddClock = () => {
    const [comp, setComp] = useState("aaaaaaaaaaaaaaaaaa");
    const [mod, setMod] = useState(null);
    const [col, setCol] = useState(null);
    const [price, setPrice] = useState(null);
    const [typ, setTyp] = useState(null);
    // process.env.URL_C
    const DoCancel = () => {
        setComp("");
        setMod("");
        setCol("");
        setPrice("");
        setTyp("");
    }
    return (
        <>
            <label>Company Name</label>
            <input type="text" value={comp} />
            <br></br>
            <label>Model</label>
            <input type="text" value={mod} />
            <br></br>
            <label>Color</label>
            <input type="text" value={col} />
            <br></br>
            <label>Price</label>
            <input type="text" value={price} />
            <br></br>
            <label>Type</label>
            <input type="text" value={typ} />
            <br></br>
            <button onClick={()=>{DoCancel}}  >Cancel</button>
            <button  >update</button>
        </>
    )
}

export default AddClock;