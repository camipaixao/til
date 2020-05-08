function criarBordas(){
  var bordaTopoEsquerda = document.querySelector('#inputTopoEsquerda').value;
  var bordaTopoDireita = document.querySelector('#inputTopoDireita').value;
  var bordaBaixoEsquerda = document.querySelector('#inputBaixoEsquerda').value;
  var bordaBaixoDireita = document.querySelector('#inputBaixoDireita').value;

  var box = document.getElementById('box');

  box.style.borderTopLeftRadius = `${bordaTopoEsquerda}px`;
  box.style.borderTopRightRadius = `${bordaTopoDireita}px`;
  box.style.borderBottomRightRadius = `${bordaBaixoDireita}px`;
  box.style.borderBottomLeftRadius = `${bordaBaixoEsquerda}px`;
}

// function limpaForm(){
//document.querySelector('#borderForm').reset();
//}