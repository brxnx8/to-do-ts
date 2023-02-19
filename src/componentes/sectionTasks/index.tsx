import { useState } from "react";
import { Label } from "../labelWithCounter";
import { Task } from "../task";
import style from "./sectionTasks.module.css";

import imagem from "../../images/book.png";

interface PropsSectionTask {
    tasks: Array<string>;
    removeTask: (tasks: Array<string>) => void;
}

export function SectionTask(props: PropsSectionTask) {
    const [tasksCompleted, setTasksCompleted] = useState(0);

    function taskIsCompleted(bool: boolean) {
        if (bool) {
            setTasksCompleted((state) => state + 1);
        } else {
            setTasksCompleted((state) => state - 1);
        }
    }

    function removeTask(texto: string) {
        props.removeTask(props.tasks.filter((task: string) => task !== texto));
    }

    return (
        <section className={style.sectionTask}>
            <div className={style.divLabels}>
                <Label
                    text="Tarefas Criadas"
                    CounterTasks={props.tasks.length}
                />
                <Label text="Concluidas" CounterTasks={tasksCompleted} />
            </div>
            <div className={style.divContainerTasks}>
                {props.tasks.length > 0 ? (
                    props.tasks.map((task) => {
                        return (
                            <Task
                                text={task}
                                key={task}
                                isCompleted={taskIsCompleted}
                                removeTask={removeTask}
                            />
                        );
                    })
                ) : (
                    <div className={style.containerEmpty}>
                        <img src={imagem} alt="imagem de um caderno" />
                        <h1>Você ainda não tem tarefas cadastradas.</h1>
                        <h2>Crie tarefas e organize seus itens a fazer</h2>
                    </div>
                )}
            </div>
        </section>
    );
}
