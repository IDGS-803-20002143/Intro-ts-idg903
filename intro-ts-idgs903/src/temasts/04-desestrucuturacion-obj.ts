// desestrucutrcion de objetos y arreglos 

interface Alumno1{
    matricula:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}
interface Grupo{
    grupo:string;
    year:number;
}


const alumno2:Alumno1={
    matricula:12345,
    nombre:'jazmin',
    edad:23,
    correo:'rios.gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023
    }
}
//poner comilla
console.log(`la matricula es : ${alumno2.matricula1}`)
console.log(`el nombre es: ${alumno2.nombre}`)
console.log(`el año del grupo es : ${alumno2.grupo.year}`)

const{matricula1,nombre:nom:,grupo:xx}=alumno2
const{grupo,year:anio}=xx

console.log(`la matricula es : ${matricula1}`)
console.log(`la nombre es : ${nom}`)
console.log(`la matricula es : ${grupo}`)
console.log(`el año del grupo es : ${anio}`)
// desestructruacion de arreglos
const gps:string[]=['IDGS','IEVI','REDES'];

console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)

const[a,,b]=gps;

console.log(`grupo 1: ${a}`)

