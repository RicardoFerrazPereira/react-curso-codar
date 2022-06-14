import './App.css';

function App() {
  const name = 'Ricardo'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h2>Curso React</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
    </div>
  );
}

export default App;
