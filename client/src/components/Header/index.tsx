import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles["Header"]}>
      <a href="" className={styles["Header-logo"]}>
        Fashion Hub
      </a>
      <nav>
        <ul>
          <a href="">Início</a>
          <a href="">Loja</a>
          <a href="">Contatos</a>
        </ul>
      </nav>
    </header>
  );
}
