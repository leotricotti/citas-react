import PropTypes from "prop-types";

function Error({ children }) {
  return (
    <div className="bg-red-800 text-white font-bold text-center p-3 uppercase mb-5 rounded-md">
      {children}
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.array,
};

export default Error;
