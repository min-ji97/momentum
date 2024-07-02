const API_KEY = "84c98328fa30ea37f5b17936c64a17e7"; 

//  https://openweathermap.org/img/wn/ 여기에 붙여 넣어야함 아이콘을!

function success(pos){
    const crd = pos.coords;

    const lat = crd.latitude;
    const lon = crd.longitude;

    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    console.log('url : ' , url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = data.weather[0].main;
        const weatherIcon = data.weather[0].icon;
        const city = data.name;

        const temp = data.main.temp-272;
        const tempCeil =  Math.ceil(temp*10)/10;

        console.log('온도가 잘 반올림 하는가 -> ', Math.ceil(temp*10)/10);
        
        const citySpan = document.querySelector("#city");
        const iconSpanFirst = document.querySelector("#weather-icon :first-child"); // 이건 css니까... iconSpan.firstChild가 안먹나바 -> getElementById 이건CSS 아니라서 가능할듯함 정리 필요.......ㅠㅡㅠㅡㅠ
        const iconSpanLast = document.querySelector("#weather-icon :last-child"); 
        const tempSpan = document.querySelector("#temperature");

        citySpan.innerHTML = city;
        tempSpan.innerHTML = `${tempCeil}°` ;


        const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
        console.log(iconUrl);

        const imgTag = document.createElement("img");
        imgTag.setAttribute('src',`https://openweathermap.org/img/wn/${weatherIcon}.png`);

        iconSpanFirst.appendChild(imgTag);

        // iconSpanFirst.innerHTML = weather;  // 날씨 이미지로 보여주기
        iconSpanLast.innerHTML = weather; // 날씨 영어로
        
        
        
    })
}


/*
fetch(url)는 서버에 url로 request를 보내고 response로 받는 역할을 한다!
*/ 


function error(err){
    console.log(`ERROR(${err.cord}) : ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);