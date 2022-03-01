import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  useEffect( () => {
    const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLocalStorage);
  }, []);

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
      <div className="container mx-auto p-1">
        <Header />
        <div className='mt-8 md:flex'>
        <Formulario 
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        </div>

      </div>
  )
}

export default App
