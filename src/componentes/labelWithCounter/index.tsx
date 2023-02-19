import { ThemeProvider } from "styled-components";
import { DivSColored } from "../../styles/componentsColor/divSecundary.styles";
import style from "./labelCounter.module.css";

interface PropsLabel {
    text: string;
    CounterTasks: number;
    theme: {
        primary: string;
        secundary: string;
        button: string;
        task: string;
        font: string;
    };
}

export function Label(props: PropsLabel) {
    return (
        <ThemeProvider theme={props.theme}>
            <div className={style.containerLabel}>
                <p>{props.text}</p>
                <DivSColored>{props.CounterTasks}</DivSColored>
            </div>
        </ThemeProvider>
    );
}
