import AddIcon from '@mui/icons-material/Add';
import { useDrag } from 'react-dnd';
import { draggableItems } from '../draggableItems';
import { DragTodoButton, DragTodoDiv } from '../styles/dragTodoButtonStyle';

export function DragTodo() {
  const [, drag] = useDrag(() => ({
    type: draggableItems.TODO,
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <DragTodoDiv ref={drag}>
      <DragTodoButton>
        <AddIcon fontSize='large'></AddIcon>
      </DragTodoButton>
    </DragTodoDiv>
  );
}
