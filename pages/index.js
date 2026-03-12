import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UriAço - Serralheria Especializada</title>
        <meta
          name="description"
          content="UriAço: Soluções em metal, portões, estruturas metálicas e serviços de serralheria."
        />
      </Head>

      <header className="header">
        <div className="logo">UriAço</div>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Qualidade e Segurança em Aço e Ferro</h1>
          <p>
            Tradição e excelência em projetos sob medida e serviços de
            serralheria para residências e empresas em São José do Rio Preto e
            região.
          </p>
          {/* Substitua o número abaixo pelo WhatsApp real da empresa */}
          <a
            href="https://wa.me/5517900000000"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </a>
        </section>

        <section id="servicos" className="services">
          <h2>Nossos Serviços</h2>
          <div className="grid">
            <div className="card">
              <h3>Portões e Grades</h3>
              <p>
                Fabricação e instalação de portões basculantes, deslizantes e
                grades de proteção com acabamento impecável e alta durabilidade.
              </p>
            </div>
            <div className="card">
              <h3>Estruturas Metálicas</h3>
              <p>
                Projetos robustos para coberturas, mezaninos e galpões. Soluções
                sob medida para a sua necessidade estrutural.
              </p>
            </div>
            <div className="card">
              <h3>Manutenção e Reparos</h3>
              <p>
                Serviços rápidos de solda, troca de roldanas, conserto de
                fechaduras e ajustes estruturais em geral.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="footer">
        <div className="footer-content">
          <p>
            <strong>UriAço Serralheria</strong>
          </p>
          <p>Atendendo São José do Rio Preto - SP</p>
          <p>WhatsApp: (17) 90000-0000</p>
        </div>
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} UriAço. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>

      {/* Estilos embutidos usando styled-jsx nativo do Next.js */}
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: #f8f9fa;
          color: #333;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .header {
          background-color: #1a1a1a;
          color: #fff;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #f39c12;
        }

        nav a {
          color: #fff;
          text-decoration: none;
          margin-left: 1.5rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: #f39c12;
        }

        .hero {
          background:
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")
              center/cover;
          color: white;
          text-align: center;
          padding: 6rem 2rem;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-button {
          background-color: #f39c12;
          color: #1a1a1a;
          padding: 1rem 2.5rem;
          border-radius: 5px;
          font-size: 1.1rem;
          font-weight: bold;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #d68910;
        }

        .services {
          padding: 5rem 2rem;
          text-align: center;
          background-color: #fff;
        }

        .services h2 {
          font-size: 2.2rem;
          margin-bottom: 3rem;
          color: #1a1a1a;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          padding: 2rem;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          background-color: #f8f9fa;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }

        .card h3 {
          color: #f39c12;
          margin-bottom: 1rem;
        }

        .card p {
          color: #666;
          line-height: 1.5;
        }

        .footer {
          background-color: #1a1a1a;
          color: #ccc;
          padding: 3rem 2rem 1rem;
          margin-top: auto;
        }

        .footer-content {
          text-align: center;
          margin-bottom: 2rem;
        }

        .footer-content p {
          margin: 0.5rem 0;
        }

        .copy {
          text-align: center;
          border-top: 1px solid #333;
          padding-top: 1rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .header {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
