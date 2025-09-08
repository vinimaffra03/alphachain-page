import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

function Section() {
  return (
    <section class="hero-section py-0">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div id="usuarios-ativos" class="col-auto">
            <small class="text-muted">5.000+ traders ativos</small>
          </div>
        </div>

        <div class="row justify-content-center text-center mb-4">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">
              Domine o Mercado Cripto com Elegância
            </h1>
            <p id="p-comunidade" class="lead text-muted mb-5">
              A comunidade mais refinada de trading de criptomoedas. Estratégias
              inteligentes para resultados consistentes.
            </p>
          </div>
        </div>

        <div class="row justify-content-center mb-5">
          <div class="col-auto">
            <div class="d-flex gap-3 flex-wrap justify-content-center">
              <button class="btn btn-primary-custom btn-lg">
                <a
                  href="https://chat.whatsapp.com/GFcCTY10uV7L5sGFbBaWc6"
                  style={{
                    textDecoration: "none",
                    color: "#ffffffff",
                    fontWeight: "500",
                  }}
                >
                  Entrar na Comunidade
                </a>
              </button>
              <button class="btn btn-outline-custom btn-lg">
                Conhecer Primeiro
              </button>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row text-center">
              <div class="col-md-4 mb-4">
                <div class="stats-number">5.2K</div>
                <div class="text-muted">Membros</div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="stats-number">89%</div>
                <div class="text-muted">Taxa de Sucesso</div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="stats-number">24h</div>
                <div class="text-muted">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
