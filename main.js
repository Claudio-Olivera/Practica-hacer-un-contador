//setea valor inicial
let contador = 0;

// seletor de valor y botones

const valor = document.querySelector("#valor");//selecciona el id value

const btns = document.querySelectorAll(".btn");//selecciona todos los btn

btns.forEach(function(btn){
    btn.addEventListener("click", function(nombreDeLaFuncion){
        const botoncito = nombreDeLaFuncion.currentTarget.classList;

        /*creo una constante, que haga referencia a 3 cosas 
        
        en primer lugar necesita el nombreDeLaFuncion, porque es la que 
        esta actuando en el eventListener al hacer "click",
        
        en segundo lugar decirle con currentTarget, que es a este mismo objetivo.

        en tercer lugar que tiene que tomar la class usando classList

        por eso luego en los if puedo usar esta clase botoncito 
        (que tiene estas 3 cosas) y preguntarle con .contains ("restar")
        si tiene en el nombre de su clase la palabra "restar"
        

        */
        if (botoncito.contains('restar')){
            contador--;
        }else if (botoncito.contains('sumar')){
            contador++;
        }else{
            contador = 0;
        }
        if (contador > 0){
            valor.style.color = "green"
        } //si mi contador es mayor a cero, a valor, cambiarle el color a verde
        if (contador < 0){
            valor.style.color = "red"
        }
        if (contador === 0){
            valor.style.color = "black"
        }
        valor.textContent = contador; //modifica el contenido de valor por el valor de count
        //y esto es lo que refleja los cambios en el span de la web porque
        //estoy usando textContent
    })
});

