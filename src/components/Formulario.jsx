//rfce function x() {} declaration
//rafce arrow function, expression

import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const [error, setErorr] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("aun falta un punto");

      setErorr(true);
      return;
    }

    setErorr(false);

    //arreglo de objetos
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reinicio de form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient monitoring</h2>
      <div>
      {Object.keys(paciente).length === 0 ? (<p className="text-lg mt-5 text-center mb-10">Add Patients and <span className="text-indigo-600 font-bold "> Manage them </span></p> ) : (<p className="  uppercase text-2xl text-white font-bold my-5 bg-blue-600 text-center">editing an existing patient</p>)}
      </div>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>All fields are mandatory</p>
          </Error>
        )}

        <div className="mb-5 ">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's NAME
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Name of the patient"
            className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Your name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Enter your full Name"
            className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            type="email"
            placeholder="Add an email so you can be contacted"
            className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discharge"
            className="block text-gray-700 uppercase font-bold"
          >
            DISCHARGE FROM THE TREATMENT
          </label>
          <input
            id="discharge"
            type="date"
            className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 p-3 text-white w-full uppercase font-bold hover:bg-indigo-800 hover:cursor-pointer"
          value={paciente.id ? "Save changes" : "Add Patient"}
        ></input>
      </form>
    </div>
  );
};

export default Formulario;
