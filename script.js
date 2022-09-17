const sidebar = document.querySelector('.parent header nav');
const openBtn = document.getElementById('open-button');
const closeBtn = document.getElementById('close-button');
openBtn.addEventListener('click', () => {
    sidebar.style.right = "0px"
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
})
closeBtn.addEventListener('click',() => {
    sidebar.style.right = "-350px"
    document.body.style.backgroundColor = "white"
    
})

// dropdown
const selectButton = document.querySelectorAll('.nav-item-wrap-child');
const parent = document.querySelector('.nav-item');
const dropFeature = document.getElementById('feature');
const dropCompany = document.getElementById('company');
selectButton.forEach((e) =>{
    e.addEventListener('click', (en) => {
        en.preventDefault();
        if(en.currentTarget.classList.contains('feature')){
            dropFeature.classList.toggle('show-sidebar');
        }else if(en.currentTarget.classList.contains('company')){
            dropCompany.classList.toggle('show-sidebar')
        }
    });
});
