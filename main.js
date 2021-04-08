const carouselInner = document.querySelector('.carousel-inner')



// Part 1

const dogButton = document.querySelector('#dog-button')
const dogImage = document.querySelector('#dog-image')
const URL = 'https://dog.ceo/api/breeds/image/random'

dogButton.addEventListener('click', ()=>{
    fetch(URL)
        .then((data) => data.json())
        .then ((response)=>{
            dogImage.src = response.message
            
            const item = document.createElement('div')
            item.classList.add('carousel-item')
            // item.innerText.add('active')
            const picture = document.createElement('img')
            picture.src = response.message
            picture.classList.add('d-block')
            picture.classList.add('w-100')
            picture.alt='...'
            carouselInner.appendChild(item)
            item.appendChild(picture)
            
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
            const weatherBlock = document.querySelector('#weather-block')
            if (response.description ==='Light rain'){
                weatherBlock.style.backgroundImage = "url('images/62OPjF.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Sunny'){
                weatherBlock.style.backgroundImage = "url('images/unnamed.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Clear'){
                weatherBlock.style.backgroundImage = "url('images/clear.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Partly cloudy'){
                weatherBlock.style.backgroundImage = "url('images/cloudy.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Patchy rain possible'){
                weatherBlock.style.backgroundImage = "url('images/patchy.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Light snow'){
                weatherBlock.style.backgroundImage = "url('images/lightsnow.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Moderate rain at times'){
                weatherBlock.style.backgroundImage = "url('images/moderaterain.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Heavy snow shower'){
                weatherBlock.style.backgroundImage = "url('images/snow.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            } else if (response.description ==='Rain shower'){
                weatherBlock.style.backgroundImage = "url('images/rainshower.jpeg')" 
                weatherBlock.style.backgroundSize = '100%'
            }
        })
        .catch((error)=> console.log(error))
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
                const weatherBlock = document.querySelector('weather-block')
                if (response.description ==='Light rain'){
                    weatherBlock.style.backgroundImage = "url('images/62OPjF.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Sunny'){
                    weatherBlock.style.backgroundImage = "url('images/unnamed.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Clear'){
                    weatherBlock.style.backgroundImage = "url('images/clear.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Partly cloudy'){
                    weatherBlock.style.backgroundImage = "url('images/cloudy.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Patchy rain possible'){
                    weatherBlock.style.backgroundImage = "url('images/patchy.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Light snow'){
                    weatherBlock.style.backgroundImage = "url('images/lightsnow.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Moderate rain at times'){
                    weatherBlock.style.backgroundImage = "url('images/moderaterain.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Heavy snow shower'){
                    weatherBlock.style.backgroundImage = "url('images/snow.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                } else if (response.description ==='Rain shower'){
                    weatherBlock.style.backgroundImage = "url('images/rainshower.jpeg')" 
                    weatherBlock.style.backgroundSize = '100%'
                }
            })
            .catch((error)=> console.log(error))
    }
    
})

// Part 3

const jokeButton = document.querySelector('#joke-button')
const joke = document.querySelector('#joke')
const URL2 = 'https://icanhazdadjoke.com/'
let headers = new Headers({
    "Accept"       : "application/json",
    "User-Agent"   : "Bootstrapi (https://github.com/NSKvak01/bootstrapi)"
});

jokeButton.addEventListener('click', ()=>{
    fetch(URL2, {headers:headers})
        .then((data)=>data.json())
        .then((response)=>{
            joke.innerText = response.joke
        })
        .catch((error)=> console.log(error))
})

