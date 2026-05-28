function calcularImpacto() {
    const selecao = document.getElementById("manejo").value;
    const resultadoDiv = document.getElementById("resultado");
    const titulo = document.getElementById("resultado-titulo");
    const texto = document.getElementById("resultado-texto");

    // Mostra a div de resultado removendo a classe oculta
    resultadoDiv.style.display = "block";

    if (selecao === "quimico") {
        resultadoDiv.className = "perigo";
        titulo.innerHTML = "⚠️ Alto Impacto Ambiental";
        texto.innerHTML = "O uso exclusivo de químicos pesados pode contaminar lençóis freáticos, degradar o solo a longo prazo e eliminar polinizadores essenciais como as abelhas. Não é o caminho sustentável para o futuro.";
    } else if (selecao === "misto") {
        resultadoDiv.className = "alerta";
        titulo.innerHTML = "🌱 Impacto Moderado (Manejo Integrado)";
        texto.innerHTML = "Boa escolha! Você equilibra o uso racional de químicos com práticas biológicas. Reduz o impacto e protege parcialmente a biodiversidade, sendo um passo importante para a transição ecológica.";
    } else if (selecao === "ecologico") {
        resultadoDiv.className = "sucesso";
        titulo.innerHTML = "✨ Sustentabilidade Máxima! (Agro Forte)";
        texto.innerHTML = "Excelente! O uso de defensivos ecológicos e bioinsumos protege a lavoura contra pragas de forma natural. Preserva as abelhas, mantém a saúde do solo intacta e garante alimentos limpos para o futuro!";
    }
}