const variantes = ['A', 'B'];
const usuarioVariante = variantes[Math.floor(Math.random() * variantes.length)];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("button-container");
    
    if (usuarioVariante === 'A') {
        container.innerHTML = '<button id="btn-atencao" style="background: #333; color: #fff;">Cadastre-se</button>';
    } else {
        container.innerHTML = '<button id="btn-atencao" style="background: #1DB954; color: #fff; font-weight: bold;">Garantir Minha Vaga →</button>';
    }

    document.getElementById("btn-atencao").addEventListener("click", () => {
        console.log(`Métrica disparada: Clique registrado na Variante ${usuarioVariante}`);
        alert(`Obrigado! Clique registrado para a Variante ${usuarioVariante}`);
    });
});