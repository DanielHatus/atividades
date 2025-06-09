function algoritmo(){
    const palavra_inserida=document.getElementById('palavra_inserida').value;
    const msg1=document.getElementById('msg1');
    const msg2=document.getElementById('msg2');
    const msg3=document.getElementById('msg3');
    const palavra_contraria=palindromo(palavra_inserida);
    if(palavra_inserida===palavra_contraria){
        msg1.innerHTML=`🖊️ A palavra escolhida foi ${palavra_inserida}. 🖊️`
        msg2.innerHTML=`↩️ A palavra escolhida ao contrário é ${palavra_contraria}. ↩️`
        msg3.innerHTML=`✅ A palavra é um Palíndromo ✅`
    }
    else{
        msg1.innerHTML=`🖊️ A palavra escolhida foi ${palavra_inserida}. 🖊️`
        msg2.innerHTML=`↩️ A palavra escolhida ao contrário é ${palavra_contraria}. ↩️`
        msg3.innerHTML=`❌A palavra não é um palíndromo❌`
    }    


}
function palindromo(palavra){
    const vetor=[];
    const p_separada=palavra.split('')
    for(let i=p_separada.length-1;i>=0;i--){
         vetor.push(p_separada[i]);
    }
    const juntar_palavra=vetor.join('');
    return juntar_palavra;
    }
  