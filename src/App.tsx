import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Favoritos } from '@/pages/Favoritos'
import { MainPage } from '@/pages/MainPage'
import { NavBar } from './components/navmenu'
import { FavoritesProvider } from './context/FavoriteContextProvider'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const raiz = window.document.documentElement
    raiz.classList.add('dark');
  });
  
  return (
    <>
    <FavoritesProvider>
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  )
}

export default App
