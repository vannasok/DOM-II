//1 mouseover
const imgBorder = document.querySelectorAll('.img-content');
imgBorder.forEach(element =>{
    element.addEventListener('mouseover', event=>{
        element.style.border = '1px solid red';
    })
})

const zoomOut = document.querySelectorAll('.img-content');
zoomOut.forEach(element =>{
    element.addEventListener('mouseenter', event =>{
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.3s';
    })
});
const zoomIn = document.querySelectorAll('.img-content');
zoomIn.forEach(element =>{
    element.addEventListener('mouseleave', event =>{
        element.style.transform = 'scale(1)';
        element.style.transition = 'transform 0.3s';
    })
});

//2 keydown
const inputChange = document.getElementById('inputField');
inputChange.addEventListener('keydown', event =>{
    inputChange.style.backgroundColor = 'lightgray';
});


//3 wheel
const logoZoom = document.getElementsByTagName('nav');
logoZoom.addEventListener('wheel', event =>{
    logoZoom.style.fontSize = '3rem';
});

//4 drag drop
function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData('text', event.target.id);
}
function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
}
//5 load
//6 focus
//7 resize
//8 scroll
//9 select
//10 dbclick



