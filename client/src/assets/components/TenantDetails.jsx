import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Toolbar } from "@mui/material";

export default function TenantDetails(props) {
  const { index, tenantsDetails, updateTenantsDetails } = props;

  return (
    <>
      <Toolbar>
        <FormControl sx={{ mx: 1, minWidth: 120 }}>
          <InputLabel>Genre</InputLabel>
          <Select
            value={tenantsDetails.genre}
            label="Genre"
            name="genre"
            onChange={(event) => updateTenantsDetails(event, index)}
          >
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
            <MenuItem value={"H"}>H</MenuItem>
            <MenuItem value={"M"}>M</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ mx: 1, minWidth: 120 }}>
          <InputLabel>Title</InputLabel>
          <Select
            value={tenantsDetails.title}
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
          value={tenantsDetails.firstNames}
          sx={{ mx: 1, minWidth: 120 }}
          placeholder="Name and Middle Name"
          name="firstNames"
          onChange={(event) => updateTenantsDetails(event, index)}
        />
        <TextField
          value={tenantsDetails.Surnames}
          sx={{ mx: 1, minWidth: 120 }}
          placeholder="Surnames"
          name="Surnames"
          onChange={(event) => updateTenantsDetails(event, index)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Document</InputLabel>
          <Select
            value={tenantsDetails.documentType}
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
          value={tenantsDetails.documentNumber}
          sx={{ mx: 1 }}
          placeholder="NUMBER OF ID"
          name="documentNumber"
          onChange={(event) => updateTenantsDetails(event, index)}
        />
      </Toolbar>
    </>
  );
}
