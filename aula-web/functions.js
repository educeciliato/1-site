document.addEventListener("DOMContentLoaded", (event)=>{
    buscarInscritos();
    construirModal();
    fechrModal();
    const temaLocal = localStorage.getItem("tema");
    const tema = document.body.setAttribute("data-theme", temaLocal);
})
function construirModal(params) {
    const botaoSaibaMais =  document.getElementById("saiba-mais");
    const modal = document.getElementById("modal");
    botaoSaibaMais.addEventListener("click", ()=>{
        modal.classList.remove("hidden");
    })
}

function fechrModal (e)  {
    const modal = document.getElementById("modal");
    const fecharModal = document.getElementById("fechar-modal")
    fecharModal.addEventListener("click", (e) => {
        console.log(e.target)
            modal.classList.add("hidden")
    })
}

function alterarTema() {
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", novoTema);
    const btAlterarTema = document.getElementById("btAlterarTema");
    if (tema == 'dark') {
        btAlterarTema.textContent = "Dark";
    }
    else {
        btAlterarTema.textContent = "Light";
    }
    localStorage.setItem("tema",novoTema);
    document.setAttribute("data-theme", novoTema)
}

function buscarInscritos() {
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("inscritos.json")
        .then(res => res.json())
        .then(res => {
            const divInscritos = document.getElementById('inscritos')
            res.forEach(user => {
                const novoParagrafo = document.createElement("p");
                novoParagrafo.textContent = `Nome: ${user.nome}`;
                divInscritos.appendChild(novoParagrafo);
            });
        }).catch(e=>console.log(e));
    }