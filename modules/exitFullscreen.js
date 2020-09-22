function exitFullscreen(){
    return document.exitFullscreen()
        .catch(()=>{
            console.log('Não foi possível entrar em tela cheia')
        })
}

export default exitFullscreen