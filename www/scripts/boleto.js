function verificaLinhaDigitavel(){
    var aux ;
    var dig1,dig2,dig3 ;
    var numb,part,dv;
    var erro = 0 ;
    //Verifica digito verificador do 1 bloco
    aux = $('#b1').val() + $('#b2').val(); 
    aux = aux.substr(0,9);
    dig1= digitoVerificadorBloco(aux);
    $("#exiberesultado").html(aux);
    if($('#b2').val().substr(4,1) == dig1){
        bloco = $("#exiberesultado").html()+"<font style=\"background:green;color:black;\">"+dig1+'</font>';
    }
    else{
        erro = 1 ;
        bloco = $("#exiberesultado").html()+"<font style=\"background:red;color:black;\">"+dig1+'</font>'
    }
    $("#exiberesultado").html(bloco.substr(0,5)+'.'+bloco.substr(5,1000));

    //Verifica digito verificador do 2 bloco
    aux = $('#b3').val() + $('#b4').val(); 
    aux = aux.substr(0,10);
    dig2= digitoVerificadorBloco(aux);
    if($('#b4').val().substr(5,1) == dig2){
        bloco = aux+"<font style=\"background:green;color:black;\">"+dig2+'</font>';
    }
    else{
        erro = 1 ;
        bloco = aux+"<font style=\"background:red;color:black;\">"+dig2+'</font>';
    }
    $("#exiberesultado").html($("#exiberesultado").html()+' '+bloco.substr(0,5)+'.'+bloco.substr(5,1000));

    //Verifica digiro verificador do 3 bloco
    aux = $('#b5').val() + $('#b6').val(); 
    aux = aux.substr(0,10);
    dig3= digitoVerificadorBloco(aux);
    
    if($('#b6').val().substr(5,1) == dig3){
        bloco = aux+"<font style=\"background:green;color:black;\">"+dig3+'</font>';   
    }
    else{
        erro = 1 ;
        bloco = aux+"<font style=\"background:red;color:black;\">"+dig3+'</font>';
    }
    $("#exiberesultado").html($("#exiberesultado").html()+' '+bloco.substr(0,5)+'.'+bloco.substr(5,1000));

    //Calcula digito verificador geral
    numb = $('#b1').val()+$('#b2').val()+$('#b3').val()+$('#b4').val()+$('#b5').val()+$('#b6').val()+$('#b8').val();
    part = numb.substr(0,4) + $('#b8').val() + numb.substr(4,5) + numb.substr(10,10) + numb.substr(21,10);
    dv = mod11(part);

    $("#exiberesultado").html($("#exiberesultado").html()+" "+dv+' '+$('#b8').val());
   
    //Verificando se foi detectado algum erro no codigo de barras
    if( erro == 1){
        alert('Foram detectados erros no codigo de barras. Os erros estão marcados de vermelho. Corrija e tente novamente. ')
    } 
    else{
        vencimento = $('#b8').val().substr(0,4);
        
        
        $('#exibeVencimento').html("Vencimento: "+fatorVencimento(vencimento,'fator'));
        $('#exibeValor').html("Valor do Boleto: "+String(parseInt($('#b8').val().substr(4,8)))+','+$('#b8').val().substr(12,2));
        
    }
}

function fatorVencimento(dado,tipo){
    if(tipo == 'fator'){
        var dias = parseInt(dado);

        Date.prototype.adicionarDias = function(dias) {
            var data = new Date(this.valueOf());
            data.setDate(data.getDate() + dias);
            return data;
        };

        // Meses são indexados em zero em JavaScript, logo é necessário subtrair 1 do mês desejado.
        var dataInicialFebraban = new Date(1997, 10 - 1, 7);
        dataInicialFebraban =  dataInicialFebraban.adicionarDias(dias);
        vencimento = (("0" + (dataInicialFebraban.getDate())).slice(-2) + '/' + ("0" + (dataInicialFebraban.getMonth() + 1)).slice(-2) + '/' + dataInicialFebraban.getFullYear());
        return vencimento;
    }
    else{

    }
}
function mod11(num) {  
    var base = 9;         
    var fator = 2;        
    var parcial = 0;  
    var soma = 0;

    for (i=num.length;i>0;i--) {             
        nn = num.substr(i-1,1);
        parcial = nn*fator;
        soma += parcial; 
        if (fator==base) fator=2;
        else fator++;
    }         

    resto = soma % 11;
    dv = 11 - resto;
    if (dv==0||dv==10||dv==11) dv = 1;
    return dv;
}  

function digitoVerificadorBloco(linhadigitavel){
    var digitov ;
    var soma = 0.0;
    var aux ;
    var log = '';
    var controle = 0 ; //usado para saber quando será 2 ou 1 o fator de multiplicacao

    for( i = (linhadigitavel.length - 1) ; i >= 0 ; i-- ){
        log+=i+"caractere"+linhadigitavel[i];
        if(controle%2 == 0){
            aux = parseInt(linhadigitavel[i])*2;
            if(aux > 9) aux-=9;
            log+="soma"+aux+"\n";
        }
        else{
            aux = parseInt(linhadigitavel[i])*1;
            log+="soma"+aux+"\n";

        }
        soma+=aux;
        log+="resultado"+soma+"\n";
        controle++;
    }
    
    aux = soma%10;
    if(aux == 0)
        return 0 ;
    
    aux=10-aux;

    return aux ;
}

    ons.ready(function() {

            $('#b1').keyup(function(event){
                if($(this).val().length >= 5){
                    $(this).val($(this).val().substr(0,5));
                    $('#b2').focus();
                }
            });

            $('#b2').keyup(function(event){
                if($(this).val().length >= 5){
                    $(this).val($(this).val().substr(0,5));
                    $('#b3').focus();
                }
            });

            $('#b3').keyup(function(event){
                if($(this).val().length >= 5){
                    $(this).val($(this).val().substr(0,5));
                    $('#b4').focus();
                }
            });

            $('#b4').keyup(function(event){
                if($(this).val().length >= 6){
                    $(this).val($(this).val().substr(0,6));
                    $('#b5').focus();
                }
            });

            $('#b5').keyup(function(event){
                if($(this).val().length >= 5){
                    $(this).val($(this).val().substr(0,5));
                    $('#b6').focus();
                }
            });

            $('#b6').keyup(function(event){
                if($(this).val().length >= 6){
                    $(this).val($(this).val().substr(0,6));
                    $('#b7').focus();
                }
            });

            $('#b7').keyup(function(event){
                if($(this).val().length >= 1){
                    $(this).val($(this).val().substr(0,1));
                    $('#b8').focus();
                }
            });

            $('#b8').keyup(function(event){
                if($(this).val().length >= 14){
                    $(this).val($(this).val().substr(0,14));

                }
            });
    }); 