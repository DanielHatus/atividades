function checar_velocidade(){
    const limite=30;
    let velocidade_do_usuario=document.getElementById('input').value;
    velocidade_do_usuario=Number(velocidade_do_usuario);
    const excesso_vel=velocidade_do_usuario-limite;
    const diferença_velocidade=limite-velocidade_do_usuario
    const exibir=document.getElementById('msg');
    const img=document.getElementById('imagem');
    if(velocidade_do_usuario>limite){
        exibir.style.color='red';
        exibir.innerHTML=`A <strong>sua Velocidade é de ${velocidade_do_usuario} Km/h</strong> e ultrapassou o limite que é ${limite} Km/h!<strong> você ultrapassou o limite em ${excesso_vel} Km/h.</strong>`
        img.style.display="block"
        img.src="imagens/acidente.jpg"

    }
    else if(velocidade_do_usuario===limite){
        exibir.style.color='orangered'
        exibir.innerHTML="Cuidado! você está no limite de velocidade!"
        img.style.display='block';
        img.style.height='270px';
        img.src="imagens/mao-limite.png";
    }
    else{
    exibir.style.color='green'
    img.style.display='block';
    img.src='imagens/cinto-segurança.jpg'
   exibir.innerHTML=`<strong>Meus parabéns! você está ${diferença_velocidade} Km/h abaixo do limite que é ${limite} Km/h! </strong> ande com calma<strong> e não esqueça o cinto de segurança!</strong>`
    }
}

