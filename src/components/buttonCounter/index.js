import styles from './button.module.css';
import {useEffect} from "react";

const ButtonCounter = (props) => {
  const {size, color, counter, setCounter} = props;

  useEffect( () => {
    console.log("Hola nuclio");
  },[counter]);

  const buttonStyle = {
    backgroundColor: color,
  }
  switch (size){
    case 'big':
      buttonStyle.padding = '12px 16px';
      buttonStyle.fontSize = '16px';
    break;
    case 'small':
      buttonStyle.padding = '6px 8px';
      buttonStyle.fontSize = '12px';
      break;
    case 'medium':
      buttonStyle.padding = '8px 10px';
      buttonStyle.fontSize = '14px';
      break;
  }

  const handleOnClick = (e) => {
    setCounter(counter+1);
  }
  return (
    <button onClick={handleOnClick} className={styles.root} style={buttonStyle}>
      Clicked {counter} times
    </button>
  );
};

ButtonCounter.defaultProps = {
  size: 'medium',
  color: 'red',
}


export default ButtonCounter;
