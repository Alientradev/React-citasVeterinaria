import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='mx-2 md:w-1/2 lg:w-3/5'>

    {
      pacientes && pacientes.length ? (
        <>
        <h2 className="text-center text-2xl font-black">Lista de pacientes</h2>

        <p className="text-center mt-3 mb-3">
          Administra tus pacientes
        </p>

      { pacientes.map( paciente => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
      ))} 
      </> 
      ) : (
        <>
        <h2 className="text-center text-2xl font-black">No hay pacientes en la lista</h2>
        <p className="text-center mt-3 mb-3">
          Comienza agregando pacientes  
        </p>
        </>
      )
    } 

    </div>
  )
}

export default ListadoPacientes