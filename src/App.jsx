import { useEffect, useState } from 'react';
import './index.css'
import portal from'./assets/portal.png';
import logo from'./assets/logo.png';
import axios from 'axios';
import { random } from './utils/random';
import Location from'./Location.jsx';
import ResidentList from'./components/ResidentList';

function App() {

/*Creamos un estado para almacenar los datos */
 const [location, setLocation] = useState(null)

  /*useefect(se ejecuta apenas se  se ejecuta la app) */
  useEffect( ()=>{
  /*creamos llamada a la aip */
    axios.get(`https://rickandmortyapi.com/api/location/${random(126)} `)
    .then(({data})=> setLocation(data))//sacamos los datos
    .catch(({err})=>console.log(err))
    /*fin llamada de la peticion*/
  },[])

  return (
     <main className='min-h-screen'> 
      {/*todo:Enviamos los datos por props */}
     <Location location={location} setRlocation={setLocation}/>
     {/*Encadenamiento que si retorna null retorna el arreglo*/}
     <ResidentList residents={location?.residents ?? []} />
 
     </main>
  )
}

export default App
