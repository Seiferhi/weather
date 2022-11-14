import useStore from "../store";
import { containerStyle } from "../style";
import { WeatherT } from "../types/data";
import { Box } from "@mui/material";
import SearchInput from "../components/searchInput";
import WeatherCard from "../components/weatherCard";
 

const HomePage = () => {
    const weather: WeatherT = useStore((state) => state.weather);

  return (
    <Box sx={containerStyle}>
      <SearchInput />
      <WeatherCard data={weather} />
    </Box>
  );
};
export default HomePage;
