import styles from '@emotion/styled';

export const TodoDragSourceDiv = styles.div<{ isDragging: boolean }>`
opacity: ${(props) => (props.isDragging ? 0.5 : 1)}
width: 100%;
`;
