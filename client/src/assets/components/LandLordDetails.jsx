import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function LandLordDetails(props) {
  let {
    index,
    landlordsDetails,
    updateLandlordsDetails,
    updateLandlordsTitle,
  } = props;

  return (
    <>
      <Toolbar>
        <FormControl sx={{ mx: 1, minWidth: 120 }}>
          <InputLabel>Genre</InputLabel>
          <Select
            value={landlordsDetails.genre}
            label="Genre"
            name="genre"
            onChange={(event) => updateLandlordsTitle(event, index)}
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
            value={landlordsDetails.title}
            label="Title"
            name="title"
            onChange={(event) => updateLandlordsTitle(event, index)}
          >
            <MenuItem value="">
              <em>-</em>
            </MenuItem>
            <MenuItem value={"Don"}>Don</MenuItem>
            <MenuItem value={"Doña"}>Doña</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ mx: 1 }}
          value={landlordsDetails.fullName}
          placeholder="Full Name"
          name="fullName"
          onChange={(event) => updateLandlordsTitle(event, index)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Document</InputLabel>
          <Select
            value={landlordsDetails.documentType}
            label="ID document"
            name="documentType"
            onChange={(event) => updateLandlordsTitle(event, index)}
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
          value={landlordsDetails.documentNumber}
          name="documentNumber"
          sx={{ mx: 1 }}
          placeholder="NUMBER OF ID"
          onChange={(event) => updateLandlordsTitle(event, index)}
        />
      </Toolbar>
    </>
  );
}

export default LandLordDetails;
