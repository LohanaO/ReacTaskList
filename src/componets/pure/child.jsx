import React,{useRef} from 'react';

const Child = ({ name, send, update}) => {
    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton (){
        const text= messageRef.current.value;
        alert(`Text in input: ${text} `);
    }

    function pressButtonParam (text){
        alert(`text: ${text}` );
    }

    function SubmitName(e){
        e.preventDefault(); 
        update(nameRef.current.value)
    }

    return (
        <div style={{backgroundColor:'grey', padding:'30px'}}>
            <p onMouseOver={()=> console.log('On Mouse Over')}>
            Hello,{name}
            </p>
            <button onClick={()=> console.log('Pressed button 1')}>
                Boton 1
            </button>
            <button onClick={()=> pressButton()}>
                Boton 2
            </button>
            <button onClick={()=>pressButtonParam('Hello')}>
                Boton 3
            </button>
           

            <input placeholder='Send a text a your Father' 
            onFocus={()=> console.log('Input Focused')}
            onChange={(e)=> console.log('Input changed:', e.target.value)}
            onCopy={()=> console.log('Copied text from input')} 
            
            ref={messageRef}   
            />
             <button onClick={()=>send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={SubmitName} >
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
