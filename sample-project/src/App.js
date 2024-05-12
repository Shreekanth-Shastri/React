import Styles from "./App.module.css";
import PropTypes from "prop-types";

function App() {
  return (
    <Job employeeName="Shreekanth" employerName="employerName" salary={123} />
  );
}

const Job = (props) => {
  return (
    <>
      <div className={Styles.App}>{props.employeeName}</div>
      <div>{props.employerName}</div>
      <div>{props.salary}</div>
    </>
  );
};

Job.propTypes = {
  employeeName: PropTypes.string.isRequired,
  employerName: PropTypes.string.isRequired,
  salary: PropTypes.number,
};

export default App;
