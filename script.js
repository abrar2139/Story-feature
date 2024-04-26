const Array = [
    {
    Dp:"https://qph.cf2.quoracdn.net/main-qimg-da7b6c5240c341779f0a2651cd58b536-lq",
    Story:"https://qph.cf2.quoracdn.net/main-qimg-da7b6c5240c341779f0a2651cd58b536-lq"
},
{
    Dp:"https://i.pinimg.com/474x/27/eb/5a/27eb5aeff41b8e698c1e0af4863f620e.jpg",
    Story:"https://i.pinimg.com/474x/27/eb/5a/27eb5aeff41b8e698c1e0af4863f620e.jpg"
},
{
    Dp:"https://www.shutterstock.com/image-photo/ninja-kneeling-posing-sword-over-600nw-1797900772.jpg",
    Story:"https://www.shutterstock.com/image-photo/ninja-kneeling-posing-sword-over-600nw-1797900772.jpg"
},
{
    Dp:"https://media.istockphoto.com/id/1267012235/photo/fighting-ninja-posing-with-a-sword-over-black-background.jpg?s=612x612&w=0&k=20&c=jFrfPk0t62LMsT78onXlK39k_8f-2zqHkRB_IL_Foqg=",
    Story:"https://media.istockphoto.com/id/1267012235/photo/fighting-ninja-posing-with-a-sword-over-black-background.jpg?s=612x612&w=0&k=20&c=jFrfPk0t62LMsT78onXlK39k_8f-2zqHkRB_IL_Foqg="
},
{
    Dp:"https://i.pinimg.com/originals/d0/d2/dd/d0d2ddf77fea29481575a6f8e8ddc1c0.jpg",
    Story:"https://i.pinimg.com/originals/d0/d2/dd/d0d2ddf77fea29481575a6f8e8ddc1c0.jpg"
},

]
const stories = document.querySelector(".stories");
const fullScreen = document.querySelector(".full-screen")
let clone = "";
Array.forEach(function(elem,idx) {
    clone+=`<div class="story"><img id="${idx}" src="${elem.Dp}" alt="img${idx}"></div>`
});
stories.innerHTML=clone

stories.addEventListener("click",function(details) {
    if (details.target.tagName.toLowerCase()==='img') {
        fullScreen.style.display="block"
        fullScreen.style.backgroundImage=`url(${Array[details.target.id].Story})`
        setTimeout(() => {
        fullScreen.style.display="none"
        }, 2000);
    }

})














