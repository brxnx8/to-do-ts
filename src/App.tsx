import "./style.css";

import { Header } from "./componentes/header";
import { InputText } from "./componentes/inputText";
import { SectionTask } from "./componentes/sectionTasks";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/themes/themes";
import { DivPColored } from "./styles/componentsColor/DivPrimary.styles";

function App() {
    const [tasks, setTasks] = useState(Array<string>);

    const [theme, setTheme] = useState(LightTheme);

    function ChangeTheme(bool: string) {
        setTheme(bool === "dark" ? DarkTheme : LightTheme);
    }

    const addNewTask = (newTask: string) => {
        if (!tasks.includes(newTask)) {
            setTasks([...tasks, newTask]);
        } else {
            alert("Esta task ja existe");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Header ChangeTheme={ChangeTheme} theme={theme} />
            <DivPColored className="section-main">
                <InputText addNewTask={addNewTask} theme={theme} />
                <SectionTask
                    tasks={tasks}
                    removeTask={(tasks: Array<string>) => setTasks(tasks)}
                    theme={theme}
                />
            </DivPColored>
        </ThemeProvider>
    );
}

export default App;
