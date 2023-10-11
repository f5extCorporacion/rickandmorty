const random = (limit) => {

    /* Funcion para generar randon  aleatorio 1 -> 126*/
    //0 a 0.0999999 nuca llega a 1
    return Math.ceil(Math.random() * limit) + 1;
  
}
export{
    random,
}