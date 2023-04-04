import styled from '@emotion/styled';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import { TodosMenu } from './components/todosMenu';
import { TodoItem } from "./dto's/todoItem";
import { TodoState } from "./dto's/todoState";
import { theme } from './styles/theme';
import { ThemeProvider } from '@emotion/react';

const BodyDiv = styled.div`
  background-color: #313233;
`;

function App() {
  const todos: { [id: string]: TodoItem } = useSelector(
    (state: TodoState) => state.todos
  );
  return (
    <BodyDiv className='App'>
      <DndProvider backend={HTML5Backend}>
        <TodosMenu todos={todos}></TodosMenu>
      </DndProvider>
    </BodyDiv>
  );
}

export default App;
