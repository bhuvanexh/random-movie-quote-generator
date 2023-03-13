const data = [
    {
        img: './assets/taxi.jpg',
        movie: 'Taxi Driver (1976)',
        quote: "Loneliness has followed me my whole life. Everywhere. In bars, in cars, sidewalks, stores, everywhere. There's no escape. I'm God's lonely man...",
        person: 'Travis (Robert De Niro)'
    },
    {
        img: './assets/taxi2.jpg',
        movie: 'Taxi Driver (1976)',
        quote: "All the animals come out at night - whores, skunk pussies, buggers, queens, fairies, dopers, junkies, sick, venal. Someday a real rain will come and wash all this scum off the streets.",
        person: 'Travis (Robert de Niro)'
    },
    {
        img: './assets/blade.jpg',
        movie: 'Blade Runner 2049 (2017)',
        quote: "you look lonely... i can fix that",
        person: 'joi (ana de armas)'
    },
    {
        img: './assets/bladeOrg.jpg',
        movie: 'Blade Runner (1982)',
        quote: "All those moments will be lost in time, like tears in rain",
        person: 'Roy (Rutger Hauer)'
    },
    {
        img: './assets/eternal.jpg',
        movie: 'Eternal Sunshine of the Spotless Mind (2004)',
        quote: "If only I could meet someone new",
        person: 'Joel (Jim Carrey)'
    },
    {
        img: './assets/lleywn.jpg',
        movie: 'Inside Llewyn Davis (2013)',
        quote: "I'm tired. I thought I just needed a night's sleep but it's more than that.",
        person: 'Llewyn Davis (Oscar Issac)'
    },
    {
        img: './assets/there.jpg',
        movie: 'There Will Be Blood (2007)',
        quote: "I have a competition in me. I want no one else to succeed. I hate most people.",
        person: 'Daniel (Daniel Day-Lewis)'
    },
    {
        img: './assets/there2.jpg',
        movie: 'There Will Be Blood (2007)',
        quote: "There are times when I look at people and I see nothing worth liking. I want to earn enough money I can get away from everyone.",
        person: 'Daniel (Daniel Day-Lewis)'
    },
    {
        img: './assets/scar.jpg',
        movie: 'Scarface (1983)',
        quote: "You Need People Like Me So You Can Point Your Fuckin' Fingers And Say, 'That's The Bad Guy!'",
        person: 'Tony Montana (Al Pacino)'
    },
    {
        img: './assets/night.jpg',
        movie: 'Nightcrawler (2014)',
        quote: "What if my problem wasn’t that I don’t understand people, but that I don’t like them?",
        person: 'Lou Bloom (Jake Gyllenhaal)'
    },
    {
        img: './assets/night2.jpg',
        movie: 'Nightcrawler (2014)',
        quote: "There's certain good things about being alone.",
        person: 'Lou Bloom (Jake Gyllenhaal)'
    },
    {
        img: './assets/fight.jpg',
        movie: 'Fight Club (1999)',
        quote: "It's Only After We've Lost Everything That We're Free To Do Anything.",
        person: 'Tyler (Brad Pitt)'
    },
    {
        img: './assets/fight2.jpg',
        movie: 'Fight Club (1999)',
        quote: "I Found Freedom. Losing All Hope Was Freedom.",
        person: 'Narrator (Edward Norton)'
    },
    {
        img: './assets/fight2.jpg',
        movie: 'Fight Club (1999)',
        quote: "I Found Freedom. Losing All Hope Was Freedom.",
        person: 'Narrator (Edward Norton)'
    },
    {
        img: './assets/HER.jpg',
        movie: 'HER (2013)',
        quote: "Sometimes I think I have felt everything I’m ever gonna feel. And from here on out, I’m not gonna feel anything new. Just lesser versions of what I’ve already felt.",
        person: 'Theodore (Joaquin Phoenix)'
    },
    {
        img: './assets/detach.jpg',
        movie: 'Detachment (2011)',
        quote: "That bag, it doesn't have any feeling, it's empty. I don't have any feeling you can hurt either",
        person: 'Henry Barthes (Adrien Brody)'
    },
    {
        img: './assets/godf.jpg',
        movie: 'Godfather (1972)',
        quote: "I’m gonna make him an offer he can’t refuse.",
        person: 'Don Vito (Marlon Brando)'
    },
    {
        img: './assets/godf2.jpg',
        movie: 'Godfather (1972)',
        quote: "Look How They Massacred My Boy.",
        person: 'Don Vito (Marlon Brando)'
    },
    {
        img: './assets/godf2.jpg',
        movie: 'Godfather (1972)',
        quote: "Look How They Massacred My Boy.",
        person: 'Don Vito (Marlon Brando)'
    },
    {
        img: './assets/godf3.jpg',
        movie: 'Godfather (1972)',
        quote: "Just When I Think I'm Out, They Pull Me Back In.",
        person: 'Michael (Al Pacino)'
    },
    {
        img: './assets/inglo.jpg',
        movie: 'Inglorious Basterds (2009)',
        quote: "You know somethin’, Utivich? I think this just might be my masterpiece.",
        person: 'Lt. Aldo (Brad Pitt)'
    },
    {
        img: './assets/fury.jpg',
        movie: 'Fury (2014)',
        quote: "She'll let you fuck her for a chocolate bar.",
        person: 'Trini (Michael PEÑA)'
    },
    {
        img: './assets/goodf.jpg',
        movie: 'Goodfellas (1990)',
        quote: "You know, we always called each other goodfellas. Like you’d say to somebody: ‘You’re gonna like this guy, he’s all right. He’s a goodfella. He’s one of us.’ You understand? We were goodfellas, wiseguys.",
        person: 'Henry Hill (Ray Liotta)'
    },
    {
        img: './assets/americ.jpg',
        movie: 'American Psycho (2000)',
        quote: "My pain is constant and sharp and I do not hope for a better world for anyone, in fact I want my pain to be inflicted on others.",
        person: 'Patrick (Christian Bale)'
    },
    {
        img: './assets/machi.jpg',
        movie: 'The Machinist (2004)',
        quote: "How can you wake up from a nightmare if you are not asleep?",
        person: 'Trevor (Christian Bale)'
    },
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (array.length));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


shuffleArray(data);

const quoteBody = document.querySelector('.quoteBody')
const movie = document.querySelector('.movie')
const person = document.querySelector('.person')
const quote = document.querySelector('.quote')
const img = document.querySelector('.img img')
const btn = document.querySelector('.down button')

let i = data.length - 1;

const assign = () => {
    movie.innerText = data[i].movie;
    quote.innerText = ` "${data[i].quote}"`;
    person.innerText = `- ${data[i].person}`;
    quoteBody.style.backgroundImage = `url(${data[i].img})`
    img.src = data[i].img;
    i--;
    if (i < 0) {
        i = data.length - 1;
    }
}

assign();

btn.addEventListener('click', assign)


