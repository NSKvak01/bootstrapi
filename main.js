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
            } else if (response.description ==='Light rain and snow'){
                weatherBlock.style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-s/09/c2/94/2a/roosevelt-island-aerial.jpg')" 
                weatherBlock.style.backgroundSize = '100%'
            }

            const item = document.createElement('div')
            item.classList.add('carousel-item')
            const info =document.createElement('div')
            info.classList.add('d-block')
            info.classList.add('w-100')
            const temp = document.createElement('div')
            info.classList.add('info')
            const wi = document.createElement('div')
            const desc = document.createElement('div')
            temp.innerText=response.temperature
            wi.innerText=response.wind
            desc.innerText = response.description
            info.alt='...'
            info.appendChild(temp)
            info.appendChild(wi)
            info.appendChild(desc)
            carouselInner.appendChild(item)
            item.appendChild(info)

            if (response.description ==='Light rain'){
                info.style.backgroundImage = "url('images/62OPjF.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Sunny'){
                info.style.backgroundImage = "url('images/unnamed.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Clear'){
                info.style.backgroundImage = "url('images/clear.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Partly cloudy'){
                info.style.backgroundImage = "url('images/cloudy.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Patchy rain possible'){
                info.style.backgroundImage = "url('images/patchy.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Light snow'){
                info.style.backgroundImage = "url('images/lightsnow.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Moderate rain at times'){
                info.style.backgroundImage = "url('images/moderaterain.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Heavy snow shower'){
                info.style.backgroundImage = "url('images/snow.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Rain shower'){
                info.style.backgroundImage = "url('images/rainshower.jpeg')" 
                info.style.backgroundSize = '100%'
            } else if (response.description ==='Light rain and snow'){
                info.style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-s/09/c2/94/2a/roosevelt-island-aerial.jpg')" 
                info.style.backgroundSize = '100%'
            }
        })
        .catch((error)=> console.log(error))
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

            const item = document.createElement('div')
            item.classList.add('carousel-item')
            
            const sentence = document.createElement('div')
            sentence.classList.add('d-block')
            sentence.classList.add('w-100')
            sentence.innerText=response.joke
            sentence.classList.add('sentence')
            sentence.alt='...'
            carouselInner.appendChild(item)
            item.appendChild(sentence)

        })
        .catch((error)=> console.log(error))
})

