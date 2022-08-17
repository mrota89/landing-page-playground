//prepara stringa con testo per contenuto tab
function createContentTab(xhr) {
    let response = xhr.response;
    let responseParsed = null;
    let stringContent = "";

    if(response !== "") {
        responseParsed = JSON.parse(response);
        responseParsed.item.content.forEach(element => {
            stringContent += `${element}${" "}`;
        });
    }

    document.getElementById("tab-text-box").innerHTML = stringContent;
}


function getTabContent(tabTitle) {
    const arrayEndPoint = [
        "/assets/ajax/tab1.json",
        "/assets/ajax/tab2.json",
        "/assets/ajax/tab3.json"
    ]

    const baseUrl = "http://127.0.0.1:5500" //l'url di default è quello del live server di VSCode

    switch (tabTitle) {
        case "Vestibulum at odio sit amet":
            jsonFileName = arrayEndPoint[0];
            break;
        case "Sed vehicula neque":
            jsonFileName = arrayEndPoint[1];
            break;
        case "Nulla id libero pretium":
            jsonFileName = arrayEndPoint[2];
    }

    //per recuperare e modificare classi css della tab cliccata
    document.addEventListener('click', (e) => {

        let allTabs = document.querySelectorAll(".tabs .tabs-box .cta");
        let elementClassList = e.target.classList;
        //controllo quale tab è precedentemente attivata e la disattivo
        allTabs.forEach(element => {
            if(!element.className.includes("disabled")) {
                element.classList.add("disabled");
            }
        })

        //attivo la tab cliccata
        elementClassList.remove("disabled");
    }, { once: true });

    //ajax call
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${baseUrl}${jsonFileName}`, true);

    //al caricamento mostro il loader
    xhr.onprogress = () => {
        document.getElementById("tab-text-box").innerHTML = '<img src="assets/images/loader.png" alt="loader">';
    };

    //al termine del caricamento eseguo render della response
    xhr.onloadend = function() {
        //setTimeout serve per simulare ritardo nella risposta
        setTimeout(() => {
            if (this.readyState == 4 && this.status == 200) {
                createContentTab(xhr);  
            } else {
                if(this.status >= 400) {
                    console.error(`There was a problem with the request. Error code: ${this.status}`);
                }
            }
        }, 1500)
    };
    xhr.send()
}

//al caricamento della pagina, mostro il primo tab
window.onload = getTabContent("Vestibulum at odio sit amet");

  