function ConsultaAPI(){
    const animeAPI = 
    let objetoAnimes = [];
    $.ajax({
        url: animeAPI,
        async: false,
        success:function(dados){
            objetoAnimes = dados.anime;
        }
});

retur objetoAnimes;
}


function MontarCartao(foto , nome , pontos, url){
    let cartao = "";
cartao += "<div class>"
cartao += ""
cartao += ""
cartao += ""
cartao += ""

}