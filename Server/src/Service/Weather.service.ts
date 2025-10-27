import axios from 'axios';
import { Request, Response } from 'express';


export const getWeatherData = async (req: Request, res: Response) => {
    try {
        const {latitude, longitude} = req.query;

        if(!latitude || !longitude){
            return res.status(400).json({ message : "latitude and longitude not provided"});
        }

        const Weather = await axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude : latitude,
                longitude : longitude,
                hourly: 'temperature_2m,precipitation,wind_speed_10m',
            }
        })


        return res.status(200).json(Weather.data);
    } catch (error) {

    }
}