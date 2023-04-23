import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    const [age,setage] = useState(36);

    const birthay=()=>{
        setage(age + 1)
    }
    return (
        <div>
                <h1>
                    HOLA SOY {props.name}! desde componente funcional
                </h1>
                    <h2>
                        Tu edad es de: {age}
                    </h2>
                    <div>
                        <button onClick={birthay}>
                            Cumplir Años
                        </button>
                    </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
