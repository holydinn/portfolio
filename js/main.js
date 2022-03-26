const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const navSidebar = document.querySelectorAll('.sidebar-nav');
const langChoice = document.querySelector('.lang-choice');

for(item of navSidebar){
    item.addEventListener('click', ()=>{
        sidebar.classList.remove("active");
    })
}

menuBtn.addEventListener('click', ()=>{
    console.log('1');
    sidebar.classList.add("active");
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove("active");
})