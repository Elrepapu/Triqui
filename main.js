const temcircle = document.querySelector("#temcircle");
const temsquare = document.querySelector("#temsquare");
const table = document.querySelector(".table");
const one = document.querySelector(".one");
const ganaste = document.querySelector(".ganaste");
const perdiste = document.querySelector(".perdiste");
const empate = document.querySelector(".empate");


document.addEventListener("click", (e) => {
    if (e.target.matches(".table")){
        revision(e);
    }
    console.log(e.target)
    if (e.target.matches("button")){
        location.reload()
    }
});
let dx = ["arriba","centro","abajo"];
let dy = ["izquierda","centro","derecha"];
let winer = false;
let perdio = false;
const cuadriculaLLena = [
    {number: 'one', id: '1', dx: "arriba", dy:"izquierda",dz1:"s"},
    {number: 'two', id: '2', dx: "arriba", dy:"centro"},
    {number: 'three', id: '3', dx: "arriba", dy:"derecha",dz2:"s" },
    {number: 'four', id: '4', dx: "centro", dy:"izquierda"},
    {number: 'five', id: '5',dx:"centro",dy:"centro",dz1:"s",dz2:"s"},
    {number: 'six', id: '6', dx: "centro", dy:"derecha"},
    {number: 'seven', id: '7', dx: "abajo", dy:"izquierda",dz2:"s" },
    {number: 'eight', id: '8', dx: "abajo", dy:"centro" },
    {number: 'nine', id: '9', dx: "abajo", dy:"derecha",dz1:"s" }]
const revision = (e)=> {
    const producto = {
        number:e.target.id,
        id:e.target.dataset.numero,
        dx:e.target.dataset.dx,
        dy:e.target.dataset.dy,
        dz1:e.target.dataset.dz1,
        dz2:e.target.dataset.dz2,

}  
    
    const indice = cuadricularev.findIndex((item)=>item.id=== producto.id)
    if (indice === -1) {
        cuadricularev.push(producto)
        cuadriculasquare.push(producto)
        paint(e)
    }
    
   
    
}

const paint = (e) => {
    let punto = document.querySelector("#" + e.target.id)
    
    const clone = temsquare.content.cloneNode(true);
    
    clone.querySelector(".linea-a");
    clone.querySelector(".linea-b");
    
    punto.appendChild(clone);
    for (i=0; i < dx.length; i++) {

        let uno = cuadriculasquare.filter((element) => element.dx == dx[i]);
        if(uno.length === 3){
            ganaste.style.display= "flex"
            winer=true;

        }
    }
    
    for (i=0; i < dy.length; i++) {
        let uno = cuadriculasquare.filter((element) => element.dy == dy[i]);
        if(uno.length === 3){
            ganaste.style.display= "flex"
            winer=true;
        }
    }
    let uno = cuadriculasquare.filter((element) => element.dz1 == "s");
    if(uno.length === 3){
        ganaste.style.display= "flex"
        winer=true;
    }
    let dos = cuadriculasquare.filter((element) => element.dz2 == "s");
    if(dos.length === 3){
        ganaste.style.display= "flex"
        winer=true;
    }

    else{answer(e);}
    
    
    
    
}

const answer = (e) => {
    respuesta(e)
    function respuesta(e) {
        min = Math.ceil(1);
        max = Math.floor(10);
        let random =""+ Math.floor(Math.random() * (max - min) + min);
        let random2 = {id:random}
        ///let transRandom = cuadriculaLLena.filter((cuadriculaL) => cuadriculaL.id == random);
        const indice2 = cuadricularev.find((item)=>item.id === random )
        
        if (indice2 === undefined && winer === false) {
            cuadricularev.push(random2)
            const elegido = cuadriculaLLena.filter((cuadriculaL) => cuadriculaL.id == random);
            const dx = elegido.map((elegi) => elegi.dx);
            
            
            
            const dy = elegido.map((elegi) => elegi.dy);
            
            const dz1 = elegido.map((elegi) => elegi.dz1);
            
            const dz2 = elegido.map((elegi) => elegi.dz2);
            const dO = {dx: dx, dy:dy, dz1:dz1, dz2:dz2  }
            
            cuadriculacircle.push(dO);
            const elegido2 = elegido.map((elegi) => elegi.number);
            const elElegido = "#"+ elegido2 ;
            const elElegido2 = document.querySelector(elElegido);
            const clone = temcircle.content.cloneNode(true);
            clone.querySelector(".circle");
            elElegido2.appendChild(clone);

            for (i=0; i < dx.length; i++) {
                let uno = cuadriculacircle.filter((element) => element.dx == dx[i]);
                if(uno.length === 3){
                    perdiste.style.display= "flex"
                    perdio = true;
                }
            }
            
            for (i=0; i < dy.length; i++) {
                let uno = cuadriculacircle.filter((element) => element.dy == dy[i]);
                if(uno.length === 3){
                    perdiste.style.display= "flex"
                    perdio = true;
                }
            }
            let uno = cuadriculacircle.filter((element) => element.dz1 == "s");
            if(uno.length === 3){
                perdiste.style.display= "flex"
                perdio = true;
            }
            let dos = cuadriculacircle.filter((element) => element.dz2 == "s");
            if(dos.length === 3){
                perdiste.style.display= "flex"
                perdio = true;
            }
            if(cuadricularev.length === 8 && perdio===false){
                console.log("melo")
                empate.style.display= "flex"
                
            }
            
        }else{
            if(winer === false){respuesta(e)}
            
        }
}


    
}

const cuadriculasquare = [];
const cuadriculacircle = [];


const cuadricularev =[];