function inserir(num){
    form.text.value =  form.text.value + num;
}
function limpar(){
    form.text.value = ""; 
}
function calcular(){
    let resultado =0;
    resultado = form.text.value;
    form.text.value = "";
    form.text.value = eval(resultado);
}
function remover(){
    let numero = 0;
    numero = form.text.value;
    if(numero.lenght >0){
      x.remover(x.lenght-1);
    }
    // não esta funcionando 
  }

