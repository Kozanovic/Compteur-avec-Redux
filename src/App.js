import { useDispatch, useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const count = useSelector(state=>state.compteur);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type: 'incrementer'})}>Incrementer</button>
      <button onClick={() => dispatch({type: 'decrementer'})}>Decrementer</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  );
}
