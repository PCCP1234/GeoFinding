
import {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';
import api from './Services/api';

function App() {

  const [input, setInput] = useState('')
  const [cp, setCp] = useState({})

  async function handleSearch(){
    if(input === ""){
      alert('Introduza o código postal!')
      return;
    }

    try {
      const response = await api.get(`${input}`)
      setCp(response.data)
      setInput('')
    } catch {
      alert('Código incorreto ou não encontrado!')
      setInput("")
      
    }
  }
  return (
    <div className="container">
     <h1 className="title">Finder Cep</h1>

     <div className="containerInput">
      <input
      type="text"
      placeholder="Digite seu Cep..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color='#FFF'/>
      </button>
     </div>
      
      
      {Object.keys(cp).length > 0 && (
        <main className='main'>
          <h2>{cp.CP}</h2>

          <span>Rua: {cp.ruas[0]}</span>
          <span>Concelho: {cp.Concelho}</span>
          <span>Distrito: {cp.Distrito}</span>
          

        </main>

      )}
     

    </div>
  );
}

export default App;
