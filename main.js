var dataNascimento = document.getElementById('data_nascimento');
dataNascimento.addEventListener('input', function () {
  var data = new Date(this.value);
  var hoje = new Date();
  if (data >= hoje) {
    dataNascimento.setCustomValidity('A data de nascimento deve ser anterior à data atual.');
  } else {
    dataNascimento.setCustomValidity('');
  }
});



// Adicionando validação personalizada para o CPF
var cpf = document.getElementById('cpf');
cpf.addEventListener('input', function () {
  var cpfValido = /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(this.value);
  if (!cpfValido) {
    cpf.setCustomValidity('O CPF deve seguir o formato 000.000.000-00.');
  } else {
    cpf.setCustomValidity('');
  }
});