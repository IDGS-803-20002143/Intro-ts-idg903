function suma():void{
    console.log(3+6)
}

 function suma2(a:number,b:number):number {
    return a+b
 }
 const suma3=(a:number,b:number):string=>{
 return `${a+b}$`}
 
 function multiplicar(n1:number,otronumero:number,nuevonumero=3):number{
    let tem=n1*nuevonumero
    return tem
 }
 interface Mascota{
   nombre:string;
   edad:number;
   mostrarEdad:()=>void;
}
function calcular(mascota:Mascota,x:number):void{
   mascota.edad+=x;
   console.log(mascota)
}
const nuevaMascota:Mascota={
   nombre:'nala',
   edad:3,
   mostrarEdad(){
      console.log('la edad es ',this.edad);
   }

}
  console.log(suma2(5,4))
   //funciones anonimas 
   const funcSumar=function(valor1:number,valor2:number):number{
      return valor1+valor2;

   }
   console.log(funcSumar(4,5));
   //// funcion con parametros opcionales 
   function calcular1(n1:number,n2:number,n3:number):number{
      if(n3)
      return n1+n2+n3;
      else
      return n1+n2;
      }

   //  parametros rest en funciones 
   function calcular2(... valores:number[]){
      let suma=0}
        for(let x=0; x<valores.length; x++)
         suma+=valores[x];
      return suma;
   }
}
   console.log(calcular2(10,2,3,4))
   console.log(calcular)