import React from "react";

import styles from "./index.module.scss";
import Button from "src/components/Button";
import Search from "src/components/Search";
import Wrapper from "src/components/Wrapper";

import ShortFooter from "src/components/ShortFooter";

import OpenWrapper from "src/images/OpenWrapper.png";

export default function Home() {
  return (
    <div className={styles["Home"]}>
      <main>
        <div className={styles["Nav-bar"]}>
          <p>
            NOVOS
            <br />
            LOOKS
          </p>
          <nav>
            <ul>
              <Button id={styles["Black-button"]}>Comprar</Button>
              <Button>Explorar</Button>
            </ul>
          </nav>
        </div>
        <div className={styles["Home-section"]}>
          <div>
            <p>Descubra as últimas tendências e estilos da moda</p>
            <div>
              <Search placeholder="Procure por marca ou estilo" />
              <Button>Procurar</Button>
            </div>
          </div>
        </div>
        <div className={styles["Main-content"]}>
          <Wrapper
            title="Encontre o look perfeito"
            className={styles["Steps-wrapper"]}
          >
            <div className={styles["Content"]}>
              <div className={styles["Item"]}>
                {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
                <p className={styles["Title-text"]}>
                  Passo 1: Busque um modelo
                </p>
                <p className={styles["Description-text"]}>
                  Entre com suas preferências de moda. Ache a roupa perfeita
                  para qualquer ocasião.
                </p>
              </div>
              <div className={styles["Item"]}>
                {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
                <p className={styles["Title-text"]}>
                  Passo 2: Selecione sua peça
                </p>
                <p className={styles["Description-text"]}>
                  Escolha dentre uma variedade de opções de peças. Eleve seu
                  jogo de moda com a Fashion Hub.
                </p>
              </div>
              <div className={styles["Item"]}>
                {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
                <p className={styles["Title-text"]}>
                  Passo 3: Prossiga à compra
                </p>
                <p className={styles["Description-text"]}>
                  Complete a compra. Sente e espere enquanto suas peças
                  estilosas chegam.
                </p>
              </div>
            </div>
          </Wrapper>
          <Wrapper
            title="Entre na comunidade da Fashion Hub"
            className={styles["Community-wrapper"]}
          >
            <div className={styles["Content"]}>
              <div className={styles["Item"]}>
                {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
                <div>
                  <p className={styles["Title-text"]}>Como um modelo</p>
                  <p className={styles["Description-text"]}>
                    Exiba as últimas tendências da moda nas passarelas. Tudo o
                    que você precisa é confiança e estilo.
                  </p>
                  <Button id={styles["Black-button"]}>Desfile conosco</Button>
                </div>
              </div>
              <div className={styles["Item"]}>
                {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
                <div>
                  <p className={styles["Title-text"]}>Como um designer</p>
                  <p className={styles["Description-text"]}>
                    Colabore com a Fashion Hub para exibir seus designs para uma
                    audiência mais ampla.
                  </p>
                  <Button id={styles["Black-button"]}>Colabore conosco</Button>
                </div>
              </div>
              <div className={styles["Item"]}>
                {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
                <div>
                  <p className={styles["Title-text"]}>Como um estilista</p>
                  <p className={styles["Description-text"]}>
                    Junte-se a uma equipe que está moldando a indústria da moda
                    com soluções de estilo inovadoras.
                  </p>
                  <Button id={styles["Black-button"]}>
                    Entre no nosso time
                  </Button>
                </div>
              </div>
            </div>
          </Wrapper>
          <Wrapper
            title="Baixe nosso aplicativo"
            className={styles["Download-wrapper"]}
          >
            <div className={styles["Content"]}>
              <div>
                <p className={styles["Title-text"]}>Compre sem esforço!</p>
                <p className={styles["Description-text"]}>
                  Explore uma ampla variedade de opções de roupas estilosas na
                  Fashion Hub. Aproveite a entrega rápida e a diversa seleção de
                  peças de moda.
                </p>
                <Button>Download</Button>
              </div>
              {/* <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" /> */}
            </div>
          </Wrapper>
        </div>
      </main>
      <ShortFooter />
    </div>
  );
}
