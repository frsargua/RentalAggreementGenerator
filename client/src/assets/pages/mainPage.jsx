import RentalConditions from "../components/RentalConditions";
import TenantDetails from "../components/TenantDetails";
import LandLordDetails from "../components/LandLordDetails";
import PropertyDetails from "../components/PropertyDetails";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import dayjs from "dayjs";
import axios from "axios";

function MainPage() {
  const [numberOfLandLords, setNumberOfLandlords] = useState(0);
  const [numberOfTenants, setNumberOfTenants] = useState(0);

  const [propertyDetails, setPropertyDetails] = useState({
    address: "",
    description: "",
  });

  const [rentalConditions, setRentalConditions] = useState({
    startingDate: dayjs().format("YYYY-MM-DD"),
    duration: "",
    amount: "",
    deposit: "",
  });

  let tenantDetailsStructure = {
    title: "",
    firstNames: "",
    Surnames: "",
    documentType: "",
    documentNumber: "",
    genre: "",
  };

  let landlordDetailsStructure = {
    title: "",
    fullName: "",
    documentType: "",
    documentNumber: "",
    genre: "",
  };

  const [landlordsDetails, setLandlordsDetails] = useState([]);

  const [tenantsDetails, setTenantsDetails] = useState([]);

  function updateRentalConditions(event) {
    const { name, value } = event.target;

    setRentalConditions((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function updateStartingDateInRentalConditions(input) {
    setRentalConditions((prev) => {
      return { ...prev, startingDate: input.format("YYYY-MM-DD") };
    });
  }
  function updateLandlordsTitle(event, key) {
    const { name, value } = event.target;

    setLandlordsDetails((prev) => {
      prev[key][name] = value;
      return [...prev];
    });
  }

  function updateLandlordsDetails(event, key) {
    const { name, value } = event.target;
    console.log(event);
    setLandlordsDetails((prev) => {
      prev[key][name] = value;
      return [...prev];
    });
  }

  function updateTenantsDetails(event, key) {
    const { name, value } = event.target;

    setTenantsDetails((prev) => {
      prev[key][name] = value;
      return [...prev];
    });
  }

  function updatePropertyDetails(event) {
    const { name, value } = event.target;

    setPropertyDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function updateRentalConditions(event) {
    const { name, value } = event.target;

    setRentalConditions((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function increaseNumberOfTenants() {
    if (numberOfTenants < 2) {
      tenantsDetails.push(tenantDetailsStructure);
      setNumberOfTenants((prev) => prev + 1);
    }
  }
  function decreaseNumberOfTenants() {
    if (numberOfTenants >= 0) {
      tenantsDetails.pop();
      setNumberOfTenants((prev) => prev - 1);
    }
  }
  function increaseNumberOfLandlords() {
    if (numberOfLandLords < 2) {
      landlordsDetails.push(landlordDetailsStructure);
      setNumberOfLandlords((prev) => prev + 1);
    }
  }
  function decreaseNumberOfLandlords() {
    if (numberOfLandLords >= 0) {
      landlordsDetails.pop();
      setNumberOfLandlords((prev) => prev - 1);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/document/create",
        {
          propertyDetails,
          rentalConditions,
          tenantsDetails,
          landlordsDetails,
        }
      );
      // const response = await fetch("http://localhost:3002/create-document", {
      //   method: "POST",
      //   mode: "cors",
      //   body: JSON.stringify({
      //     data: {
      //       landlords: landlordsDetails,
      //       property: propertyDetails,
      //       tenants: tenantsDetails,
      //       rentalCondition: rentalConditions,
      //     },
      //   }),
      //   headers: { "Content-Type": "application/json" },
      // });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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

          {landlordsDetails.map((data, index) => (
            <>
              <LandLordDetails
                key={index}
                index={index}
                landlordsDetails={data}
                updateLandlordsDetails={updateLandlordsDetails}
                updateLandlordsTitle={updateLandlordsTitle}
              />
            </>
          ))}
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

          {tenantsDetails.map((data, index) => (
            <>
              <TenantDetails
                key={index}
                index={index}
                tenantsDetails={data}
                updateTenantsDetails={updateTenantsDetails}
              />
            </>
          ))}
        </Box>

        <RentalConditions
          updateRentalConditions={updateRentalConditions}
          rentalConditions={rentalConditions}
          updateStartingDate={updateStartingDateInRentalConditions}
        />
        <Button
          type="submit"
          sx={{ marginTop: "2rem" }}
          variant="contained"
          color="success"
        >
          Get PDF
        </Button>
      </form>
    </>
  );
}

export default MainPage;
