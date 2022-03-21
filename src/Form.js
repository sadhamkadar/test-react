import { useState } from 'react'

function Form() {
    const [input, setInput] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [tableValue, setTableValue] = useState([]);
    const handleChange = (e) => {
        console.log("handleChange action called");
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    };

    const submitAction = (event) => {

        event.preventDefault();
        console.log("submit action called");
        setSubmitted(true);
        setTableValue(tableValue => ([...tableValue, input]));
        console.log(input);
        console.log(tableValue);
    };

    const deleteAction = (index) => {
        console.log("deleteAction called:");

        const tempArray = tableValue.filter((val) => val.userName !== index)

        setTableValue(tempArray);
        console.log(tempArray);

    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <form >
                    {/* <div > */}
                    <input style={{ width: '30%' }} name="userName" value={input.userName} onChange={handleChange} required
                        maxLength='20' minLength="4" placeholder='Enter User Name' /><br />
                    <input type='number' style={{ width: '30%' }} name="age" value={input.age} onChange={handleChange} required maxLength='3' minLength="1" placeholder='Enter Age' /><br />
                    <input style={{ width: '30%' }} name="address" value={input.address} onChange={handleChange} required minLength="4" placeholder='Enter Address' /><br />
                    <button onClick={submitAction}>submit</button>
                </form>
                {tableValue.length > 0 &&
                    <div>
                        <div>{tableValue.length}</div>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'blue' }}>
                                    <td>UserName</td>
                                    <td>Age</td>
                                    <td>Address</td>
                                    <td>Operation</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableValue.map((value, index) =>
                                    (
                                        <tr key={index}>
                                            <td>{value.userName}</td>
                                            <td>{value.age}</td>
                                            <td>{value.address}</td>
                                            <td>
                                                <button onClick={() => deleteAction(value.userName)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                }



                {/* </div> */}
            </div>
        </>
    )
}
export default Form