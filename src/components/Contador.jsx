import { useState } from "react";

const Contador = () => {
const [numero, setNumero] = useState(1)
  // let numero = 10;
  // numero = numero + 1

  return (
    <article className="text-center">
      <h2>Contador</h2>
      <p>{numero}</p>
      <button
        className="btn btn-primary"
        onClick={() => setNumero(numero + 1)} >
        +1
      </button>
      {/* todo: agreguen un boton para decrementar en -1 el valor del state */}
    </article>
  );
};

export default Contador;
