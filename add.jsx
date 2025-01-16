import {useState} from "react";
function Text(){
    const [items,setItems]=useState([]);
    function addtems(){
        const newtem=`Items ${items.length+1}`;
     setItems((prev)=>[...prev,newtem])
    }
    return(
        <div>
        <button onClick={addtems}>Add items</button>
        <ul>
        {
            items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
        }
</ul>
        </div>
    );
}
export default Text;
