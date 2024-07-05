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
        // weather api에서 제공하는 이미지 받아올 태크
        //const iconSpanWeather = document.querySelector("#weather-icon"); // 이건 css니까... iconSpan.firstChild가 안먹나바 -> getElementById 이건CSS 아니라서 가능할듯함 정리 필요.......ㅠㅡㅠㅡㅠ
        const iconSpanWeatherText = document.querySelector("#weather-icon-text"); 
        const tempSpan = document.querySelector("#temperature");

        citySpan.innerHTML = city;
        tempSpan.innerHTML = `${tempCeil}°` ;


        const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
        console.log(iconUrl);

        /* weather api 에서 제공하는 이미지를 받아옴. 다른 이미지를 사용해서 안쓰는데 일단 주석처리!
        const imgTag = document.createElement("img");
        imgTag.setAttribute('src',`https://openweathermap.org/img/wn/${weatherIcon}.png`);
        iconSpanWeather.appendChild(imgTag);
        */


        // iconSpanFirst.innerHTML = weather;  // 날씨 이미지로 보여주기
        iconSpanWeatherText.innerHTML = weather; // 날씨 영어로
        

        const myWeatherIcon = document.querySelector("#my-weather-icon");
        const backgroundImage = document.querySelector("body");
     
        if(weather === 'Clear' ){
            backgroundImage.classList.add('background-clear');
            myWeatherIcon.classList.add('clear-icon');

        }else if(weather === 'Clouds'){
            backgroundImage.classList.add('background-clouds');
            myWeatherIcon.classList.add('clouds-icon');

        }else if(weather === 'Thunderstorm'){
            backgroundImage.classList.add('.background-thunderstrom');
            myWeatherIcon.classList.add('thunderstrom-icon');
            
        }else if(weather === 'Drizzle'){
            backgroundImage.classList.add('.background-rain');
            myWeatherIcon.classList.add('rain-icon');

        }else if( weather === 'Rain'){
            backgroundImage.classList.add('.background-rain');
            myWeatherIcon.classList.add('rain-icon');

        }else if( weather === 'Snow'){
            backgroundImage.classList.add('.background-snow');
            myWeatherIcon.classList.add('snow-icon');

        }else if( weather === 'Mist'){
            backgroundImage.classList.add('.background-mist');
            myWeatherIcon.classList.add('mist-icon');

        }else if( weather === 'Atomosphere'){
            backgroundImage.classList.add('.background-mist');
            myWeatherIcon.classList.add('mist-icon');

        }else{
// default 
            backgroundImage.classList.add('.background-default');
            myWeatherIcon.classList.add('idontknow-icon');
        }
        
    })
}


/*
fetch(url)는 서버에 url로 request를 보내고 response로 받는 역할을 한다!
*/ 


function error(err){
    console.log(`ERROR(${err.cord}) : ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);