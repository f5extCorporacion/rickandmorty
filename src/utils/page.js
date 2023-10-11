//cuando  pasamos datos a una funcion se llama parametros
//Todo: currentPage = la pagina actual
//! residents = Arreglo total de residentes en la dimension actual.

const paginationLogic = (currentPage , residents) =>{
    //se crea esta excecion para que muestre resultados  sin importar
    //si el arreglo retorna 0
    if (residents.length === 0){
      return{
          pages:[1],
          residentsInPage:[]
      }
  }
  

    //?Lo primero a definir es la cantidad de residentes
 const RESIDENTS_PER_PAGE = 20;

//todo: cantidad total de paginas
const totalPage = Math.ceil(residents.length / RESIDENTS_PER_PAGE);
//Todo: Residentes que se van a mostrar en la pagina actual.

const sliceEnd = RESIDENTS_PER_PAGE * currentPage;   
const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;

const residentsInPage = residents.slice(sliceStart , sliceEnd);
//todo: generacion de arreglo que se van a mostrar
    const pages =[]
    for(let i = 1; i <= totalPage ; i++){
      pages.push(i);
    }
 
  return{residentsInPage, pages }
}



export{ paginationLogic }
