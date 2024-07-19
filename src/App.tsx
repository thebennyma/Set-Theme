import { useState } from "react"; // use state lo utilizamos para manejar estados en coponentes funcinales
import "./index.scss"; // Estilos

export default function App() {
  const [theme, setTheme] = useState("light"); // Se declara una variable del tema se utiliza la funcion setthema para actializar el estado, tambien se agrego una variable por defecto

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light"); //Funcion que cabia el vaor del tema utilizando un operador ternario
  };

  return (
    <div className={`container ${theme}`}>
      <div>
        <div>Cambiando de tema</div>
        <p>React TS y Scss</p>
      </div>
      <button onClick={switchTheme}>Cambiar tema</button>
    </div>
  );
}
