import React, {useState} from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from "@material-ui/core";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES, SEARCH_BY } from '../utils/queries';

const SearchCriteria = () => {
  const [searchCriteria, setSearch] = useState({
    searchText: null,
    categories: null,
    value: null
  });

  const { loading:loadingCategory , error: categoryError, data:categoryData} = useQuery(GET_ALL_CATEGORIES);

  const [searchItems, { loading:searchItemsLoading, error:searchItemsError, data:searchItemsData }] = useLazyQuery(SEARCH_BY);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItems({ variables: { searchCriteria } })
    .then((result) => {
      const categoryIds = result.data.searchBy.map((item) => item._id).join(",");
      return categoryIds
    })
    .then((categoryIds)=>{
      if (!categoryIds){
        const path = `/search/noitemsfound`;
        window.location.href = path;
      }else{
      const path = `/search/${categoryIds}`;
      window.location.href = path;
      }
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
      <TextField
        label="Search"
        value={searchCriteria.searchText || ""}
        name="searchText"
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Price</InputLabel>
        <Select name="value" value={searchCriteria.value || ""} onChange={handleInputChange}>
            <MenuItem value={"0-25"}>$0-$25</MenuItem>
            <MenuItem value={"26-50"}>$26-$50</MenuItem>
            <MenuItem value={"51-100"}>$51-$100</MenuItem>
            <MenuItem value={"101-500"}>$101-$500</MenuItem>
            <MenuItem value={"500-1000"}>$501-$1000</MenuItem>
            <MenuItem value={"1001-1000000"}>&gt;1000</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          name="categories"
          value={searchCriteria.categories || ""}
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