import { useEffect, useState } from "react"
import axios from 'axios';
import './../index.css';
import { characterStatus } from "../constantes/residents";

const ResidentCard = ({resiEnpoint}) => {
    
const [resident, setResident]= useState(null);

    /*Cada direccion esta emitiendo una url,
    y debemos traer esa informacion */
/**Se consulta cada url con el useEfect */

    useEffect( ()=>{
     axios.get(resiEnpoint)
     .then(({data})=>setResident(data))
     .catch( (err)=>{console.log(err)})
    },[])


  return (
     <article>
        <header className="relative border border-green-300 bg-black opacity-100">
            <img src={resident?.image} alt="" />
            {/**Detalles de card */}
                  <div className=" flex  absolute left-[100px] bottom-[50%] p-[5rem] bg-black/50 text-white px-5 py-2 rounded-md">
                    {/**Textos van en span */}
                      <div className={` h-3 w-3  ${characterStatus[resident?.status]} rounded-full`}></div>
                      <span className="">{resident?.status}</span>
                </div>

             <div className="p-3">
               <h2 className="text-2xl">{resident?.name} </h2>
               <ul >
                <li className="gap-2"><span>Specie :</span>   {resident?.especies} </li>
                <li span className="gap-2"><span>Origin :</span>   {resident?.origin.name} </li>
                <li> <span>Times appear :</span>  {resident?.episode.length} </li>
               </ul>
             </div>
        </header>
     </article>
  )
}
export default ResidentCard