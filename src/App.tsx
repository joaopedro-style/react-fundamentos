export default function App() {
  // Comentário de uma linha
  /* Comentário de múltiplas linhas */
  return (
    <>
      <header>
        <h1>Olá React! 😎</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
        </nav>
      </header>
      {/* Comentarios no meio do JSX: é normal ficar entre {} */}
      {/* Ao usar outros elementos HTML no JSX, é importante envolver tudo em um único <> </> (Fragmento React) */}

      <main>
        <section>
          <h2>Seja bem-vindo(a) aos Fundamentos de React!</h2>
          <p>Este é um exemplo de aplicação React.</p>

          <article>
            <h3>Artigo 1 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis labore autem sapiente veritatis numquam repudiandae!
              Quia sint illo quo animi ipsam. Ex dolore, facere culpa unde nihil
              hic modi quis.
            </p>
          </article>

          <article>
            <h3>Artigo 2 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis labore autem sapiente veritatis numquam repudiandae!
              Quia sint illo quo animi ipsam. Ex dolore, facere culpa unde nihil
              hic modi quis.
            </p>
          </article>

          <article>
            <h3>Artigo 3 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis labore autem sapiente veritatis numquam repudiandae!
              Quia sint illo quo animi ipsam. Ex dolore, facere culpa unde nihil
              hic modi quis.
            </p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Pequeno site criado com React</h2>
        <p>
          Desenvolvido por <b>João Pedro</b> &copy; 2025
        </p>
      </footer>
    </>
  );
}
