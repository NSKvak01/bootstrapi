// Part 1

const dogButton = document.querySelector('#dog-button')
const dogImage = document.querySelector('#dog-image')
const URL = 'https://dog.ceo/api/breeds/image/random'

dogButton.addEventListener('click', ()=>{
    fetch(URL)
        .then((data) => data.json())
        .then ((response)=>{
            dogImage.src = response.message
        })
        .catch((error)=> console.log(error))
})




// Part 2

const weatherButton = document.querySelector('#weather-button')
const temperature = document.querySelector('#temperature')
const wind = document.querySelector('#wind')
const description  = document.querySelector('#description')

weatherButton.addEventListener('click', ()=>{
    const input = document.querySelector('#weather')
    inputValue = input.value
    // inputValue.replace()
    const URL1 = "https://goweather.herokuapp.com/weather/"+inputValue
    fetch(URL1)
        .then ((data)=>data.json())
        .then ((response)=>{
            temperature.innerText = response.temperature
            wind.innerText = response.wind
            description.innerText = response.description
            const body = document.querySelector('body')
            if (response.description ==='Light rain'){
                body.style.backgroundImage = "url('images/62OPjF.jpeg')" 
                body.style.backgroundSize = '100%'
            } else if (response.description ==='Sunny'){
                body.style.backgroundImage = "url('images/unnamed.jpeg')" 
                body.style.backgroundSize = '100%'
            } else if (response.description ==='Clear'){
                body.style.backgroundImage = "url('images/clear.jpeg')" 
                body.style.backgroundSize = '100%'
            } else if (response.description ==='Partly cloudy'){
                body.style.backgroundImage = "url('images/cloudy.jpeg')" 
                body.style.backgroundSize = '100%'
            } else if (response.description ==='Patchy rain possible'){
                body.style.backgroundImage = "url('images/patchy.jpeg')" 
                body.style.backgroundSize = '100%'
            } else if (response.description ==='Light snow'){
                body.style.backgroundImage = "url('images/lightsnow.jpeg')" 
                body.style.backgroundSize = '100%'
            } else if (response.description ==='Moderate rain at times'){
                body.style.backgroundImage = "url('images/moderaterain.jpeg')" 
                body.style.backgroundSize = '100%'
            }
        })
})

document.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        const input = document.querySelector('#weather')
        inputValue = input.value
        const URL1 = "https://goweather.herokuapp.com/weather/"+inputValue
        fetch(URL1)
            .then ((data)=>data.json())
            .then ((response)=>{
                temperature.innerText = response.temperature
                wind.innerText = response.wind
                description.innerText = response.description
                const body = document.querySelector('body')
                if (response.description ==='Light rain'){
                    body.style.backgroundImage = "url('images/62OPjF.jpeg')" 
                    body.style.backgroundSize = '100%'
                } else if (response.description ==='Sunny'){
                    body.style.backgroundImage = "url('images/unnamed.jpeg')" 
                    body.style.backgroundSize = '100%'
                } else if (response.description ==='Clear'){
                    body.style.backgroundImage = "url('images/clear.jpeg')" 
                    body.style.backgroundSize = '100%'
                } else if (response.description ==='Partly cloudy'){
                    body.style.backgroundImage = "url('images/cloudy.jpeg')" 
                    body.style.backgroundSize = '100%'
                } else if (response.description ==='Patchy rain possible'){
                    body.style.backgroundImage = "url('images/patchy.jpeg')" 
                    body.style.backgroundSize = '100%'
                } else if (response.description ==='Light snow'){
                    body.style.backgroundImage = "url('images/lightsnow.jpeg')" 
                    body.style.backgroundSize = '100%'
                } else if (response.description ==='Moderate rain at times'){
                    body.style.backgroundImage = "url('images/moderaterain.jpeg')" 
                    body.style.backgroundSize = '100%'
                }
            })
    }
})