document.addEventListener("DOMContentLoaded", function(){

    function montarPizza(){

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : "";
         
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "";

        if(tamanho === "Brotinho"){
            if(sabor === "Margherita"){
                custo += 18.75;
            }else if(sabor === "Calabresa"){
                custo += 21.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 22.50;
            }else if(sabor === "Portuguesa"){
                custo += 24.00;
            }else if(sabor === "Sensacao"){
                custo += 26.25;
            }
        }else if(tamanho === "Media"){
            if(sabor === "Margherita"){
                custo += 25.00;
            }else if(sabor === "Calabresa"){
                custo += 28.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 30.00;
            }else if(sabor === "Portuguesa"){
                custo += 32.00;
            }else if(sabor === "Sensacao"){
                custo += 35.00;
            }
        }else if(tamanho === "Grande"){
            if(sabor === "Margherita"){
                custo += 31.25;
            }else if(sabor === "Calabresa"){
                custo += 35.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 37.50;
            }else if(sabor === "Portuguesa"){
                custo += 40.00;
            }else if(sabor === "Sensacao"){
                custo += 43.75;
            }
        }

        let bordaSelecionada = document.querySelector('input[name="borda"]:checked')
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Tamanho não selecionado';

        
        if(borda === "Tradicional"){
            custo += 0.00;
        }else if(borda === "Recheada com Catupiry"){
            custo += 2.00;
        }else if(borda === "Recheada com Cheddar"){
            custo += 3.00;
        }else if(borda === "Recheada com Chocolate"){
        custo += 3.00;
        }
    
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if(queijoExtraCheckbox){
            custo += 2.00;
            extra += "<br>   - Queijo"
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if(cheddarExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Cheddar"
        }
        
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
        if(baconExtraCheckbox){
            custo += 3.00;
            extra += "<br>   - Bacon"
        }
        
        let morangoExtraCheckbox = document.querySelector('input[name="extra-morango"]:checked')
        if(morangoExtraCheckbox){
            custo += 4.00;
            extra += "<br>   -  Morango"
        }
        
        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
        if(oreganoOpcionalCheckbox){
            opcionais += "<br>   - Oregano"
        }
       
        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
        if(azeitonaOpcionalCheckbox){
            opcionais += "<br>   - Azeitona"
        }
        
        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
        if(azeiteOpcionalCheckbox){
            opcionais += "<br>   - Azeite"
        }
        
        let granuladoOpcionalCheckbox = document.querySelector('input[name="opcionais-granulado"]:checked')
        if(granuladoOpcionalCheckbox){
            opcionais += "<br>   - Granulado"
        }

        descricao += "   - " + sabor + "<br>   - " + tamanho + "<br>   - " + borda + extra + opcionais;

        const pedidoJSON = {
            "descricao": descricao,
            "total":custo.toFixed(2)
        }

        const pedidoString = JSON.stringify(pedidoJSON);

        window.location.href = `pedido?pedido=${pedidoString}`;
    }

    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});
