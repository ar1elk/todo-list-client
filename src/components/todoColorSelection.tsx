import CloseIcon from "@mui/icons-material/Close";
import PaletteIcon from "@mui/icons-material/Palette";
import { Sketch } from "@uiw/react-color";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DEFAULT_TODO_COLOR } from "../defaultTodoColor";
import { todoColored } from "../redux/todosSlice";
import { ClosePaperButton } from "../styles/closePaperButton";
import { ColorPickerPaper } from "../styles/colorPickerPaper";
import { theme } from "../styles/theme";
import {
  ColorPickerBackdrop,
  SelectColorButton,
} from "../styles/todoColorSelectionStyle";
import { PositionTopRightDiv } from "../styles/positionTopRightDiv";

export function TodoColorSelection({ id }: { id: string }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [hex, setHex] = useState(DEFAULT_TODO_COLOR);
  return (
    <>
      <SelectColorButton onClick={() => setOpen(!open)} buttonColor={hex}>
        <PaletteIcon fontSize="large" />
      </SelectColorButton>
      <ColorPickerBackdrop open={open}>
        <ColorPickerPaper>
          <PositionTopRightDiv>
            <ClosePaperButton onClick={() => setOpen(false)}>
              <CloseIcon fontSize="large"></CloseIcon>
            </ClosePaperButton>
          </PositionTopRightDiv>
          <Sketch
            style={{ backgroundColor: theme.palette.primary.main }}
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
              dispatch(
                todoColored({
                  id: id,
                  color: hex,
                })
              );
            }}
          />
        </ColorPickerPaper>
      </ColorPickerBackdrop>
    </>
  );
}
