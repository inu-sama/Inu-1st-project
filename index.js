/*document.getElementById("menubox").hidden = true
function createMenu(){
    document.getElementById("menubox").hidden = false
}
function hideMenu(){
    document.getElementById("menubox").hidden = true
}*/
const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.loginlink')
const registerLink = document.querySelector('.registerlink')
const popUp = document.querySelector('.btnLogin')
const closeBtn = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})
popUp.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})

closeBtn.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})
