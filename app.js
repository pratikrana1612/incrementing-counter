const h1 = document.querySelectorAll('div h1');
let tweet=200;
let you=200;
let fac=200;

const tweeter  = () =>
{
    tweet=tweet+100;
    h1[0].textContent = tweet;
    if(tweet === 12000)
    {
        clearInterval(TwiInterval);
    }
}
const youtube  = () =>
{
    you=you+40;
    h1[1].textContent = you;
    if(you === 5000)
    {
        clearInterval(youInterval);
    }
}
const face  = () =>
{
    fac=fac+50;
    h1[2].textContent = fac;
    if(fac === 7500)
    {
        clearInterval(faceInterval);
    }
}

const TwiInterval = setInterval(tweeter,1);
const youInterval= setInterval(youtube,1);
const faceInterval = setInterval(face,1);