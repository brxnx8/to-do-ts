import "./style.css";

import { Header } from "./componentes/header";
import { InputText } from "./componentes/inputText";
import { SectionTask } from "./componentes/sectionTasks";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState(Array<string>);

    const addNewTask = (newTask: string) => {
        if (!tasks.includes(newTask)) {
            setTasks([...tasks, newTask]);
        } else {
            alert("Esta task ja existe");
        }
    };

    return (
        <div className="App">
            <Header />
            <main className="section-main">
                <InputText addNewTask={addNewTask} />
                <SectionTask
                    tasks={tasks}
                    removeTask={(tasks: Array<string>) => setTasks(tasks)}
                />
            </main>
        </div>
    );
}

export default App;
