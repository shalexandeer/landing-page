const sidebar = document.querySelector('.parent header nav');
const openBtn = document.getElementById('open-button');
const closeBtn = document.getElementById('close-button');
openBtn.addEventListener('click', () => {
    sidebar.style.right = "0px"
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    openBtn.style.display = 'none'
})
closeBtn.addEventListener('click',() => {
    sidebar.style.right = "-650px"
    document.body.style.backgroundColor = "white"
    openBtn.style.display = 'block'
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
