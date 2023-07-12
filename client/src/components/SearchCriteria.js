import React, {useState} from "react";
import { Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@material-ui/core";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES, SEARCH_BY } from '../utils/queries';

const SearchCriteria = () => {
  //State variables for form values
  // const [searchText, setSearchText] = useState("");
  // const [category, setCategory] = useState("");
  // const [age, setAge] = useState("");
  // const [price, setPrice] = useState("");
  // const [location, setLocation] = useState("");

  const [searchCriteria, setSearch] = useState({
    searchText: null,
    categories: null
  });

  const { loading:loadingCategory , error: categoryError, data:categoryData} = useQuery(GET_ALL_CATEGORIES);

  const [searchItems, { loading:searchItemsLoading, error:searchItemsError, data:searchItemsData }] = useLazyQuery(SEARCH_BY);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchCriteria)
    searchItems({ variables: { searchCriteria } })
    .then((result) => {
      console.log(result)
      const categoryIds = result.data.searchBy.map((item) => item._id).join(",");
      return categoryIds
    })
    .then((categoryIds)=>{
      console.log(categoryIds)
      const path = `/search/${categoryIds}`;
      console.log(path)
      window.location.href = path;
    })
    .catch((error) => {
      console.error("Error executing search query:", error);
    });
  };

  const handleInputChange = (e) => {
    setSearch({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
    console.log(searchCriteria)
  };

  if (loadingCategory || searchItemsLoading) return <p>Loading...</p>;
  if (categoryError || searchItemsError) return <p>Error: no categories or search items found!</p>;

  const categoryArr = categoryData.getAllCategories

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="searchText"
          value={searchCriteria.searchText}
          onChange={handleInputChange}
        />
      </div>
  
      <FormControl variant="outlined" style={{ width: '100px', height: '20px' }}>
        <InputLabel variant="outlined" style={{ width: '100px', height: '20px' }}>
          Category
        </InputLabel>
        <Select
          name="categories"
          value={searchCriteria.categories}
          onChange={handleInputChange}
        >
          {categoryArr.map((item) => (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  
      <div>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#66b2b2', fontSize: '12px', padding: '4px 8px' }}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchCriteria;
      {/* <FormControl fullWidth variant="outlined" margin="normal">
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
  ); */}