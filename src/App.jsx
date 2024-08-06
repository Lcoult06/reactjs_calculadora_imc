import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState('');
  const [resultado, setResultado] = useState('');

  const calculaImc = () => {
    const alturaEmMetros = parseFloat(altura) / 100;
    const imcCalculado = parseFloat(peso) / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado.toFixed(2));

    if (imc < 18.5) {
      setResultado('Você está magro');
    } else if (imc < 24.9) {
      setResultado('Você está normal');
    } else if (imc < 29.9) {
      setResultado('Você está com sobrepeso');
    } else if (imc < 39.9) {
      setResultado('Você está com obesidade');
    } else if (imc > 39.9) {
      setResultado('Você está com obesidade mórbida');
    }
  }

  return (
    <>
    <div className="container">
    <header>
      <h1>Calculadora IMC</h1>
    </header>
    <form>
      <div>
        <input required  type="number" placeholder='Digite sua altura' onChange={evento => setAltura(evento.target.value)}/>
        <label>Altura cm</label>
        <input required type="number" placeholder='Digite seu peso' onChange={evento => setPeso(evento.target.value)}/>
        <label>Peso Kg</label>
      </div>
      <button type='button' onClick={calculaImc}>Calcular</button><br/>
      <p>Seu IMC: {imc}  </p>
      <p>Classificação: {resultado}</p>
    </form>
    </div>
    </>
  )
}

export default App
