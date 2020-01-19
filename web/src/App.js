import React, {useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './responsive.css';

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs()
  }, [])

  async function handelAddDev(data) {
    const response = await api.post("/devs", data)
 
    setDevs([...devs, response.data])
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handelAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;