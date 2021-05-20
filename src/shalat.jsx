import axios from "axios"
import { useState, useEffect } from "react"
import Card from "./component/card"

export default function Shalat() {

   const [shalat, setShalat] = useState({})
   const [location, setLocation] = useState({})

   
   const getData = async () => {
      try {
         let shalat = await axios.get("https://api.pray.zone/v2/times/today.json?city=jakarta")
         setShalat(shalat.data.results.datetime[0].times)
         setLocation(shalat.data.results.location)
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      getData()
   }, [])

   
   
   return (
      <>
         <div className="p-1 mb-3">
            <div className="container my-3">
               <h1 className="text-center animate__animated animate__fadeInDownBig">Realtime Waktu Ibadah</h1>
               <p className="text-center mt-0 animate__animated animate__flipInY animate__delay-1s">Sumber <a href="https://waktusholat.org/" target="tab">waktusholat.org</a></p>
               <h5 className="text-center mb-4 animate__animated animate__flipInX animate__delay-1s">Kota : {location.city} | Timezone : { location.timezone}</h5>

               <div className="row mt-5 mb-5 animate__animated animate__slideInUp">
                  <div className="col-md-2 mb-3">
                     <Card color="" title="Imsak 🌅" content={ shalat.Imsak } />
                  </div>

                  <div className="col-md-2 mb-3">
                     <Card color="" title="Subuh 🌤️" content={ shalat.Sunrise } />
                  </div>

                  <div className="col-md-2 mb-3">
                     <Card color="" title="Dzuhur 🌞" content={ shalat.Dhuhr } />
                  </div>

                  <div className="col-md-2 mb-3">
                     <Card color="" title="Asr 🌥️" content={ shalat.Asr } />
                  </div>

                  <div className="col-md-2 mb-3">
                     <Card color="" title="Maghrib 🌇" content={ shalat.Maghrib } />
                  </div>

                  <div className="col-md-2 mb-3">
                     <Card color="" title="Isha 🌙" content={ shalat.Isha } />
                  </div>
               </div>               

            </div>
         </div>
      </>
   )
}
