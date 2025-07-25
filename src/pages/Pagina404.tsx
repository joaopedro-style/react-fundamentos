import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagina404() {
  useEffect(() => {
    document.title = "Pagina404 | Meu App React";
  }, []);

  return (
    <section className="bg-red-300 p-3 text-center">
      <h2>Está página não existe...</h2>
      <p>
        <Link to="/">Volte para a página principal</Link>
      </p>
    </section>
  );
}
