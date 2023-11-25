/*******************************************************************/
/*                                                                 */
/*              HALLOWEEN                                          */
/*              Autor: Pablo Diaz                                  */
/*              Version: 1.0                                       */
/*              fecha: NOV 2023                                    */
/*              comentario: trabajo lenguaje en marcas             */
/*              JS fuctions for hallowen exercise                  */
/*                                                                 */
/*******************************************************************/


function show(element){

    document.getElementById(element).style.visibility="visible";
    
}
function hide(element) {

    document.getElementById(element).style.visibility="hidden";


}
function sound(element){
    document.getElementById(element).play();

}

function silence(element){
    document.getElementById(element).pause();

}