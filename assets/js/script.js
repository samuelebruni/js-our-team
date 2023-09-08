
//creo un oggetto con al suo interno l'array contenente i dati di ogni membro

const infoTeam = [
    {
        nameMember : 'Wayne Barnett',
        role : 'Founder & CEO',	
        idCard : './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nameMember : 'Angela Caroll',
        role : 'Chief Editor',	
        idCard : './assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        nameMember : 'Walter Gordon',
        role : 'Office Manager',
        idCard : './assets/img/walter-gordon-office-manager.jpg'
    },
    {
        nameMember : 'Angela Lopez',
        role : 'Social Media Manager',	
        idCard : './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        nameMember : 'Scott Estrada',
        role : 'Developer',	
        idCard : './assets/img/scott-estrada-developer.jpg'
    },
    {
        nameMember : 'Barbara Ramos',	
        role : 'Graphic Designer',	
        idCard : './assets/img/barbara-ramos-graphic-designer.jpg'
    }
]


//ottengo tutte le informazioni tramite il ciclo for/in dell'oggetto e dei suoi valori stampandoli in console e le riporto successivamente sul DOM
const markUp = document.getElementById('contenitore')

for (const key in infoTeam) {
    const element = infoTeam[key];
    console.log(element.nameMember);
    console.log(element.role);
    console.log(element.idCard);

    markUp.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${element.idCard} class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                         <h5 class="card-title">${element.nameMember}</h5>
                        <p class="card-text">${element.role}</p>                              
                    </div>
                </div>
            </div>
    </div>
    ` 
}

