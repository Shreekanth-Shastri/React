import "./App.css";
import PropTypes from "prop-types";

function App() {
  return (
    <Job employeeName="Shreekanth" employerName="Self Employed" salary={123} />
  );
}

Job.propTypes = {
  employeeName: PropTypes.string.isRequired,
  employerName: PropTypes.string.isRequired,
  salary: PropTypes.number
};

const Job = (props) => {
  return (
    <>
      <div>{props.employeeName}</div>
      <div>{props.employerName}</div>
      <div>{props.salary}</div>
    </>
  );
};

export default App;
