import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer';


// export const CartContext = createContext()

function App() {
  // const [cart, setCart] = useState([])
const handleKeyDown = (e) => {
    if((e.key == 'a' && e.key == 'b') || e.key == 'e' || e.key == 'i' || e.key == 'o' || e.key == 'u') {
      e.preventDefault()
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <button onClick={(e) => console.log(e.nativeEvent)}>Boton</button>
        <input onKeyDown={handleKeyDown}/>
         <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Hola Coder'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Hola Coder'}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
         
      </BrowserRouter>

     <Footer/>
    </div>
    
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;

// function App() {

//   const handleKeyDown = (e) => {
//     if((e.key == 'a' && e.key == 'b') || e.key == 'e' || e.key == 'i' || e.key == 'o' || e.key == 'u') {
//       e.preventDefault()
//     }
//   }


//    const onAdd =(quantity) => {
//    console.log(quantity)
//   }
//   return (
//     <div className="App">

//       <BrowserRouter>
      
//         <NavBar />
//         <Routes>
//           <Route path='/' element={<ItemListContainer greeting={'Hola Coder'}/>}/>
//           <Route path='/category/:categoryId' element={<ItemListContainer />} />
//           <Route path='/item/:id' element={<ItemDetailContainer />} />
//           <Route path='/detail/:productId' element={<ItemDetailContainer />} />
//           <Route path='*' element={<h1>404</h1>} />
//           <Route path='/cart' element={<Cart />} />
//          </Routes>
   
             
//        </BrowserRouter>
       
  
//         <ItemCount className="contador" initial={1} stock={20} onAdd={onAdd}/>

//          <Footer/>
     
//     </div>
    
//   );
// }


// export default App;
