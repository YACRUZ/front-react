import imgRickMorty from "./img/rick-morty.png";
import imgCredencial from "./img/Cre.jpeg";
import Characters from "./components/Characters";
import { useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imgRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
        <footer>
          <p>Creado por: 
            Yahir Jesus Jacome Cogco
            
          </p>
          <div>
            <a href="https://www.facebook.com/yahir.jesus.779"><img src="https://www.facebook.com/images/fb_icon_325x325.png" height="50px" width="50px" alt="Facebook"/></a>
            <a href="https://www.youtube.com/channel/UC0nPwl62QIktOw3ZkktDHrw"><img src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-0.png" height="50px" width="50px" alt="YouTube"/></a>
            <a href="https://github.com/YACRUZ"><img src="https://www.transparentpng.com/thumb/logos/github-logo-png-rtT9Sy.png" height="50px" width="50px" alt="GitHub"/></a>
          </div>
          <div>
            <p>S20006732</p>
            <img src={imgCredencial} height="230px" width="150px" alt="Credencial"/>
          </div>
        </footer>
      </header>
    </div>
    
  );
}

export default App;
