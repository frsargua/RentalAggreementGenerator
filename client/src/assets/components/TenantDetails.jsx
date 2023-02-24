import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Toolbar } from "@mui/material";

export default function TenantDetails(props) {
  const { index, tenantsDetails, updateTenantsDetails } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Toolbar>
        <FormControl sx={{ mx: 1, minWidth: 120 }}>
          <InputLabel>Title</InputLabel>
          <Select
            value={tenantsDetails[index].title}
            label="Age"
            name="title"
            onChange={(event) => updateTenantsDetails(event, index)}
          >
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
            <MenuItem value={"Don"}>Don</MenuItem>
            <MenuItem value={"Doña"}>Doña</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={tenantsDetails[index].firstNames}
          sx={{ mx: 1, minWidth: 120 }}
          placeholder="Name and Middle Name"
          name="firstNames"
          onChange={(event) => updateTenantsDetails(event, index)}
        />
        <TextField
          value={tenantsDetails[index].Surnames}
          sx={{ mx: 1, minWidth: 120 }}
          placeholder="Surnames"
          name="Surnames"
          onChange={(event) => updateTenantsDetails(event, index)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Document</InputLabel>
          <Select
            value={tenantsDetails[index].documentType}
            label="ID document"
            name="documentType"
            onChange={(event) => updateTenantsDetails(event, index)}
          >
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
            <MenuItem value={"DNI"}>DNI</MenuItem>
            <MenuItem value={"PASSPORT"}>PASAPORTE</MenuItem>
            <MenuItem value={"NIE"}>NIE</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={tenantsDetails[index].documentNumber}
          sx={{ mx: 1 }}
          placeholder="NUMBER OF ID"
          name="documentNumber"
          onChange={(event) => updateTenantsDetails(event, index)}
        />
      </Toolbar>
    </>
  );
}
