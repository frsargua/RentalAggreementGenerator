import RentalConditions from "../components/RentalConditions";
import TenantDetails from "../components/TenantDetails";
import LandLordDetails from "../components/LandLordDetails";
import PropertyDetails from "../components/PropertyDetails";
import { useState } from "react";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function MainPage() {
  const [numberOfLandLords, setNumberOfLandlords] = useState(0);
  const [numberOfTenants, setNumberOfTenants] = useState(0);

  function increaseNumberOfTenants() {
    if (numberOfTenants < 2) {
      setNumberOfTenants((prev) => prev + 1);
    }
  }
  function decreaseNumberOfTenants() {
    if (numberOfTenants >= 0) {
      setNumberOfTenants((prev) => prev - 1);
    }
  }
  function increaseNumberOfLandlords() {
    if (numberOfLandLords < 2) {
      setNumberOfLandlords((prev) => prev + 1);
    }
  }
  function decreaseNumberOfLandlords() {
    if (numberOfLandLords >= 0) {
      setNumberOfLandlords((prev) => prev - 1);
    }
  }

  const landlordComponents = [];

  for (let i = 0; i < numberOfLandLords; i++) {
    landlordComponents.push(<LandLordDetails />);
  }

  const tenantsComponents = [];

  for (let i = 0; i < numberOfTenants; i++) {
    tenantsComponents.push(<TenantDetails />);
  }

  return (
    <>
      <PropertyDetails />
      <Box>
        <Typography variant="h6" fontWeight={600}>
          Property Owner/s Details
        </Typography>
        <IconButton onClick={increaseNumberOfLandlords}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={decreaseNumberOfLandlords}>
          <RemoveIcon />
        </IconButton>
        {landlordComponents}
      </Box>

      <Box>
        <Typography variant="h6" fontWeight={600}>
          Tenant/s Details
        </Typography>
        <IconButton onClick={increaseNumberOfTenants}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={decreaseNumberOfTenants}>
          <RemoveIcon />
        </IconButton>
        {tenantsComponents}
      </Box>

      <RentalConditions />
    </>
  );
}

export default MainPage;
