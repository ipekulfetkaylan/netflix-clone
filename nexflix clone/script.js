
const questionEl= document.querySelectorAll('.question')


questionEl.forEach(questionEl=>{
    const btn= questionEl.querySelector('.accordion');
    btn.addEventListener('click', ()=>{
       questionEl.classList.toggle('active')
    })
})

// const buttons= document.querySelectorAll('.question button');
// buttons.forEach(function(e){
//     e.onclick= function(){
//         let content= e.nextElementSibling;
//         let contents= document.querySelectorAll('.question .panel');
//         contents.forEach(function(c){
//             c.classList.remove('active');
//             console.log(c)
//         });
//         content.classList.add('active');
//     }
// })

