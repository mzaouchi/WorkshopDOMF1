// var balh = document.getElementsByTagName('h1')
// // console.log(balh)
// balh[0].style.color = 'red'

// console.log(document.getElementsByClassName('para'))
// document.getElementsByClassName('para')[1].style.color = 'blue'

// var divM = document.getElementById('main')
// console.log(divM)


// var divM = document.querySelector('#main')
// console.log(divM)

// var par = document.querySelectorAll('.para')
// console.log(par)

// var par = document.querySelector('.para')
// console.log(par)


// var divM = document.getElementById('main')
// console.log(divM.innerHTML)
// console.log(divM.innerText)

// var divM = document.querySelector('#main')
// var newBt = document.createElement('button')
// newBt.innerHTML = "Sirine"
// newBt.style.marginRight = "12px"
// var Omar = document.createElement('button')
// Omar.innerHTML = "Sirine"
// divM.appendChild(newBt)
// divM.appendChild(Omar)

// var divM = document.querySelector('#main')

// console.log(divM.firstElementChild.innerHTML)
// console.log(divM.lastElementChild.innerHTML)
// console.log(divM.firstElementChild.nextElementSibling.innerHTML)
// console.log(divM.lastElementChild.previousElementSibling.innerHTML)

function Sirine(){
    alert('Hello Omar')
}


// var btnP = document.querySelector('.btnP')

// btnP.addEventListener('click',function(){
//     btnP.previousElementSibling.innerHTML++
// })

// var btnM = document.querySelector('.btnM')

// btnM.addEventListener('click',function(){
//     if (btnM.nextElementSibling.innerHTML>0) {
//         btnM.nextElementSibling.innerHTML--
//     }
    
// })


var btnP = document.querySelectorAll('.btnP')

for(let i = 0; i < btnP.length;i++){
    btnP[i].addEventListener('click',function(){
        btnP[i].previousElementSibling.innerHTML++
    })
}

var btnM = document.querySelectorAll('.btnM')

for(let i = 0;i<btnM.length;i++){
    btnM[i].addEventListener('click',function(){
        if (btnM[i].nextElementSibling.innerHTML>0) {
            btnM[i].nextElementSibling.innerHTML--
        }
    })
}