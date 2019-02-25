var validernom=false;
var validerprenom=false;
var validerage=false;
var validerpseudo=false;
var validerpasswd1=false;
var validerpasswd2=false;

function Reset()
{
    var champDocument=document.getElementsByClassName("checkable");

    for(var i=0; i<champDocument.length;i++)
    {
        champDocument[i].value="";
    }
    
    document.getElementById("radiob1").checked=false;
    document.getElementById("radiob2").checked=false;
    document.getElementById("spam").checked=false;


}

function checkSubmit()
{
    var champDocument=document.getElementsByClassName("checkable");
    var ok=true;
    for(var i=0; i<champDocument.length;i++)
    {
        if(champDocument[i].value=="")
        {
            ok=false;
        }
    }
    if(document.getElementById("radiob1").checked==false && document.getElementById("radiob2").checked==false)
    {
        ok=false;
    }

    if(ok==true && validerage && validernom && validerpasswd1 && validerpasswd2 && validerprenom && validerpseudo){
        alert("Formulaire envoyé");
    }
        
    else{
        alert("Il y a une erreur dans le formulaire. Veuillez la corriger avant de continuer.");
    }
       

}

document.addEventListener("DOMContentLoaded",function(event){

        var champ1=document.getElementById("nom");
        var champ2=document.getElementById("prenom");
        var champ3=document.getElementById("pass1");
        var champ4=document.getElementById("pass2");
        var champ5=document.getElementById("age");
        var champ6= document.getElementById("pseudo");
        var tool=document.getElementsByClassName("tooltiptext");
        
        champ1.addEventListener("input", function(){
            if(document.getElementById("nom").value.length>2){
                
                var monRegEx = /^[a-zA-ZçéèêëÇÉÈÊË\s]{2,60}$/i;
                if(champ1.value.match(monRegEx)){
                    champ1.style.borderColor="green";
                    validernom=true;
                }
                else{
                    champ1.style.borderColor="red";
                    validernom=false;
                }

            }  
            else{
                champ1.style.borderColor="red";
                validernom=false;
            }
                
        });

        champ2.addEventListener("input", function(){                
                var monRegEx = /^[a-zA-ZçéèêëÇÉÈÊË\s]{2,60}$/i;
                if(champ2.value.match(monRegEx)){
                    champ2.style.borderColor="green";
                    validerprenom=true;
                }
                else{
                    champ2.style.borderColor="red";
                    validerprenom=false;
                }

            
        });

        champ5.addEventListener("input",function(){
            if(champ5.value.length>0 && champ5.value.length<4){
                
                if(champ5.value>4 && champ5.value<141){
                    champ5.style.borderColor="green";
                    tool[0].style.visibility="hidden";
                    validerage=true;

                }
                else{
                    champ5.style.borderColor="red";
                    tool[0].style.visibility="visible";
                    tool[0].style.opacity=1;
                    validerage=false;
                }

            }else{
                champ5.style.borderColor="red";
                tool[0].style.visibility="visible";
                tool[0].style.opacity=1;
                validerage=false;
            }
        });

        champ6.addEventListener("input",function(){
            if(champ6.value.length>4 && champ6.value.length<16){
                champ6.style.borderColor="green";
                tool[1].style.visibility="hidden";
                validerpseudo=true;
            }
            else{
                champ6.style.borderColor="red";
                tool[1].style.visibility="visible";
                tool[1].style.opacity=1;
                validerpseudo=false;
            }
        });

        champ3.addEventListener("input", function(){
            if(champ3.value.length>7){
                var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                if(champ3.value.match(reg)){
                    champ3.style.borderColor="green";
                    tool[2].style.visibility="hidden";
                    validerpasswd1=true;
                }
                else{
                    champ3.style.borderColor="red";
                    tool[2].style.visibility="visible";
                    tool[2].style.opacity=1;
                    validerpasswd1=false;
                }
            }
            else{
                champ3.style.borderColor="red";
                tool[2].style.visibility="visible";
                tool[2].style.opacity=1;
                validerpasswd1=false;
            }
                
        });


        champ4.addEventListener("input", function(){
            if(champ4.value.length>3 && champ4.value==champ3.value)
            {
                champ4.style.borderColor="green";
                tool[3].style.visibility="hidden";
                validerpasswd2=true;
            }
            else{
                champ4.style.borderColor="red";
                tool[3].style.visibility="visible";
                tool[3].style.opacity=1;
                validerpasswd2=false;
            }
                
        } )

})
