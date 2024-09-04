import styles from "./styles.module.scss";

import facebookIcon from "../../../public/Icon facebook square.png";
import twitterIcon from "../../../public/Icon twitter.png";
import instagramIcon from "../../../public/Icon instagram.png";

export default function Footer() {
  return (
    <footer className={styles["Footer"]}>
      <div className={styles["Rights-section"]}>
        <p>Fashion Hub</p>
        <p id="Copyright">@ 2023 Fashion Hub. Todos direitos reservados</p>
      </div>
      <div className={styles["Social-media"]}>
        <p>Siga a gente</p>
        <div>
          <a href="">
            <img src={facebookIcon.src} alt="Facebook" />
          </a>
          <a href="">
            <img src={twitterIcon.src} alt="Twitter" />
          </a>
          <a href="">
            <img src={instagramIcon.src} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
