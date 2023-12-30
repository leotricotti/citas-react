import Pacientes from "./Pacientes";
import PropTypes from "prop-types";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="pb-12 md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold text-xl">
              Pacientes y Citas
            </span>
          </p>
          <div className="md:overflow-scroll h-screen">
            <Pacientes
              pacientes={pacientes}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold text-xl">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func,
};

export default ListadoPacientes;
