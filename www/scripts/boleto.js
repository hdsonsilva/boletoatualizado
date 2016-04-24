function digitorVerificadorLinhaDigitavel(){

    var fatores = new Array(4, 3, 2, 9, 0, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
    var soma = 0 ;
    var i ;

    for (i = 0; i < fatores.length; i++) { 

    }
    alert(i+"OK");
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