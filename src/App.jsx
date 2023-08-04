import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListToDoComponent from './components/ListToDoComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoComponent from './components/ToDoComponent'

function App() {
  
  return (
    <>
    <BrowserRouter>

    <HeaderComponent/>

    <Routes>
      {/* // http://localhost:8080 */}
      <Route path='/' element = {<ListToDoComponent/>}></Route>
      {/* // http://localhost:8080/todos */}
      <Route path='/todos' element = {<ListToDoComponent/>}></Route>
      {/* // http://localhost:8080/add-todo */}
      <Route path='/add-todo' element = {<ToDoComponent/>}></Route>

    </Routes>
     
    <FooterComponent/>

    </BrowserRouter>    
    </>
  )
}

export default App
