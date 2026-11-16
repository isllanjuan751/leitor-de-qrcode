const input_caminho = document.getElementById("Caminho");
const btn_scanner = document.getElementById("Scanner");
const texto_resultado = document.getElementById("resultado");

btn_scanner.addEventListener("click", async function() {
    const caminho = input_caminho.value;

    try {
        const resultado = await window.lerQrocde.Leitor(caminho);
        texto_resultado.value = resultado;
    } catch(erro) {
        alert(erro);
    }
});