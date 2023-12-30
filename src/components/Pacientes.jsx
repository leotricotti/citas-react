import PropTypes from "prop-types";

function Pacientes({ pacientes, setPaciente, eliminarPaciente }) {
  function handleEliminar(id) {
    const resultado = confirm("¿Estás seguro que deseas eliminar el paciente?");
    if (resultado) {
      eliminarPaciente(id);
    }
  }

  return pacientes.map((paciente) => (
    <div
      className="mx-5 mb-10 bg-white shadow-md rounded-lg px-5 py-10"
      key={paciente.id}
    >
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-md transition-all"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-md transition-all"
          onClick={() => handleEliminar(paciente.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  ));
}

Pacientes.propTypes = {
  pacientes: PropTypes.array,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func,
};

export default Pacientes;
