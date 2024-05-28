let headerFormation = document.getElementById('formation')
let headerCampus = document.getElementById('campus')
let megamenuFormation = document.getElementById('megamenu_formation')
let megamenuCampus = document.getElementById('megamenu_campus')
let megamenu = document.getElementById('megamenu')
let data = document.getElementById('data')
let dev = document.getElementById('dev')
let product = document.getElementById('product')
let france = document.getElementById('france')
let europe = document.getElementById('europe')
let asie = document.getElementById('asie')
let usa = document.getElementById('usa')
let afrique = document.getElementById('afrique')
let orient = document.getElementById('orient')


headerFormation.addEventListener("click", (e)=>{
    e.preventDefault();
    e.stopPropagation(); 

    headerFormation.classList.add('active')
    headerCampus.classList.remove('active')

    if(megamenuFormation.classList.contains("not_displayed")){
        megamenuFormation.classList.remove('not_displayed')
        megamenuCampus.classList.add('not_displayed')
    } else {
        megamenuFormation.classList.add("not_displayed")
        headerFormation.classList.remove('active')
    }
})

headerCampus.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); 

    headerFormation.classList.remove('active')
    headerCampus.classList.add('active')    
    
    if(megamenuCampus.classList.contains('not_displayed')){
        megamenuCampus.classList.remove('not_displayed')
        megamenuFormation.classList.add("not_displayed")
    } else{
        megamenuCampus.classList.add('not_displayed')
        headerCampus.classList.remove('active')
    }
})

document.addEventListener('click', (e) => {
       
    if (!headerFormation.contains(e.target) && !megamenuFormation.contains(e.target)) {
        megamenuFormation.classList.add('not_displayed');
        headerFormation.classList.remove('active')
        headerCampus.classList.remove('active') 
    }
    if (!headerCampus.contains(e.target) && !megamenuCampus.contains(e.target)) {
        megamenuCampus.classList.add('not_displayed');
        headerFormation.classList.remove('active')
        headerCampus.classList.remove('active') 
    }
});

data.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!data.classList.contains('active')){
        data.classList.add('active')
        dev.classList.remove('active')
        product.classList.remove('active')
    }
})

dev.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!dev.classList.contains('active')){
        dev.classList.add('active')
        data.classList.remove('active')
        product.classList.remove('active')
    }
})

product.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!product.classList.contains('active')){
        product.classList.add('active')
        data.classList.remove('active')
        dev.classList.remove('active')
    }
})

france.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!france.classList.contains('active')){
        france.classList.add('active')
        europe.classList.remove('active')
        asie.classList.remove('active')
        usa.classList.remove('active')
        afrique.classList.remove('active')
        orient.classList.remove('active')
    }
})

europe.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!europe.classList.contains('active')){
        europe.classList.add('active')
        france.classList.remove('active')
        asie.classList.remove('active')
        usa.classList.remove('active')
        afrique.classList.remove('active')
        orient.classList.remove('active')
    }
})

asie.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!asie.classList.contains('active')){
        asie.classList.add('active')
        europe.classList.remove('active')
        france.classList.remove('active')
        usa.classList.remove('active')
        afrique.classList.remove('active')
        orient.classList.remove('active')
    }
})

usa.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!usa.classList.contains('active')){
        usa.classList.add('active')
        europe.classList.remove('active')
        asie.classList.remove('active')
        france.classList.remove('active')
        afrique.classList.remove('active')
        orient.classList.remove('active')
    }
})

afrique.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!afrique.classList.contains('active')){
        afrique.classList.add('active')
        europe.classList.remove('active')
        asie.classList.remove('active')
        usa.classList.remove('active')
        france.classList.remove('active')
        orient.classList.remove('active')
    }
})

orient.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!orient.classList.contains('active')){
        orient.classList.add('active')
        europe.classList.remove('active')
        asie.classList.remove('active')
        usa.classList.remove('active')
        afrique.classList.remove('active')
        france.classList.remove('active')
    }
})