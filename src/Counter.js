import { useState} from 'react'
import HOC from './HOC'

function Counter(props) {
    // const [count,setCount] = useState(0);
    // const HandleClick = ()=>{ setCount(count+1)}
    const { count , increment} = props;
    return (
        <>
        hi
        <button onClick={increment}> {props.name}Click{count} times </button>
            </>


    
    );
}
export default HOC(Counter,5)