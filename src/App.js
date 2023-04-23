import logo from './logo.svg';
import './App.css';
import Greeting from './componets/pure/greeting';
import GreetingF from './componets/pure/greetingF';
import TaksListComponent from './componets/container/taks_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import GreetingStyled from './componets/pure/greetingStyled';

function App() {
  return (
    <div className="App">
    
    
      {/* componentes propio Greeting.jsx */}
      {/*<Greeting name="LOHANA"></Greeting>*/}
      {/*<GreetingF name="Lohana"></GreetingF>*/}
      {/*<TaksListComponent></TaksListComponent>*/}
      {/*<Ejemplo1></Ejemplo1>*/}
      {/*<Ejemplo2></Ejemplo2>*/}
      {/*<GreetingStyled name='Lohana'></GreetingStyled>*/}
      <TaksListComponent></TaksListComponent>
    </div>
  );
}

export default App;
