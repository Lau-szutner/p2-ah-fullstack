import './App.css';
import Header from './components/Header';
import Spend from './components/spend';

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
      <Header className="w-full" />

      {/* Contenido principal */}
      <main className="flex-grow p-5">
        <h1 className="text-2xl font-bold">Bienvenido a mi App</h1>
        <p className="mt-4 text-gray-700">
          Aquí puedes agregar el contenido principal de tu aplicación.
        </p>
        <Spend title="Escuela" description="Davinci" amount="40000"></Spend>
      </main>
    </div>
  );
}

export default App;
