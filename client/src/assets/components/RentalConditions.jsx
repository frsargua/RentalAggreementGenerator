import { Box, TextField, Toolbar, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";

function RentalConditions() {
  const [value, setValue] = useState(null);

  return (
    <>
      <Typography variant="h6" fontWeight={600}>
        Rental Conditions
      </Typography>
      <Toolbar>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start date"
            disablePast
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField required margin="dense" {...params} />
            )}
          />
        </LocalizationProvider>{" "}
        <TextField
          sx={{ mx: 1 }}
          placeholder="Contract Length Date"
          type="number"
        />
        <TextField sx={{ mx: 1 }} placeholder="amount" type="number" />
        <TextField sx={{ mx: 1 }} placeholder="deposit" type="number" />
      </Toolbar>
    </>
  );
}

export default RentalConditions;
