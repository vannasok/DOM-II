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
// const logoZoom = document.getElementsByTagName('nav');
// logoZoom.addEventListener('wheel', event =>{
//     logoZoom.style.fontSize = '3rem';
// });

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
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

//6 focus
const form = document.getElementById('form');
form.addEventListener('focus', (event)=>{
    event.target.style.background = '#FFE4E1';
},true);
form.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  }, true);

//7 resize
window.addEventListener('resize', event =>{
    const changeBg =document.querySelector('body').style.backgroundColor = '#F0FFF0';
})

//8 scroll
var count = 0;
function scrollCount(){
    document.getElementById('count').innerHTML = count += 1;
}

//9 select name field
document.getElementById('inputField').onselect = function(){selectClick()};
function selectClick(){
    alert('text selected');
}

//10 dbclick fun in the sun
function doubleClick(){
    alert('paragraph clicked.')
}




