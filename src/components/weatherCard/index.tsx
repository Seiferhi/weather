import { Box, Typography } from "@mui/material";
import { WeatherT } from "../../types/data";
import WindPowerIcon from "@mui/icons-material/WindPower";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { cardBody } from "../../style";
 
type WeatherCardT = {
  data: WeatherT;
};
// temperature conveture method
const TemperatureConverter = (degree: number) => {
  const celsiusDegree = degree - 273.15;
  return celsiusDegree.toFixed(2);
};

const WeatherCard = ({ data }: WeatherCardT) => {
  // loading view
  if (!data || !Object.keys(data).length)
    return <Typography variant="h5">No data ...</Typography>;

  return (
    <Box>
      <Box>
        <Typography variant="h4">
          {data?.name}, {data?.sys?.country}
        </Typography>
        <Typography variant="h6">
          {TemperatureConverter(data.main.temp)}
          °C
        </Typography>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt="weather"
        />
      </Box>
      <Box>
        <Typography variant="h6">{data.weather[0].description}</Typography>
        <Box sx={cardBody}>
          <Box>
            <ThermostatIcon sx={{ color: "#d46617" }} />
            <div>
              <p>Max: {TemperatureConverter(data.main.temp_max)} °C</p>
              <p>Min: {TemperatureConverter(data.main.temp_min)} °C</p>
            </div>
          </Box>
          <Box>
            <WindPowerIcon sx={{ color: "#22d4f0" }} />
            <div>
              <p>speed: {data.wind.speed} </p>
              <p>degree: {data.wind.deg} </p>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default WeatherCard;
