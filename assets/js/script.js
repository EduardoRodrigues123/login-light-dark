var mode = document.getElementById("mode-icon");

mode.addEventListener('click', () =>{
   const form = document.getElementById('login-form')
    //"se a variavel mode tem uma class que contem ou e chamada fa-moon,ele vai remover a class 'fa-moon' e vai adicionar o 'fa-sun', isso vai fazer a troca dos icones! "

  if(mode.classList.contains('fa-moon')){
     mode.classList.remove('fa-moon')
     mode.classList.add('fa-sun')

     //mas clicado uma vez vai ficar preso no icone do sol, como resolver?

      //coloque um 'return' para que o programa veja que se ele fez esse codigo do IF ele nao vai fazer os de baixa! entao tipo se eu clicar no icone e nao passar na condiçao o programa vai fazer o codigo de baixa
     form.classList.add('dark')
     return;
  }

  //isso aqui vai fazer adicionar o 'fa-moon' e remover o 'fa-sun'
  mode.classList.add('fa-moon')
  mode.classList.remove('fa-sun')
  form.classList.remove('dark')

});