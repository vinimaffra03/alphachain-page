import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

function Rodape() {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center text-center p-5 pb-1">
      <div className="container display-1">
        <div className="d-block">
          <p
            className="fs-6 mb-2 mx-auto fw-semibold"
            style={{ maxWidth: "700px", color: "#585858ff" }}
          >
            <strong>ALPHA</strong>CHAIN
          </p>

          <p
            className="mb-5 mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "0.19em",
              color: "#949393ff",
            }}
          >
            Trading inteligente para resultados extraordinários
          </p>
        </div>
        <p
          className="mb-2 mx-auto py-0"
          style={{
            maxWidth: "700px",
            fontSize: "0.19em",
            color: "#525252ff",
          }}
        >
          © 2025 AlphaChain. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Rodape;
