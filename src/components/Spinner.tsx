
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

type SpinnerColor = "secondary" | "success" | "error";

export interface ISpinnerProps {
    color?: SpinnerColor,
}

export function Spinner ({color}: ISpinnerProps) {
  return (
    <Stack sx={{ color: "grey.500", margin: "0px auto", display: "table" }} spacing={2} direction="row">
      <CircularProgress color={color ? color : "success"} />
    </Stack>
  );
}



