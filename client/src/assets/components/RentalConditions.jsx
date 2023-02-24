import { Box, TextField, Toolbar, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";

function RentalConditions(props) {
  const { updateRentalConditions, updateStartingDate, rentalConditions } =
    props;
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
            value={rentalConditions.startingDate}
            onChange={updateStartingDate}
            renderInput={(params) => (
              <TextField required margin="dense" {...params} />
            )}
          />
        </LocalizationProvider>{" "}
        <TextField
          sx={{ mx: 1 }}
          value={rentalConditions.duration}
          name="duration"
          placeholder="Contract Length Date"
          type="text"
          onChange={updateRentalConditions}
        />
        <TextField
          sx={{ mx: 1 }}
          value={rentalConditions.amount}
          name="amount"
          placeholder="amount"
          type="text"
          onChange={updateRentalConditions}
        />
        <TextField
          sx={{ mx: 1 }}
          name="deposit"
          value={rentalConditions.deposit}
          placeholder="deposit"
          type="text"
          onChange={updateRentalConditions}
        />
      </Toolbar>
    </>
  );
}

export default RentalConditions;
