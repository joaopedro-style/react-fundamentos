import estilos from "./ListaCursos.module.css";
import cursos from "../../data/cursos";
import Artigo from "../Conteudo/Artigo/Artigo";

export default function ListaCursos() {
  return (
    <div className={estilos.artigos}>
      {cursos.map((curso) => (
        <Artigo dados={curso} key={curso.id} />
      ))}
    </div>
  );
}
