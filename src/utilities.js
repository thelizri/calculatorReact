function add_digit(state, { type, payload }){
    if (state.overwrite) {
        return {
            ...state,
            currentOperand: payload.digit,
            overwrite: false,
        }
    }
    if (payload.digit === "0" && state.currentOperand === "0") {
        return state
    }
    if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
    }

    return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
    }
}

function choose_operation(state, { type, payload }){
    if (state.currentOperand == null && state.previousOperand == null) {
        return state
    }

    if (state.currentOperand == null) {
        return {
            ...state,
            operation: payload.operation,
        }
    }

    if (state.previousOperand == null) {
        return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
        }
    }

    return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
    }
}

function delete_digit(state, { type, payload }){
    if (state.overwrite) {
        return {
            ...state,
            overwrite: false,
            currentOperand: null,
        }
    }
    if (state.currentOperand == null) return state
    if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
    }

    return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
    }
}

function evaluate_result(state, {type, payload}){
    if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
    ) {
        return state
    }

    return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
    }
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "*":
            computation = prev * current
            break
        case "÷":
            computation = prev / current
            break
    }

    return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
})

function formatOperand(operand) {
    if (operand == null) return
    const [integer, decimal] = operand.split(".")
    if (decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

export {delete_digit, add_digit, choose_operation, evaluate_result};