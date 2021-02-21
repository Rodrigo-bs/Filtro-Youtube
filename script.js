function init(){
    const videoCon = Array.from(document.querySelectorAll('ytd-grid-video-renderer')) //Pega o conteiner video

    function infosVideos(){
        const ob = videoCon.map(video => {
            const titulo = video.querySelector('#video-title')
            const infosGerais = titulo.getAttribute('aria-label').split(' ') //infos gerais 

            const tituloConteudo = titulo.getAttribute('title') //Pega o titulo do video
            const visualizacoes = +infosGerais[infosGerais.length - 2]
            const data = video.querySelector('#metadata-line span + span').innerText

            return{
                tituloConteudo,
                visualizacoes,
                data,
                infosGerais
            } 
        })

        return ob
    }

    function filtrar(){
        const videosStatos = infosVideos()
        const videoMaisVisto = videosStatos.reduce((anterior, videoAtual) => {
            return anterior.visualizacoes > videoAtual.visualizacoes ? anterior : videoAtual //Retorna o video mais visto
        }, 0)18

        const lista = videosStatos.sort(function (a, b){ //retorna uma lista dos mais visto para os menos vistos
            if (a.visualizacoes > b.visualizacoes) return -1
            if (a.visualizacoes < b.visualizacoes) return 1
            return 0
        })
            
        console.log(`Lista dos videos organizados do que contêm mais visualizações para o que tem menos:`) 
        console.log(lista)

        console.log(`Video mais visto entre os [${videosStatos.length}] videos listados:`) 
        console.log(videoMaisVisto)

        console.log(`Lista dos videos [${videosStatos.length}]:`) 
        console.log(videosStatos)
    }

    filtrar()
}
init()