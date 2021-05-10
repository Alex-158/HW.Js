console.log('--------------Первое задание -------------------');

(function () {
    function counter (val) {
        let result = val;
        counter = function() {
            let arg = arguments[0] ? arguments[0] : 0;
            return result = result + arg;
        };
        return counter();
    }
    console.log(counter(3)) ; //3
    console.log(counter(5)); //8
    console.log(counter(228)); //236
})();

console.log('--------------Второе задание -------------------');

const getUpdatedArr = (() => {
    let getArr = [];

    return (change) => {
        if (change === undefined) {
            getArr = [];
            return console.log(getArr);
        } else {
            getArr.push(change)
            return console.log(getArr);
        }
    }
})()

console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({name: 'Vasya'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));

console.log('--------------Третье задание  getTime()-------------------');



 const getTime = (() =>{ 
   let date = 0;
   
   return () => {
    if ( date == 0){

      date = new Date().getTime();


      console.log('Enabled');

       

      
    }else{
       changeDate = new Date().getTime();

      
       res = ( changeDate - date) / 1000 ;
      console.log(Math.ceil(res)) ;
    }
  }

  })()
 
 



 console.log('--------------Четвёртое задание on Window-------------------');



  

//const time = b.value;

 let button = document.querySelector('.btn');
 let inputIn = document.querySelector('#num');
 //console.log(inputIn);
 //let b = +inputIn.value ;
 const time = +inputIn.value;


 /* button.onclick =  () => {
   
    b = +inputIn.value;
    console.log(b);
    
 }; */
 
 
 document.querySelector('.btn').addEventListener('click',() =>{
  let inputIn = document.querySelector('#num').value;
  document.querySelector('#num').value = inputIn.value;
  console.log( inputIn); 
});
  

 
  
    const timer = endtime => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    
    return {
      'total': t,
      'minutes': minutes,
      'seconds': seconds
    };
    
  }

  
  
  function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds'); 

    
  
    function updateClock() {
      let t = timer(endtime);
  
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
        console.log('Timer end');

        function elem(){
        let newElem = document.createElement('h2');
        const Text = document.createTextNode('Timer end')
        newElem.appendChild(Text);
        document.body.appendChild(newElem);
    }
    elem();
        
        
      }
    }
  
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }
  
  let deadline = new Date(Date.parse(new Date()) +  time * 60 * 1000); // Для таймера
  initializeClock('countdown', deadline);



   