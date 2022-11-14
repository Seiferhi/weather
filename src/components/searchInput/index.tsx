import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { formStateT } from "../../types/data";
import useStore from "../../store";
import { searchIconStyle, SearchInputStyle } from "../../style";

const SearchInput = () => {
  // get currentcity and update method from the store
  const updateCity = useStore((state) => state.updateCity);

  const getWeather = useStore((state) => state.getWeather);

  // form config
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty }
  } = useForm<formStateT>({
    defaultValues: { city: "" }
  });

  // handle form sublit method
  const onSubmit = (data: formStateT) => {
    //check if city value not empty
    if (data.city.length) {
      updateCity(data.city);
      getWeather(data.city);
      resetField("city");
    }
  };

  const handleClear = () => resetField("city");
 
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography sx={{marginBottom:"16px"}} variant="h5">Please Enter your location</Typography>
      <TextField
        sx={SearchInputStyle}
        size="small"
        variant="outlined"
        placeholder="Search your location..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={searchIconStyle} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              sx={{ cursor: "default" }}
              position="end"
              onClick={handleClear}
            >
              {isDirty && <ClearIcon />}
            </InputAdornment>
          )
        }}
        {...register("city")}
      />
    </Box>
  );
};
export default SearchInput;
