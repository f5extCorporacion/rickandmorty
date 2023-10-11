import ResidentCard from "./ResidentCard"
import '../index.css'
import axios from 'axios';
import { useEffect, useState } from "react";
import { paginationLogic } from "../utils/page";

const ResidentList = ({residents}) => {

  //Todo: Nuestro estado de paginacion
  const [currentPage , setcurrentPage] = useState(1);
  //Todo:fin
  //!Ejecutamos paginationlogin
  const { pages ,residentsInPage } = paginationLogic(currentPage ,residents);
  

  /*useEfect */
  useEffect( ()=>{
    setcurrentPage(1)
  },[residents])
  return (

      <section className="residentListm">
      <section className="grid grid-cols-[repeat(auto-fit,_300px)] gap-6 justify-center max-w-[1000px] mx-auto ">
  {/* debemos leer en entpoin */}
      {
        /** Muestra cuenta cantidad de Residentes o posiciones
         * recorre el map
         */
        residentsInPage.map((resident)=><ResidentCard key={resident} resiEnpoint={resident} />)
      }
      </section>


      {/*Pagination de elementos */}

        <ul className=" flex justify-center items-center gap-6 p-5 text-lg flex-wrap">
            {
              pages.map( (page)=>(
                <li key={page}  >
                  <button  onClick={()=>setcurrentPage(page)} className={`p-4  ${page === currentPage && "bg-green-500" }`}> {page} </button>
                </li>
              ))
            }
        </ul>
        
    </section>
  )
}
export default ResidentList