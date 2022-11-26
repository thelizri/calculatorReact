import "./styles.css";
import {useReducer} from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import DeleteButton from "./DeleteButton";
import ClearButton from "./ClearButton";
import EqualsButton from "./EqualsButton";

export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose_operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){

}

function App() {

  const [{currentOperand, previousOperand, operator},dispatch] = useReducer(reducer, {});

  return ( <div className={"calculatorGrid"}>
    <div className={"output"}>
      <div className={"previous_operand"}>{previousOperand}</div>
      <div className={"current_operand"}>{currentOperand}</div>
    </div>
    <ClearButton dispatch={dispatch}/>
    <DeleteButton dispatch={dispatch}/>
    <OperationButton dispatch={dispatch} operation={"÷"}/>
    <DigitButton dispatch={dispatch} digit={"1"}/>
    <DigitButton dispatch={dispatch} digit={"2"}/>
    <DigitButton dispatch={dispatch} digit={"3"}/>
    <OperationButton dispatch={dispatch} operation={"*"}/>
    <DigitButton dispatch={dispatch} digit={"4"}/>
    <DigitButton dispatch={dispatch} digit={"5"}/>
    <DigitButton dispatch={dispatch} digit={"6"}/>
    <OperationButton dispatch={dispatch} operation={"+"}/>
    <DigitButton dispatch={dispatch} digit={"7"}/>
    <DigitButton dispatch={dispatch} digit={"8"}/>
    <DigitButton dispatch={dispatch} digit={"9"}/>
    <OperationButton dispatch={dispatch} operation={"-"}/>
    <DigitButton dispatch={dispatch} digit={"."}/>
    <DigitButton dispatch={dispatch} digit={"0"}/>
    <EqualsButton dispatch={dispatch}/>
  </div>);
}

export default App;
