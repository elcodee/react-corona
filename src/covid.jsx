import axios from "axios"
import { useState, useEffect } from "react"
import Card from "./component/card"

export default function Covid() {

   const [data, setData] = useState({})
   const [provinsi, setProvinsi] = useState([])

   
   const getData = async () => {
      try {
         let datanya = await axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia")
         let provinsi = await axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/alt")
         setData(datanya.data)
         setProvinsi(provinsi.data)
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      getData()
   }, [])

   
   return (
      <>
         <div className="p-1 mb-4">
            <div className="container my-3">
               <h1 className="text-center animate__animated animate__fadeInDownBig">Realtime Covid In 🇮🇩</h1>
               <p className="text-center mt-0 animate__animated animate__flipInY animate__delay-1s">Sumber <a href="https://kawalcorona.com/" target="tab">api.kawalcorona.com</a></p>
               
               <div className="row mt-5 animate__animated animate__slideInDown">
                  <div className="col-md-3 mb-3">
                     <Card color="lightYellow" title="Positif 😷" content={new Intl.NumberFormat().format(data.positif) + ' Orang'} />
                  </div>

                  <div className="col-md-3 mb-3">
                     <Card color="lightBlue" title="Dirawat 🤒" content={new Intl.NumberFormat().format(data.dirawat) + ' Orang'} />
                  </div>

                  <div className="col-md-3 mb-3">
                     <Card color="lightGreen" title="Sembuh 😊" content={new Intl.NumberFormat().format(data.sembuh) + ' Orang'} />
                  </div>

                  <div className="col-md-3 mb-3">
                     <Card color="lightPink" title="Meninggal 💀" content={new Intl.NumberFormat().format(data.meninggal) + ' Orang'} />
                  </div>
               </div>

               <br />
               <h4 className="text-center">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h4>
               <br />
               
               <div className="card-cus p-3 mb-5 animate__animated animate__bounceInUp">
                  <div className="table-responsive">
                     <table className="table table-bordered">
                        <thead>
                           <tr>
                              <th scope="col">No</th>
                              <th scope="col">Provinsi</th>
                              <th scope="col">Positif</th>
                              <th scope="col">Sembuh</th>
                              <th scope="col">Meninggal</th>
                           </tr>
                        </thead>
                           <tbody>
                              {
                                 provinsi.map((prov, index) => {
                                    return(
                                       <tr key={index}>
                                          <th scope="row">{index}</th>
                                          <td>{prov.Provinsi}</td>
                                          <td>{new Intl.NumberFormat().format(prov.Kasus_Posi)}</td>
                                          <td>{new Intl.NumberFormat().format(prov.Kasus_Semb)}</td>
                                          <td>{new Intl.NumberFormat().format(prov.Kasus_Meni)}</td>
                                       </tr>
                                    )
                                 })
                              }
                           </tbody>
                     </table>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}
