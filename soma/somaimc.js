const resultado = document.getElementById("resultado");

btn.addEventListener("click", function imc(){
    let peso = Number(document.getElementById("input-peso").value);
    let altura = Number(document.getElementById("input-altura").value);
    let result = Number (document.getElementById("resultado"));

  if (result.textContent === undefined) {
    result.textContent = String(peso / (altura * altura));
}
}
)