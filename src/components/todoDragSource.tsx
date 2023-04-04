import { useDrag } from 'react-dnd';
import { draggableItems } from '../draggableItems';
import { TodoDragSourceDiv } from '../styles/todoDragSourceDiv';
import { TodoText } from '../styles/todoTextStyle';

export function TodoDragSource(props: {
  text: string;
  onTextChange: (text: string) => void;
}) {
  const { text, onTextChange } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: draggableItems.TODO,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <TodoDragSourceDiv ref={drag} isDragging={isDragging}>
      <TodoText
        multiline
        fullWidth
        borderColor={'white'}
        value={text}
        onChange={(e) => {
          onTextChange(e.target.value);
        }}
      ></TodoText>
    </TodoDragSourceDiv>
  );
}
