import { useState } from "react";
import axios from "axios";


const App = () => {
  const [formData, setformData] = useState({
    latitude : '',
    longitude : ''
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;

    setformData({
      ...formData,
      [name] : value,
    });
  }

    const fetchweather = async()=>{
      const response = await axios.get("http://localhost:8000/api/weatherdata", {
        params: {
          latitude : formData.latitude,
          longitude : formData.longitude
        }
      })

      console.log(response.data); 
    } 

  return (
    <div>
      <input type="text" placeholder="latitude" name="latitude" value={formData.latitude} onChange={handleChange} />
      <input type="text" placeholder="longitude" name="longitude" value={formData.longitude} onChange={handleChange} />

      <button onClick={fetchweather}>get data</button>
    </div>
  )
}

export default App
