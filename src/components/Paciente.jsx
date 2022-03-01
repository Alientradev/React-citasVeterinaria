const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm(`Deseas eliminar al paciente ${nombre}?`);

    if(respuesta){
      eliminarPaciente(id);
    }
  }

      return (
        <div className='m-3 bg-white shadow-md px-5 py-6 rounded-xl'>
        <p className='font-bold mb-2'>
          Nombre: {' '}
          <span className='font-normal normal-case'>
            {nombre}
          </span>
        </p>
        <p className='font-bold mb-2'>
          Propietario: {' '}
          <span className='font-normal normal-case'>
          {propietario}
          </span>
        </p>
        <p className='font-bold mb-2'>
          E-mail: {' '}
          <span className='font-normal normal-case'>
          {email}
          </span>
        </p>
        <p className='font-bold mb-2'>
          Fecha de Alta: {' '}
          <span className='font-normal normal-case'>
          {fecha}
          </span>
        </p>
        <p className='font-bold mb-2'>
          Síntomas: {' '}
          <span className='font-normal normal-case'>
          {sintomas}
          </span>
        </p>
        <div className="flex justify-center"> 
          <button 
            type="button"
            className="w-full m-2 bg-blue-800 rounded-full text-white p-1 cursor-pointer shadow-sm text-bold hover:bg-blue-600 transition-all"
            onClick={ () => { setPaciente(paciente) }}>
            Editar
          </button>
          <button 
            type="button"
            className="w-full m-2 bg-red-700 rounded-full text-white p-1 cursor-pointer shadow-sm text-bold hover:bg-red-500 transition-all"
            onClick={ handleEliminar }>
            Eliminar  
          </button>
        </div>
      </div>
    )
}

export default Paciente