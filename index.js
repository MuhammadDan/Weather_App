// var list = document.getElementById('list');
// var row1 = document.getElementById('row1');
// var s = document.getElementById('search');
// let getWeather = ()=>{
//     let c_name = document.querySelector("#search").value;   
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=c7370e3917e916c0a0b4dc4d2ef0bc2c`)
//     .then((res)=>{
//         document.querySelector("#name").innerHTML=res.data.name
//        document.querySelector("#temp").innerHTML=Math.round(res.data.main.temp)+'°C'
//        document.querySelector("#description").innerHTML=res.data.weather[0].main
//        document.querySelector("#temp_max").innerHTML=`${Math.round(res.data.main.temp_max)}°C / ${Math.round(res.data.main.temp_min)}°C`
//        document.querySelector("#humidity").innerHTML=res.data.main.humidity+'%'
//        console.log(res);
//        s.value='';
//     })
//     .catch((err)=>{
//         console.log(err);
//         row1.innerHTML='';
//     })
// }
// // `` is called bactages and literal , lat means latitude, .then aik call back function hai,ager hum link mai unit aur uskai sath metric laga dai gai
// // to humai temperature sahi melaiga aur ager nahi lagai gai to default mai kya ayega standard ;
// // ab ap getelementbyid ki jagah queryselector lagao kyu kia yai apko pora ka pora tag utha kai dai deta hai aur ids bhi utha kai dai deta hai.


const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const max = document.getElementById('temp_max');
const humidity = document.getElementById('humidity');
const con = document.getElementById('weatherData');
searchButton.addEventListener('click', () => {
    const city = cityInput.value;

    if (city) {
        document.getElementById('text3').style.display="none";
        fetchWeather(city);
    }
    else if(city==''){
        con.innerHTML='';
    }
});

async function fetchWeather(city) {
    const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c7370e3917e916c0a0b4dc4d2ef0bc2c`);
    const data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = `${data.weather[0].description}`;
    max.textContent = `${Math.round(data.main.temp_max)}°C / ${Math.round(data.main.temp_min)}°C`
    humidity.textContent = `${data.main.humidity+'%'}`
    console.log("daniyal");
    cityInput.value="";
}
