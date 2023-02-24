import RentalConditions from "../components/RentalConditions";
import TenantDetails from "../components/TenantDetails";
import LandLordDetails from "../components/LandLordDetails";
import PropertyDetails from "../components/PropertyDetails";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function MainPage() {
  const [numberOfLandLords, setNumberOfLandlords] = useState(0);
  const [numberOfTenants, setNumberOfTenants] = useState(0);

  const [propertyDetails, setPropertyDetails] = useState({
    address: "",
    description: "",
  });

  const [rentalConditions, setRentalConditions] = useState({
    startingDate: "",
    duration: "",
    amount: "",
    deposit: "",
  });

  const [landlordsDetails, setLandlordsDetails] = useState({
    1: { title: "", fullName: "", documentType: "", documentNumber: "" },
    2: { title: "", fullName: "", documentType: "", documentNumber: "" },
  });
  const [tenantsDetails, setTenantsDetails] = useState({
    1: {
      title: "",
      firstNames: "",
      Surnames: "",
      documentType: "",
      documentNumber: "",
    },
    2: {
      title: "",
      firstNames: "",
      Surnames: "",
      documentType: "",
      documentNumber: "",
    },
  });

  function updatePropertyDetails(event) {
    const { name, value } = event.target;

    setPropertyDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

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
  const tenantsComponents = [];

  for (let i = 0; i < numberOfLandLords; i++) {
    landlordComponents.push(<LandLordDetails />);
  }

  for (let i = 0; i < numberOfTenants; i++) {
    tenantsComponents.push(<TenantDetails />);
  }

  useEffect(() => {
    console.log(propertyDetails);
  }, [propertyDetails]);

  return (
    <>
      <PropertyDetails
        updatePropertyDetails={updatePropertyDetails}
        propertyDetails={propertyDetails}
      />
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
