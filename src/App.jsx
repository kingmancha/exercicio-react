import { useState } from 'react';
import './App.css';


function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    
    if (altura && peso) {
      const alturaEmMetros = altura
      const imc = peso / (alturaEmMetros * alturaEmMetros);
      let classificacao = '';

      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc >= 18.5 && imc <= 24.9) classificacao = 'Peso normal';
      else if (imc >= 25 && imc <= 29.9) classificacao = 'Sobrepeso';
      else if (imc >= 30 && imc <= 34.9) classificacao = 'Obesidade grau 1';
      else if (imc >= 35 && imc <= 39.9) classificacao = 'Obesidade grau 2';
      else classificacao = 'Obesidade grau 3';

      setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
    } else {
      setResultado('Por favor, preencha os campos.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (m): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1,70"
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {resultado && <h2>{resultado}</h2>}
    </div>
  );
}

export default App;
