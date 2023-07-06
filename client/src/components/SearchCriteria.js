import React from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from "@material-ui/core";

const SearchCriteria = () => {
  // State variables for form values
  const [searchText, setSearchText] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [age, setAge] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [location, setLocation] = React.useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or other actions with the form values
    console.log("Search Text:", searchText);
    console.log("Category:", category);
    console.log("Age:", age);
    console.log("Price:", price);
    console.log("Location:", location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        // fullWidth
        variant="outlined"
        margin="normal"
      />

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="appliances">Appliances</MenuItem>
            <MenuItem value="apparel">Apparel</MenuItem>
            <MenuItem value="auto">Auto</MenuItem>
            <MenuItem value="furniture">Furniture</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="household">Household</MenuItem>
            <MenuItem value="miscellaneous">Miscellaneous</MenuItem>
            <MenuItem value="outdoor">Outdoor</MenuItem>
            <MenuItem value="services">Services</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Condition</InputLabel>
        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="used">Used</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Price</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="0-25">$0-25</MenuItem>
            <MenuItem value="26-50">$26-50</MenuItem>
            <MenuItem value="51-100">$51-100</MenuItem>
            <MenuItem value="101-150">$101-150</MenuItem>
            <MenuItem value="151-200">$151-200</MenuItem>
            <MenuItem value="201-300">$201-300</MenuItem>
            <MenuItem value="301-400">$301-400</MenuItem>
            <MenuItem value="401-500">$401-500</MenuItem>
            <MenuItem value="501 or more">$501 or more</MenuItem>
        </Select>
      </FormControl>



      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchCriteria;
