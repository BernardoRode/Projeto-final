document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        {
            titulo: "Santos",
            descricao: "Site do time de futebol Santos",
            imagem: "link-da-imagem-1.jpg"
        },
        {
            titulo: "Calcular Produto",
            descricao: "Informar o número de produtos que você tem e qual o valor do produto que será feito o cálculo",
            imagem: "link-da-imagem-2.jpg"
        }
    ];

    const listaProjetos = document.getElementById("lista-projetos");
    const conteudoExibido = document.getElementById("conteudo-exibido");

    projetos.forEach((projeto) => {
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.textContent = projeto.titulo;

        button.addEventListener("click", function () {
            conteudoExibido.innerHTML = `
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
                <img src="${projeto.imagem}" alt="${projeto.titulo}">
            `;
            conteudoExibido.style.display = "block";
        });

        li.appendChild(button);
        listaProjetos.appendChild(li);
    });

    // Adiciona um evento para ocultar a section ao clicar fora dela
    window.onclick = function (event) {
        if (event.target == conteudoExibido) {
            conteudoExibido.style.display = "none";
        }
    };
});
