document.getElementById('btn').addEventListener('click', function(){

     document.getElementById('backgoundPic').style.display = 'none';
     document.getElementById('instruction').style.display = 'block';
    
})
function removeInstuction(){
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('mainGame').style.display = 'block';
}
setTimeout(removeInstuction,10000)


var paste = document.getElementById('timer');

 (function(){
    var sec = 0
    let timer = setInterval(()=>{
        paste.innerHTML = '00:'+sec;
        sec++
        if(sec === 60){
            clearInterval(timer)
            paste.innerHTML = "00:00";
            let sec2 = 0
            if(sec2 === 0){
              timer = setInterval(()=>{
              paste.innerHTML = "00:"+sec2;
                sec2++
                if(sec2=== 60){
                    clearInterval(timer)
                }
              },1000)  
            }
        }
    },1000)

})()


  const pics = [ 
     {src:'https://cdn.pixabay.com/photo/2013/07/13/11/47/low-shoe-158667_1280.png', word:'shoe'},
     {src:'https://cdn.pixabay.com/photo/2024/07/21/10/22/vulture-8910009_1280.jpg', word:'bird'},
     {src:'https://cdn.pixabay.com/photo/2024/02/25/13/30/car-8595770_1280.jpg',word:'car'}
  ]

  let currentword ='';
  

  
  function displayRandomImage() {
    const imgElement = document.getElementById('image1');
    const randomIndex = Math.floor(Math.random() * pics.length);
    const imageObject = pics[randomIndex];
    imgElement.src = imageObject.src;
    currentWord = imageObject.word;

    setInterval(displayRandomImage, 60000);

    document.getElementById('enter').addEventListener('click', function(){
        const inputElement = document.getElementById('textarea');
        const feedbackElement = document.getElementById('feedback');
        const userAnswer = inputElement.value.trim().toLowerCase();
    
        if (userAnswer === currentWord) {
            feedbackElement.textContent = 'Correct! Well done.';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Incorrect. Try again.';
            feedbackElement.style.color = 'red';
        }
    })
}
displayRandomImage()



const show = document.getElementById('textarea');
const del = document.getElementById('delete');
const enter =document.getElementById('enter');

let kin = []
function clickToShow(post) {
    show.value += post
    kin = show.value.split('')
}

del.addEventListener('click', (()=>{
    kin.pop()
    show.value = kin.join('')
}))
