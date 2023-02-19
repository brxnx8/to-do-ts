import style from "./labelCounter.module.css";

interface PropsLabel {
    text: string;
    CounterTasks: number;
}

export function Label(props: PropsLabel) {
    return (
        <div className={style.containerLabel}>
            <p>{props.text}</p>
            <span>{props.CounterTasks}</span>
        </div>
    );
}
