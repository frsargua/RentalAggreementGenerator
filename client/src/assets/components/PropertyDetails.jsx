import { TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function PropertyDetails() {
  return (
    <>
      <Typography variant="h6" fontWeight={600}>
        Property Details
      </Typography>

      <TextField
        margin="dense"
        sx={{ mx: 4 }}
        fullWidth
        placeholder="Property Address"
      />
      <TextField
        margin="dense"
        sx={{ mx: 4 }}
        fullWidth
        placeholder="Property Description of Rooms"
      />
    </>
  );
}
