//Эффект "печатания букв"
let text = "Давай поиграем!";
let i=0;
let speed = 100;

function type(){
   if (i<text.length){
      document.querySelector('#par').textContent += text.charAt(i);
      i++;
setTimeout(type, speed);
   }
}
type();


//2. Обьявление переменных и констант
const button = document.querySelector('#btn');
const startBtn = document.querySelector('#startBtn');
const addBtn = document.querySelector('#addBtn');
const phrase = document.querySelector('.activePhrase');
const guess = document.querySelector('#guess');
let timer = document.querySelector('.timer');
let randomNumber;
let userAnswer;


button.addEventListener('click', function(){
   document.querySelector('.header').style.display = "none";
   document.querySelector('.container').style.display = "block";
})
startBtn.addEventListener('click', function(){
   document.querySelector('.phrase').style.display = "block";
})

const phrases = [`1. I'll be back`, `2. Я тебе один умный вещь скажу, только ты не обижайся`, `3. Муля, не нервируй меня!`, `4. Утром деньги — вечером стулья. А можно наоборот? Можно, но деньги вперед!`, `5. В чем сила, брат?`,  `6. Не учите меня жить, лучше помогите материально!`, `7. «Вот иду я красивая по улице, а мужики вокруг так и падают, так и падают… И сами в штабеля укладываются!`, `8. Улыбаемся и машем!`, `9. Гони рубль, родственник! Мне Афоня рубль должен был!`, `10. На небе только и разговоров, что о море`, `11. Кто ж его посадит? Он же памятник`, `12. Мы с тобой одной крови — ты и я!`, `13. Наши люди в булочную на такси не ездят`, `14. Господин назначил меня любимой женой!`
];

const movies = [`терминатор`, `мимино`, `подкидыш`, `12 стульев`, `брат2`, `москва слезам не верит`, `девчата`, `мадагаскар`, `афоня`, `достучаться до небес`, `джентельмены удачи`, `маугли`, `бриллиантовая рука`, `белое солнце пустыни`];

//3.Генерация случайного номера вопроса
startBtn.addEventListener('click', function(){
   let startTime = new Date().getTime();
   let interval = setInterval(function(){
       if(new Date().getTime() - startTime > 2000){
           clearInterval(interval);
           phrase.innerHTML = phrases[randomNumber-1];
           return;
       }
      randomNumber = Math.floor(Math.random() * phrases.length+1);
      timer.style.display = "block";
      timer.innerHTML = randomNumber;

      delay = 2000;
   setTimeout (displayPhrase, delay);

   function displayPhrase(){
      phrase.style.display = "block";
   }
      //console.log(randomNumber);
      }, 150);
   }, 900);  
 
   let movie

//4. Добавление ответа по клику и Enter  
addBtn.addEventListener('click', answerAdd);  

guess.addEventListener("keypress", function(e){
   if (e.keyCode === 13)
   answerAdd();
})

//5. Проверка ответа
function answerAdd(){
userAnswer = document.querySelector('#guess').value;
userAnswer.toLowerCase();
console.log(userAnswer); 
//for(i=0;i<=movies.length;i++)    
    // {if (randomNumber === movies[i]) {
//console.log(movies[i]);}
    //else{ 
  
      if (userAnswer === ""){
         Swal.fire('Введите ответ');
      }
      else if
       (movies.includes(userAnswer.toLowerCase()))
      
        {
         Swal.fire({
            title: 'Вау!',
            text: 'Ты угадал.',
            imageUrl: 'image10.jpg',
            imageWidth: 300,
            imageHeight: 370,
            imageAlt: 'image10',
          });
          phrase.innerHTML = "";
                  }
            else{
               Swal.fire({
                  icon: 'error',
                  title: 'Ой...',
                  text: 'Попробуй ещё раз!',
                });
                userAnswer.value = "";
      }
        guess.value = "";
        
      }

      const cat = document.querySelector('img');
      cat.onclick = function() {
         //...
         let times = 1;
       
        function go() {
            
           if (times % 2) {
             // плыть вправо
             cat.classList.remove('back');
             
             cat.style.marginLeft = 100 * times + 10 + 'px';
             
           } else {
             // плыть влево
             cat.classList.add('back');
             cat.style.marginLeft = 100 * times - 50 + 'px';
             
           }
         }
       
         go();
       
         cat.addEventListener('transitionend', function() {
           times++;
           go();
         });
         
       };
      
 
   
