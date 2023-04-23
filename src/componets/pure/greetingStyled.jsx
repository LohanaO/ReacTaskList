import React,{useState} from 'react';

const loggedStyle={
    color:'white'
}

const  unloggedStyle={
    color: 'tomato',
    fontWeight: 'bold'
}
const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    const greetingUser=()=>(<p>Hola, {props.name}</p>)

    const pleaseLogin=()=> <p>Please login</p>



    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ?
         greetingUser() :
         pleaseLogin()}
            
            <button onClick={()=>{
                console.log('Boton pulsado');
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
