import {useRef} from "react";
function App(){
    const ref=useRef(0);
    function handleClick(){
        ref.current.focus();
    }
    return(
        <div>
        <input type="text" ref={ref}/>
            <button onClick={handleClick}>click to focus</button>
        </div>
    )
}
export default App;
