import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function LandLordDetails() {
  let [age, setAge] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Toolbar>
        <FormControl sx={{ mx: 1, minWidth: 120 }}>
          <InputLabel>Title</InputLabel>
          <Select value={age} label="Title" onChange={handleChange}>
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
            <MenuItem value={"Don"}>Don</MenuItem>
            <MenuItem value={"Doña"}>Doña</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{ mx: 1 }} placeholder="Full Name" />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Document</InputLabel>
          <Select value={age} label="ID document" onChange={handleChange}>
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
            <MenuItem value={"DNI"}>DNI</MenuItem>
            <MenuItem value={"PASSPORT"}>PASAPORTE</MenuItem>
            <MenuItem value={"NIE"}>NIE</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{ mx: 1 }} placeholder="NUMBER OF ID" />
      </Toolbar>
    </>
  );
}

export default LandLordDetails;
