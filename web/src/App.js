import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './responsive.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block"> 
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" className="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block"> 
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block"> 
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
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