import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

function ScriptPremium() {
  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-75 p-5">
      <div className="container display-1">
        <h1 className="display-6 fw-bold text-white mb-4 mt-5">
          Script Premium Gratuito
        </h1>

        <p
          className="text-white mb-4 mx-auto"
          style={{ maxWidth: "700px", fontSize: "0.22em" }}
        >
          Nosso script exclusivo para automação de trades no TradingView.
          Alertas inteligentes e execução precisa para maximizar seus
          resultados.
        </p>

        <button className="btn btn-script btn-light btn-md px-4 py-3 fw-semibold rounded-pill shadow">
          <i className="bi bi-download me-2"></i>
          Download Gratuito
        </button>
      </div>
    </div>
  );
}

export default ScriptPremium;
