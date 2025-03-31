let activated = false;
let activatedDva = false;

document.getElementById("oznameni").addEventListener("click", function oznameni(){
    alert("Tlacitko zmacknuto");
});

document.getElementById("barva").addEventListener("click", function zmenitBarvu(){
    
    activated = !activated;
    if(activated)
    {
        document.getElementById("barevnyDiv").style.backgroundColor = "black";
        document.getElementById("barevnyDiv").style.height = "50px";
        document.getElementById("barevnyDiv").style.width = "50px";
    }
    else
    {
        document.getElementById("barevnyDiv").style.backgroundColor = "aquamarine";
        document.getElementById("barevnyDiv").style.height = "100px";
        document.getElementById("barevnyDiv").style.width = "100px";
    }
});

document.getElementById("nadpis").addEventListener("click", function oznameni(){
    
    activatedDva = !activatedDva;
    if(activatedDva)
    {
        document.getElementById("nadpisText").style.color = "lightblue";
    document.getElementById("nadpisText").innerText = "-real Motlík";
    }
    else
    {
        document.getElementById("nadpisText").style.color = "black";
    document.getElementById("nadpisText").innerText = "NEMÁM RÁD HTML, CSS A JAVASCRIPT";
    }
});