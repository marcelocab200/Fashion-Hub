import './App.css';

import facebookIcon from './images/Icon facebook square.png';
import twitterIcon from './images/Icon twitter.png';
import instagramIcon from './images/Icon instagram.png';

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
          <p>Filtrar</p>
          <div className="Categories">
            <p>Categorias</p>
            <input type="checkbox" id="category1" name="category1" value="Masculino"/>
            <label>Masculino</label><br/>
            <input type="checkbox" id="category2" name="category2" value="Feminino"/>
            <label>Feminino</label><br/>
            <input type="checkbox" id="category3" name="category3" value="Infantil"/>
            <label>Infantil</label><br/>
          </div>

          <div className="Sizes">
            <p>Tamanhos</p>
            <input type="checkbox" id="size1" name="size1" value="PP"/>
            <label>PP</label><br/>
            <input type="checkbox" id="size2" name="size2" value="P"/>
            <label>P</label><br/>
            <input type="checkbox" id="size3" name="size3" value="M"/>
            <label>M</label><br/>
            <input type="checkbox" id="size4" name="size4" value="G"/>
            <label>G</label><br/>
            <input type="checkbox" id="size5" name="size5" value="GG"/>
            <label>GG</label><br/>
          </div>

          <div className="Colors">
            <p>Cores</p>
            <input type="checkbox" id="color1" name="color1" value="Vermelho"/>
            <label>Vermelho</label><br/>
            <input type="checkbox" id="color2" name="color2" value="Azul"/>
            <label>Azul</label><br/>
            <input type="checkbox" id="color3" name="color3" value="Verde"/>
            <label>Verde</label><br/>
          </div>

          <div className='Price-range'>
            <p>Faixa de preço</p>
            <div>
              <p>R$0</p>
              <p>R$1000</p>
            </div>
            <input type="range" min="0" max="1000" value="500"/>
          </div>
          <button type="button">Aplicar</button>
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
