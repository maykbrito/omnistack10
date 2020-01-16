import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './responsive.css';

function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])


  async function handelAddDev(e) {
    e.preventDefault();
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handelAddDev}>
          <div className="input-block"> 
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              className="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block"> 
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block"> 
              <label htmlFor="longitude">Longitude</label>
              <input 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://placehold.it/500" alt="Imagem de"/>
              <div className="user-info">
                <strong>Mayk Brito</strong>
                <span>Javascript, HTML, CSS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Arum quae officia modi consequatur vero eum delectus voluptatibus!</p>
            <a href="https://github.com/maykbrito">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://placehold.it/500" alt="Imagem de"/>
              <div className="user-info">
                <strong>Mayk Brito</strong>
                <span>Javascript, HTML, CSS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Arum quae officia modi consequatur vero eum delectus voluptatibus!</p>
            <a href="https://github.com/maykbrito">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://placehold.it/500" alt="Imagem de"/>
              <div className="user-info">
                <strong>Mayk Brito</strong>
                <span>Javascript, HTML, CSS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Arum quae officia modi consequatur vero eum delectus voluptatibus!</p>
            <a href="https://github.com/maykbrito">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://placehold.it/500" alt="Imagem de"/>
              <div className="user-info">
                <strong>Mayk Brito</strong>
                <span>Javascript, HTML, CSS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Arum quae officia modi consequatur vero eum delectus voluptatibus!</p>
            <a href="https://github.com/maykbrito">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;