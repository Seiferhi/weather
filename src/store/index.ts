import { CityT, WeatherT } from "./../types/data";
import create  from "zustand";
import axios from "axios";
import { toast } from 'react-toastify';


interface StateInterface {
  weather: WeatherT  ;
  getWeather: (city: CityT) => void;
  city:CityT,
  updateCity: (newCity: CityT) => void;
}
const useStore = create<StateInterface>((set) => ({
   weather: {} as WeatherT,
   getWeather: async (city: CityT) => {
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f825344b0cf0672c689378549f9868db`;
    try {
      const response = await axios.get(apiKey);

      const data: WeatherT = await response.data;
 
      set({ weather: data });
    } catch {
      set({ weather: {}  as WeatherT });
      toast.error("please check the name that you typed and try again ");
    }
  },
   city: "",
  updateCity: (newCity: CityT) => set(() => ({  city: newCity })),

}));
export default useStore;
