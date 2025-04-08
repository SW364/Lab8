import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [textoPlano, setTextoPlano] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const clave = 'jorge';

  const cifrar = () => {
    const resultado = CryptoJS.AES.encrypt(textoPlano, clave).toString();
    setTextoCifrado(resultado);
    setTextoDescifrado('');
  };

  const descrifrar = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(textoCifrado, clave);
      const resultado = bytes.toString(CryptoJS.enc.Utf8);
      setTextoDescifrado(resultado);
    } catch (error) {
      setTextoDescifrado('Error al descifrar');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Cifrado AES con React y Bootstrap</h2>

        <div className="mb-3">
          <label className="form-label">Texto plano:</label>
          <input
            type="text"
            className="form-control"
            value={textoPlano}
            onChange={(e) => setTextoPlano(e.target.value)}
            placeholder="Escribe algo..."
          />
        </div>

        <div className="d-flex gap-2 mb-4">
          <button className="btn btn-primary w-100" onClick={cifrar}>
            Cifrar
          </button>
          <button className="btn btn-success w-100" onClick={descrifrar}>
            Descifrar
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Texto cifrado:</label>
          <div className="form-control bg-light" readOnly>{textoCifrado}</div>
        </div>

        <div>
          <label className="form-label fw-bold">Texto descifrado:</label>
          <div className="form-control bg-light" readOnly>{textoDescifrado}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
