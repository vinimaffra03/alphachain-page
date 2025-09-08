import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

function Aside() {
  return (
    <div className="bg-light d-flex justify-content-center align-items-center text-center p-5">
      <div className="container display-1">
        <p
          className="text-black my-5 mx-auto"
          style={{ maxWidth: "700px", fontSize: "0.30em" }}
        >
          <i>
            "A melhor comunidade de trading que já participei. Ambiente
            profissional, análises de qualidade e resultados consistentes."
          </i>
        </p>

        <div className="d-block">
          <p
            className="fs-6 mb-1 mx-auto fw-semibold"
            style={{ maxWidth: "700px", color: "#585858ff" }}
          >
            Rafael Silva
          </p>

          <p
            className="mb-4 mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "0.19em",
              color: "#949393ff",
            }}
          >
            Trader profissional
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
