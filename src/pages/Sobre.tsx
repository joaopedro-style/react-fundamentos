import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Meu App React";
  }, []);

  return (
    <section>
      <h2>Sobre nossa empresa</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
        eligendi ex a qui molestiae dolore. Accusamus inventore dolores quasi
        eaque quia! Recusandae excepturi reiciendis accusamus hic sunt impedit
        libero est.
      </p>
    </section>
  );
}
