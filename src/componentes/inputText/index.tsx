import { FormEvent, useState } from "react";
import style from "./input.module.css";

interface PropsInputText {
    addNewTask: (newTask: string) => void;
}

export function InputText(props: PropsInputText) {
    const [newTaskText, setNewtaskText] = useState("");

    function addTaskText(event: FormEvent) {
        event.preventDefault();
        props.addNewTask(newTaskText);
        setNewtaskText("");
    }

    return (
        <form action="" className={style.formAddTask} onSubmit={addTaskText}>
            <input
                type="text"
                onChange={(event) => setNewtaskText(event.target.value)}
                value={newTaskText}
                placeholder="Adicione uma nova tarefa"
            />
            <button disabled={newTaskText === ""}>Criar</button>
        </form>
    );
}
