import { ACTIONS } from "./App"

export default function ClearButton({ dispatch}) {
    return (
        <button className={"span_two"}
            onClick={() =>
                dispatch({ type: ACTIONS.CLEAR})
            }
        >
            AC
        </button>
    )
}