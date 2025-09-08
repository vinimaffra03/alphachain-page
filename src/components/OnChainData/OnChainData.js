import React, { useState, useEffect } from "react";

function OnChainData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://vinimafrfra.pythonanywhere.com/api/global")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <div>
        {/*  Teste */}
        <div>
          <div className="d-flex justify-content-center my-0">
            <p
              className="text-black bg-white text-muted mx-4"
              style={{
                borderRadius: 10,
                fontWeight: 400,
                padding: 10,
              }}
            >
              Moedas Ativas: <strong>{data.active_cryptocurrencies} </strong>
            </p>

            <p
              className="text-black bg-white text-muted mx-4"
              style={{
                borderRadius: 10,
                fontWeight: 400,
                padding: 10,
              }}
            >
              Mercados: <strong>{data.markets}</strong>
            </p>

            <p
              className="text-black bg-white text-muted mx-4"
              style={{
                borderRadius: 10,
                fontWeight: 400,
                padding: 10,
              }}
            >
              Dominio:{" "}
              <strong>BTC {data.market_cap_percentage.btc.toFixed(2)}%</strong>
            </p>

            <p
              className="text-black bg-white text-muted mx-4"
              style={{
                borderRadius: 10,
                fontWeight: 400,
                padding: 10,
              }}
            >
              <strong>ETH {data.market_cap_percentage.eth.toFixed(2)}%</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnChainData;
