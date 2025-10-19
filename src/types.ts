export interface ICalculatorState {
    displayNumber: string,
    operator: string | null,
    firstNumber: string | null,
    waitingForSecondNumber: boolean
}

export interface ICalculatorHistory {
    firstNumber: string;
    secondNumber: string;
    operator: string;
    result: number;
}