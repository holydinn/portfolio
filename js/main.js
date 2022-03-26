const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const navSidebar = document.querySelectorAll('.sidebar-nav');
const langChoice = document.querySelector('.lang-choice');

for(item of navSidebar){
    item.addEventListener('click', ()=>{
        sidebar.classList.remove("active");
        document.body.classList.remove('hidden');
    })
}

menuBtn.addEventListener('click', ()=>{
    sidebar.classList.add("active");
    document.body.classList.add('hidden');
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove("active");
    document.body.classList.remove('hidden');
})