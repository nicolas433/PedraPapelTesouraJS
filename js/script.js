const jogadas = ['pedra', 'papel', 'tesoura'];
const jogadasW = ['papel', 'tesoura', 'pedra'];
const jogadasL = ['tesoura', 'pedra', 'papel'];
while(true){

    const jogadaDaMaquina = parseInt(Math.random()*3);
    const jogadaDoJogador = prompt("Faca sua jogada('pedra', 'papel', 'tesoura').").toLowerCase();

    if (jogadas.indexOf(jogadaDoJogador)==jogadaDaMaquina) {
        console.log("Empate");
    }else{
        const segundaJogadaDaMaquina = parseInt(Math.random()*2);
        if(segundaJogadaDaMaquina==1){
            console.log(`Você perdeu, a maquina jogou ${jogadasW[jogadas.indexOf(jogadaDoJogador)]}`);
        }else{
            console.log(`Você ganhou, a maquina jogou ${jogadasL[jogadas.indexOf(jogadaDoJogador)]}`);
        }
    }
    


    /*
    if (jogadas.indexOf(jogadaDoJogador)==jogadaDaMaquina) {
        console.log("Empate");
    }else{
        if(jogadas.indexOf(jogadaDoJogador)==0){
            if(jogadaDaMaquina==1){
                console.log("Maquina vence, ela jogou papel");
            }else{
                console.log("Maquina perde, ela jogou tesoura");
            }
        };

        if(jogadas.indexOf(jogadaDoJogador)==1){
            if(jogadaDaMaquina==0){
                console.log("Maquina vence, ela jogou tesoura");
            }else{
                console.log("Maquina perde, ela jogou pedra");
            }
        }

        if(jogadas.indexOf(jogadaDoJogador)==2){
            if(jogadaDaMaquina==0){
                console.log("Maquina vence, ela jogou pedra");
            }else{
                console.log("Maquina perde, ela jogou papel");
            }
        }
    }
    */
}
