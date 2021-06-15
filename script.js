function mayorDeTres(){
    
    var usuarios = [];
    var edades = [];
    
    for(var i=0;i<3;i++){ //Registro de datos de 3 usuarios
        usuarios[i]= prompt('Ingrese el nombre del '+(i+1)+'º usuario ');
        edades[i]= parseInt(prompt('Ingrese la edad de '+usuarios[i]));    
    }

    if(edades[0]>edades[1] && edades[0]>edades[2]){ //busca mayor de 3
        //alert(' ')     
        alert('El usuario: '+ usuarios[0] + " es el mayor");
        let mensaje= document.getElementById('mensaje')
        mensaje.textContent='El usuario: '+ usuarios[0] + ' es el mayor, con ' +edades[0] + ' años';

    } else if (edades[1]>edades[0] && edades[1]>edades[2]){

        alert('El usuario: '+ usuarios[1] + " es el mayor");
        let mensaje= document.getElementById('mensaje')
        mensaje.textContent='El usuario: '+ usuarios[1] + ' es el mayor, con ' +edades[1] + ' años';

    } else if (edades[2]>edades[0] && edades[2]>edades[1]){
        
        alert('El usuario: '+ usuarios[2] + " es el mayor");        
        let mensaje= document.getElementById('mensaje')
        mensaje.textContent='El usuario: '+ usuarios[2] + ' es el mayor, con ' +edades[2] + ' años';

    }

}


mayorDeTres();