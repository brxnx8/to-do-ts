import { FormEvent, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ButtonColored } from "../../styles/componentsColor/ButtonColored.styles";
import { InputColored } from "../../styles/componentsColor/input.styles";
import { DarkTheme } from "../../styles/themes/themes";
import style from "./input.module.css";

interface PropsInputText {
    addNewTask: (newTask: string) => void;
    theme: {
        primary: string;
        secundary: string;
        button: string;
        task: string;
        font: string;
    };
}

export function InputText(props: PropsInputText) {
    const [newTaskText, setNewtaskText] = useState("");

    function addTaskText(event: FormEvent) {
        event.preventDefault();
        props.addNewTask(newTaskText);
        setNewtaskText("");
    }

    return (
        <ThemeProvider theme={props.theme}>
            <form
                action=""
                className={style.formAddTask}
                onSubmit={addTaskText}
            >
                <InputColored
                    type="text"
                    onChange={(event) => setNewtaskText(event.target.value)}
                    value={newTaskText}
                    placeholder="Adicione uma nova tarefa"
                />
                <ButtonColored
                    disabled={newTaskText.length === 0 || !newTaskText.trim()}
                    id={style.button}
                >
                    Criar
                </ButtonColored>
            </form>
        </ThemeProvider>
    );
}
