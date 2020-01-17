import React from 'react';

import './style.css';

export default function DevItem({ dev }) {
  return (
    <li className="dev-item" >
      <header>
        <img src={dev.avatar_url} alt={`Imagem de ${dev.name}`} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(',')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
    </li>
  );
}
