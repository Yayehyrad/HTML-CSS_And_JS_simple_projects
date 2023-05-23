const panels = document.querySelectorAll('.panel')

panels.forEach((p)=>{
    p.addEventListener('click' , ()=>{
        remove()
        p.classList.add('active')
    })
})

function remove(){
    panels.forEach((p)=>{
            p.classList.remove('active')})
}