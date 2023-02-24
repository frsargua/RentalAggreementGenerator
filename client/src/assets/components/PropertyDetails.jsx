import { TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function PropertyDetails(props) {
  let { updatePropertyDetails, propertyDetails } = props;

  return (
    <>
      <Typography variant="h6" fontWeight={600}>
        Property Details
      </Typography>

      <TextField
        margin="dense"
        sx={{ mx: 4 }}
        name="address"
        value={propertyDetails.address}
        fullWidth
        placeholder="Property Address"
        onChange={updatePropertyDetails}
      />
      <TextField
        margin="dense"
        sx={{ mx: 4 }}
        name="description"
        value={propertyDetails.description}
        fullWidth
        placeholder="Property Description of Rooms"
        onChange={updatePropertyDetails}
      />
    </>
  );
}
