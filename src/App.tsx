import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/estaticos/footer/Footer'
import Navbar from './components/estaticos/navbar/Navbar'
import Contato from './paginas/contato/Contato'
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsusario';
import Login from './paginas/login/Login';
import ListaProdutos from './components/produtos/listaproduto/ListaProdutos';
import CadastroProduto from './components/produtos/cadastroproduto/CadastroProduto';
import ListaCategoria from './components/categorias/listacategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastrocategoria/CadastroCategoria';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />

          <Route path="/formularioProduto" element={<CadastroProduto />} />
          <Route path="/formularioCategoria" element={<CadastroCategoria />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
