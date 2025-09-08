import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

function RecursosPremium() {
  return (
    <section class="features-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title">Recursos Premium</h2>
            <p class="section-subtitle">
              Ferramentas profissionais para traders que buscam excelência
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 col-md-6">
            <div class="feature-card">
              <div className="feature-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <h3 class="feature-title">Análises Técnicas</h3>
              <p class="feature-description">
                Análises detalhadas e precisas dos principais ativos, com pontos
                de entrada estratégicos.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-bullseye"></i>
              </div>
              <h3 class="feature-title">Sinais Premium</h3>
              <p class="feature-description">
                Sinais de alta precisão testados e validados pelos melhores
                analistas do mercado.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-mortarboard"></i>
              </div>
              <h3 class="feature-title">Educação Contínua</h3>
              <p class="feature-description">
                Aulas semanais ao vivo com traders experientes, focadas em
                estratégias avançadas.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <h3 class="feature-title">Gestão de Risco</h3>
              <p class="feature-description">
                Metodologias comprovadas para proteger seu capital e otimizar
                retornos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecursosPremium;
