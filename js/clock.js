const clock = document.querySelector("#clock");
// const todayDate = document.querySelector("#today span:first-child");
// const todayDay = document.querySelector("#today span:nth-child(2)");

const todayDate = document.querySelector("#today-date");
const todayDay = document.querySelector("#tody-day");

const weekday = new Array(7);
weekday[0] = '일'; //1
weekday[1] = '월'; //2
weekday[2] = '화'; //3
weekday[3] = '수'; //4
weekday[4] = '목'; //5
weekday[5] = '금'; //6
weekday[6] = '토'; //7


function getClock(){
    
    let today = new Date();

    todayDate.innerHTML = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`;
    todayDay.innerHTML = `${weekday[today.getDay()]}요일`;
    // console.log(today.getDay());
    clock.innerText = `${String(today.getHours()).padStart(2,'0')} : ${String(today.getMinutes()).padStart(2,'0')} : ${String(today.getSeconds()).padStart(2,'0')}`;

}
getClock();
setInterval(getClock , 1000);