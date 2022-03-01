import { useState, useEffect } from "react"
import Errores from "./Errores";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    //UseEffetc
    
        useEffect( () => {
            if(Object.keys(paciente).length > 0) {
                setNombre(paciente.nombre);
                setPropietario(paciente.propietario);
                setEmail(paciente.email);
                setFecha(paciente.fecha);
                setSintomas(paciente.sintomas);
            }
        }, [paciente]); 

        // Funcion prevent default 
    
        const handleSubmit = (e) => {
        e.preventDefault();

        // Validamos el formulario

        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // Funcion generar el ID

        const generarId = () => {
            const random = Math.random().toString(36).substring(2);
            const fecha = Date.now().toString(36);

            return random + fecha;
        }

        // Se crea el objeto pacientes

        const objetoPacientes = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        // Funcion para editar el paciente

        if(paciente.id) {
            objetoPacientes.id = paciente.id;
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            // Nuevo registro
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes]);
        }

        // Se reinicia el formulario

        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
        
        }  

    return (
        <div className="mx-2 md:w-1/2 lg:w-2/5">
            
            <h2 className="text-center text-2xl font-black">
                Seguimiento de Pacientes
            </h2>

            <p className="text-center mt-3 mb-3">
                Añade pacientes y administralos
            </p>

            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-xl py-5 px-5 mb-3">

                {/* Mensaje de error en al validacion del form */}
                { error && <Errores mensaje='Todos los campos son obligatorios' /> }

                <div className="mb-2">
                    <label
                        htmlFor="mascota"
                        className="block text-center cursor-pointer font-bold">
                        Nombre de la mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Ingrese el nombre de la mascota"
                        className="w-full text-center border-2 border-blue-800  rounded-full shadow-sm p-1 m-1"
                        value={nombre}
                        onChange = { (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="propietario"
                        className="block text-center cursor-pointer font-bold">
                        Nombre del propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Ingrese el nombre del propietario"
                        className="w-full text-center border-2 border-blue-800  rounded-full shadow-sm p-1 m-1"
                        value={propietario}
                        onChange = { (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-center cursor-pointer font-bold">
                        E-mail del propietario
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Ingrese el e-mail  del propietario"
                        className="w-full text-center border-2 border-blue-800  rounded-full shadow-sm p-1 m-1"
                        value={email}
                        onChange = { (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="alta"
                        className="block text-center cursor-pointer font-bold">
                        Fecha de alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="w-full text-center border-2 border-blue-800  rounded-full shadow-sm p-1 m-1"
                        value={fecha}
                        onChange = { (e) => setFecha(e.target.value) }
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="sintomas"
                        className="block text-center cursor-pointer font-bold">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="w-full shadow-md rounded-lg p-2 border-2 border-blue-800 text-justify resize-none h-auto "
                        value={sintomas}
                        onChange = { (e) => setSintomas(e.target.value) } 
                    />
                </div>

                <input
                    type="submit"
                    className="w-full bg-blue-800 rounded-full text-white p-2 cursor-pointer shadow-sm text-bold hover:bg-blue-600 transition-all" 
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>

        </div>
    )
}

export default Formulario