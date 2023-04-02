import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { TodosMenu } from './components/todosMenu';
import { TodoItem } from "./dto's/todoItem";
import { TodoState } from "./dto's/todoState";

const BodyDiv = styled.div`
  background-color: #313233;
`;

function App() {
  const todos: { [id: string]: TodoItem } = useSelector(
    (state: TodoState) => state.todos
  );
  return (
    <BodyDiv className='App'>
      <TodosMenu todos={todos}></TodosMenu>
    </BodyDiv>
  );
}

export default App;
