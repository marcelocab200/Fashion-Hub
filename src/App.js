import logo from './logo.svg';
import facebookIcon from './images/Icon facebook square.png';
import twitterIcon from './images/Icon twitter.png';
import instagramIcon from './images/Icon instagram.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a href="">Fashion Hub</a>
        <nav>
          <ul>
            <a href="">Início</a>
            <a href="">Loja</a>
            <a href="">Contatos</a>
          </ul>
        </nav>
      </header>
      <main>
        <div className="Filter-options">
        </div>
      </main>
      <footer>
          <div className="Rights-section">
            <p>Fashion Hub</p>
            <p id="Copyright">@ 2023 Fashion Hub. Todos direitos reservados</p>
          </div>
          <div className="Social-media">
            <p>Siga a gente</p>
            <div>
              <a href=""><img src={facebookIcon} alt="Facebook"/></a>
              <a href=""><img src={twitterIcon} alt="Twitter"/></a>
              <a href=""><img src={instagramIcon} alt="Instagram"/></a>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
