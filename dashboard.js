const dataAtual = document.getElementById("ultima-atualizacao");

dataAtual.textContent =
new Date().toLocaleString("pt-BR");

const cardsKpi =
document.getElementById("cards-kpi");

kpis.forEach(kpi => {

    cardsKpi.innerHTML += `
    
        <div class="card-kpi">

            <span>${kpi.titulo}</span>

            <strong>${kpi.valor}</strong>

        </div>
    
    `;

});

const cardsEquipe =
document.getElementById("cards-equipe");

equipe.forEach(colaborador => {

    cardsEquipe.innerHTML += `

        <div class="card-equipe">

            <h3>${colaborador.nome}</h3>

            <p>
                Faturamento:
                ${colaborador.faturamento}
            </p>

            <p>
                Conversão:
                ${colaborador.conversao}
            </p>

            <p>
                NPS:
                ${colaborador.nps}
            </p>

            <span>
                ${colaborador.status}
            </span>

        </div>

    `;

});