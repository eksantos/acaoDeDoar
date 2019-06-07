$(acess);

function acess(){
    $("#contraste").click(function(){
       // $("*").css("background-color", "black");
        if($("*").css("background-color") == "rgb(0, 0, 0)"){
            $("*").removeClass("contr");
            $("a, .opc").css("color", "white"); 
            $("a#top").css("background-color", "orange"); 
            $("a#botQuero").removeClass("mudaCorBot");
            $("a#botQuero").css("background-color", "#db4a63");

            
            /*Botões*/
            $('#brinquedo').attr("src", "imgs/brinquedo.png");
            $('#roupa').attr("src", "imgs/cabide.png");
            $('#limpeza').attr("src", "imgs/limpeza.png");
            $('#alimento').attr("src", "imgs/basket.png");
            $('#livro').attr("src", "imgs/livro.png");
            $('#prodHigiene').attr("src", "imgs/haste.png");
            $('#movel').attr("src", "imgs/moveis.png");
            $('#eletro').attr("src", "imgs/eletro.png");
            $('.objetos').removeClass("mudaCorFundo");
            $('#topo').attr("src", "imgs/seta.png");

            $('.roxo').css("background-color", "#340244");
            $('.rosa').css("background-color", "#db4a63");
        }
        else{
            $("*").addClass("contr");
            $("a, .opc").css("color", "yellow"); 
            $("a#top, a#botQuero").css("background-color", "black"); 
            $("a#botQuero").addClass("mudaCorBot");
            $("div#barraAcessibilidade ul li a:hover").css("color", "black")
            
            /*Botões*/
            $('#brinquedo').attr("src", "imgs/brinquedo_preto.png");
            $('#roupa').attr("src", "imgs/cabide_preto.png");
            $('#limpeza').attr("src", "imgs/limpeza_preto.png");
            $('#alimento').attr("src", "imgs/alimentos_preto.png");
            $('#livro').attr("src", "imgs/livro_preto.png");
            $('#prodHigiene').attr("src", "imgs/planot_preto.png");
            $('#movel').attr("src", "imgs/moveis_preto.png");
            $('#eletro').attr("src", "imgs/eletro_preto.png");
            $('#topo').attr("src", "imgs/seta_top.png");
            
            $('.roxo').css("background-color", "white");
            $('.rosa').css("background-color", "white");

        }
       $("img").removeClass("contr");
        
    })
    
    $("#mais").click(function(){
        var fonteAtual = $("*").css("font-size");
        $("*").css("font-size", (parseInt(fonteAtual) + 1) + "px");
    })
    
    $("#menos").click(function(){
        var fonteAtual = $("*").css("font-size");
        $("*").css("font-size", (parseInt(fonteAtual) - 1) + "px");
    })
}