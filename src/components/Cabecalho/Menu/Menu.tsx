import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <a href="/Home">Home</a>
      <a href="/Sobre">Sobre</a>
      <a href="/Contato">Contato</a>
    </nav>
  );
}
