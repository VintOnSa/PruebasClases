let user = "user@mail";
let pass = "1234";

function mostrarDatos(){
    let usuario = document.getElementById("inptemail").value;
    let password = document.getElementById("inptpassw").value;

    if(usuario == user && password == pass){
        alert("Bienvenido");
        paginaLog();
    
    }else if(usuario == "" || password == ""){
        alert("Porfavor ingrese los datos solicitados")
    }else{
        alert("Usuario no Encontrado");
    }

    
}


function llamarFuncion(){
    mostrarDatos();
}


function paginaLog(){
    window.location.replace("loggedver/idxadmver.html");
    console.log("Error");
}


function region(){

    fetch('https://coso.kgames.cl/Duoc/location/region')
    .then(response => response.json())
    .then(data1 =>{
        console.log(data1);

        const select = document.getElementById("selectop");
        
        for (const j of data1.data) {
            const option = document.createElement("option");
            option.value = j.idregion;
            option.textContent = j.nombreregion;
            select.appendChild(option);
        }

    })
}

function cambioReg(){
    let result = document.getElementById("selectop").value;
    console.log("El valor es: ", result);

}