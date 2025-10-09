import baza from './baza.js';

const contentItem = document.querySelector('.content_items')
const btnUp = document.querySelector('.btn_up')
const input = document.querySelector('.navbar_input')
const searchBtn = document.querySelector('.navbat_search-btn')

function cardMainCreate(){
    for(let item in baza){
        let conItem = document.createElement('a')
        conItem.classList.add('con-item')
        conItem.href = 'promokod.html'
        conItem.innerHTML =`
        <img src="${baza[item][0]}" alt="">
        <div class="con-item_title">
            <p>${baza[item][1].text}</p>
            <ul>${baza[item][1].prom}</ul>
        </div>
        `
        conItem.addEventListener('click',()=>{
            localStorage.setItem('index',item)
        })
        contentItem.appendChild(conItem)
    }
    
}
function cardPromCreate(){
    const index = localStorage.getItem('index')
        baza[index].forEach(elem => {
            if(typeof elem == 'object'){
                let conItem = document.createElement('div')
                conItem.classList.add('con-item')
                conItem.innerHTML = ` 
                <img src="${baza[index][0]}" alt="">
                <div class="con-item_title">
                <p>${elem.text}</p>
                        <ul>30% gacha chegirmalar</ul>
                        </div>
                        <div class="con-item_prom">
                        <img src="icons/copy.png" alt="">
                        <p>${elem.prom}</p>
                    </div>
                    `
                    contentItem.appendChild(conItem)
                }

            });   
        }
        // /mobile-App-Yess/
        if(window.location.pathname == '/mobile-App-Yess/main.html'){
            cardMainCreate()
        }else if(window.location.pathname == '/mobile-App-Yess/promokod.html'){
            cardPromCreate()
}

window.addEventListener('scroll',()=>{
    if(window.scrollY >= 300){
        btnUp.style.marginBottom = '0px'
    }
    if(window.scrollY <= 300){
        btnUp.style.marginBottom = '-100px'
    }
    
})
btnUp.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})

// search
input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        const query = input.value.trim().toLowerCase();
        localStorage.setItem('index',query)
        window.location.href = '/mobile-App-Yess/promokod.html'
    }
})
searchBtn.addEventListener('click',function(){
    const query = input.value.trim().toLowerCase();
    localStorage.setItem('index',query)
    window.location.href = '/promokod.html'
})
