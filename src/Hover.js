import { useState} from 'react'
import HOC from './HOC'

function Hover(props) {
    // const [count,setCount] = useState(0);
    // const HandleClick = ()=>{ setCount(count+1)}
    const { count , increment} = props;

    return (
        <>
        <h2 onMouseOver={increment}> Hover {count} times</h2>
            </>


    
    );
}
export default HOC(Hover,10)