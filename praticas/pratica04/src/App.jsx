import './App.css';

function Header() {
  return (
   <header>
     <h1>Minha Aplicação React</h1>
   </header>
  );
}

function App() {
  return (
   <div className="card">
     <Header/>
     <p>Este é um parágrafo em JSX!</p>
   </div>
  );
}



export default App;
import Header from './components/Header';

