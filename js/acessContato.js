$(acessContato);

function acessContato(){
    $("#contraste").click(function(){

        if($("*").css("background-color") == "rgb(0, 0, 0)"){
            $("*").css("background-color", "");
            $("*").css("color", "");
            $("#mais, #menos, #contraste").css("color", "white");
            $('#topo').attr("src", "imgs/seta.png");
        }
        else{
            $("*").css("background-color", "black");
            $("*").css("color", "white");
            $("a").css("color", "yellow");
            $('#topo').attr("src", "imgs/seta_top.png");
        }
        
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