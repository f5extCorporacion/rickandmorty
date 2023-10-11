import './index.css';
import {IconSearch} from'@tabler/icons-react';
import axios  from 'axios';
import logo from'./assets/logo.png';
import portal from'./assets/portal.png';

const Location = ({location , setRlocation}) => {
 
  const handledSibmir =(e)=>{
    e.preventDefault();//no permite que se actualize
    const point = e.target.nameLocal.value;
    //consultamos axios

      axios
      .get(`https://rickandmortyapi.com/api/location/${point}`)
      .then(({data}) => setRlocation(data))
      .cath((err) => console.log(err))
  }
  return (
    <section className='header'>
              <div className=" flex relative items-center  justify-center ">
                <img src={portal} alt=""  className=" "/>
                <img src={logo} alt="" className="flex animate-bounce  absolute top-19 w-60 justify-center items-center lg:w-96 lg:bottom-50"/>
              </div>

        <form className='flex bg-transparent border-solid  border border-green-300 ' onSubmit={handledSibmir}>

            <input type='number'
             placeholder='only numbers'
              name='nameLocal' className='
               text-white  border-solid bg-black opacity-50 px-2' />
            <button type='submit' className='flex gap-2 bg-green-500 p-2' >Search<IconSearch/> </button>
        </form><br /><br />

          <section className='flex flex-col gap-10 justify-center justify-center border border-green-300  p-4 mobil'>
              <h3 className='flex justify-center justify-center color-green-500 text-green-500 '> !Wellcome to {location?.name} ¡</h3>
              <ul className='flex gap-20 text-gray-400 p-30 '>
                <li>Type: {location?.type}</li>
                <li> {location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
              </ul>
          </section><br />
   </section>
  )
}
export default Location
