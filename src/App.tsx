import { ThemeProvider } from "@mui/material";
import { useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { TodosMenu } from "./components/todosMenu";
import { TodoItem } from "./dto's/todoItem";
import { TodoState } from "./dto's/todoState";
import { config } from "./particles/config";
import { BodyDiv } from "./styles/bodyDivStyle";
import { StyledParticles } from "./styles/styledParticles";
import { theme } from "./styles/theme";

function App() {
  const todos: { [id: string]: TodoItem } = useSelector(
    (state: TodoState) => state.todos
  );
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BodyDiv className="App">
        <StyledParticles
          id="tsparticles"
          init={particlesInit}
          options={config}
        />

        <DndProvider backend={HTML5Backend}>
          <TodosMenu todos={todos}></TodosMenu>
        </DndProvider>
      </BodyDiv>
    </ThemeProvider>
  );
}

export default App;
