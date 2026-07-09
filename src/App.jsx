import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './components/AddBook'
import SearchBook from './components/SearchBook'
import DeleteBook from './components/DeleteBook'
import ViewBooks from './components/ViewBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddBook/>
    <SearchBook/>
    <DeleteBook/>
    <ViewBooks/>
    </>
  )
}

export default App
