export function soma(...numeros){
    let res=0
    for(let i=0;i<numeros.length;i++){
     res=res+numeros[i];
    }
    console.log(res)
}
export const divisao=(num1,num2)=>{return console.log(num1/num2)}
export function  multiplicacao(...numeros){
    let resultado=1;
    if(numeros.length==1){
        return console.log(numeros[0]);
    }
    else{
        for(let i=0;i<numeros.length;i++){
        resultado=resultado*numeros[i]
        }
        return console.log(resultado)
    }
}

multiplicacao(15,2)

