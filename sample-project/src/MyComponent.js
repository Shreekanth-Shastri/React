import Styles from "./App.module.css";
import PropTypes from "prop-types";

function MyComponent() {
  return (
    <div>
      <h1 className={Styles.App}>Hello World from component</h1>
      <MyNewComponent prop1="prop1" prop2="prop2" prop3={87236} />
    </div>
  );
}

const MyNewComponent = (props) => {
  return (
    <>
      <span>{props.prop1}&nbsp;</span>
      <span>{props.prop2}&nbsp;</span>
      <span>{props.prop3}&nbsp;</span>
    </>
  );
};

MyNewComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string.isRequired,
  prop3: PropTypes.number,
};

export default MyComponent;
