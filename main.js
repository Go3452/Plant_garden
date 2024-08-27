/*show menu*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('idtoggle'),
navClose=document.getElementById('navclose')

/*menu show*/
navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
})
/*menu hide*/
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
})
/*remove*/
const navLink=document.getElementById('.nav__list')

function linkAction()
{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))


/*questions active */

/*search*/
