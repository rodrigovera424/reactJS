// import logo from './logo.svg';
// import './App.css';
import Avatar from './components/Avatar/Avatar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ClassCount from "./components/ClassCount/ClassCount";
import FunctionCounter from "./components/FunctionCounter/FunctionCounter";




function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola Coders"/>
      <Avatar name="Sebastian" age="28" country="Argentina">
        <button>Boton</button>
      </Avatar>
      <Avatar name="Renzo" age="25" country="Uruguay"> 
        Texto de prueba
      </Avatar>
      <FunctionCounter />
      <ClassCount />
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
