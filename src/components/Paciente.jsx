const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('The patient "' +  paciente.nombre + '" will be deleted, would you like to continue?')

        if (respuesta) {eliminarPaciente(id)}
    }

    return (
            <div className="mx-5 my-10 bg-white shadow-md m-3 px-5 py-10 rounded-xl">

                <p className="font-bold mb-3 uppercase text-gray-700"> Pet's name: {""}
                <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 uppercase text-gray-700"> Your name: {""}
                <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 uppercase text-gray-700"> Email: {""}
                <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 uppercase text-gray-700"> date of discharge: {""}
                <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 uppercase text-gray-700"> symptoms: {""}
                <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-between mt-10">
                    <button
                        type="button"
                        className="py-2 px-8 bg-indigo-600 hover:bg-indigo-800 rounded-md cursor-pointer font-bold uppercase text-white"
                        onClick={()=> setPaciente(paciente)}
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        className="py-2 px-8 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer font-bold uppercase text-white"
                        onClick={ handleEliminar}
                    >
                        Remove
                    </button>
                </div>

            </div>
    )
}
export default Paciente