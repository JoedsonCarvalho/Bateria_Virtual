


function playSong(selectorAudio) {
    const element = document.querySelector(`${selectorAudio}`)

    if (element && element.localName === 'audio'){
        element.play()
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido.')
    }

}

const listKeys = document.querySelectorAll('.tecla');

listKeys.forEach((item, index) =>{    
    let classElement = item.classList[1]
    item.onclick = function() {
        playSong(`#som_${classElement}` )
    }

    item.onkeydown = function(event){

        if ('Space' === event.code || 'Enter' === event.code){
            item.classList.add('ativa');
        }

    }

    item.onkeyup = function(){
        item.classList.remove('ativa');

    } 

})

