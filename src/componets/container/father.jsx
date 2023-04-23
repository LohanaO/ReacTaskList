import React,{useState} from 'react';
import Child from '../pure/child';

const Father = () => {
const [name, setName] = useState('Lohana');
        function showMessage(text){
            alert(`message received: ${text}`);
        }

        function updateName(newName){
            setName(newName);
        }
    return (
        <div style={{backgroundColor:'tomato',padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
