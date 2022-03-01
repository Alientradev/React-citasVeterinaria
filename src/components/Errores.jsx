

const Errores = ({mensaje}) => {
    return (
        <div className="bg-red-500 rounded-full shadow-md mb-1 p-2">
            <p className="text-center text-white font-bold ">{mensaje}</p>
        </div> 
    ) 
}

export default Errores