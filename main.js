let form = document.querySelector('form')
let input = document.querySelector('input')
let timeset = document.querySelector('#timeset')
let card = document.querySelector('#card')
let body = document.querySelector('body')

const getweather = (async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=547216efd52b4cc489082338230507&q=${input.value}&aqi=yes`)
    const data = await response.json();
    body.style.backgroundImage = `url("https://source.unsplash.com/random/?${data.current.condition.text}")`
    body.style.backgroundPosition= 'center'
    card.innerHTML=`<span class="d-flex justify-content-center ">
    <h5 class="city fs-4" id="city">${data.location.name},</h5>
    <h5 class="country fs-4" id="country">${data.location.country}</h5>
    </span>

    <span class="d-flex justify-content-center">
        <img id="img"  src=${data.current.condition.icon}  alt="">
        <h2 class="temp mt-4 ms-2" id="temp">${data.current.temp_c} </h2>
    </span>
            
    <p id="humid" class="fs-6 fw-semibold"><i class="bi bi-thermometer-sun fs-5"></i>Humidity:&nbsp;${data.current.humidity}%</p>
    <p id="winds" class="fs-6 fw-semibold"><i class="bi bi-wind fs-5 "></i>Windspeed:&nbsp;${data.current.wind_kph}kph</p>
    <p id="airtemp" class="fs-6 fw-semibold"><img src="./OIP__1_-removebg-preview.png" width="30px" height="30px" alt="">Oxygen:&nbsp;${data.current.air_quality.o3}</p>
    <p id="clouds" class="fs-6 fw-semibold"><i class="bi bi-cloud fs-5 "></i>Cloud:&nbsp;${data.current.cloud}%</p>`
    let time = data.location.localtime
    timeset.innerText = time
    form.reset()
})


form.addEventListener('submit', getweather)