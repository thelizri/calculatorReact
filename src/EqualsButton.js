import { ACTIONS } from "./App"

export default function EqualsButton({ dispatch}) {
    return (
        <button
            className={"span_two"}
            onClick={() =>
                dispatch({ type: ACTIONS.EVALUATE})
            }
        >
            =
        </button>
    )
}