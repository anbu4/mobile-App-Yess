import baza from 'https://anbu4.github.io/mobile-App-Yess/baza.js';

const contentItem = document.querySelector('.content_items')
const btnUp = document.querySelector('.btn_up')

function cardMainCreate(){
    let count = 0
    for(let item in baza){
        if(count == 3){
            let conReklama = document.createElement('a')
            conReklama.classList.add('con-reklama')
            conReklama.innerHTML =`<img src="img/reklama.png" alt="">`
            contentItem.appendChild(conReklama)
            count = 0
        }
        count++

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
    let count = 0
   
    baza[index].forEach(elem => {
        if(count == 3){
            let conReklama = document.createElement('a')
            conReklama.classList.add('con-reklama')
            conReklama.innerHTML =`<img src="img/reklama.png" alt="">`
            contentItem.appendChild(conReklama)
            count = 0
        }
        count++

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
if(window.location.pathname == '/main.html'){
    cardMainCreate()
}else if(window.location.pathname == '/promokod.html'){
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

