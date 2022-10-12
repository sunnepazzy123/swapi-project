import { Box, Button, TextField } from "@mui/material";
import { useState, } from "react";


export interface ISearchProps {
 // eslint-disable-next-line
  handleClick: (input: string) => void
}

export function Search({ handleClick }: ISearchProps) {
  const [input, setInput] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick(input);
  };
  return (
  <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
    <Box component="form" noValidate sx={{ mt: 1 }} >
      <TextField
        margin="normal"
        required
        fullWidth
        id="search"
        label="Search Films By Full name, Homeworld name, Homeworld population"
        name="search"
        autoComplete="search"
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Search
      </Button>
    </Box>
    </form>
  );
}
