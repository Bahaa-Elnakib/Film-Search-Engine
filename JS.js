// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("Request opened")
//     const data = JSON.parse(this.responseText)
//     console.log(data)
// };

// req.onerror = function () {
//     console.log("Request denied")
//     console.log(this)
// };
// req.open('GET', "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,rain");
// req.send();

// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,rain"
// ).then(function (res) {
//     console.log("Resolved", res)
//     res.json().then(function (data) { console.log("first json", data) })
//     fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=windspeed_180m").then(function (res) {
//         console.log("Resolved", res)
//         res.json().then(function (data) { console.log("second json", data) })

//     })
// })
//     .catch(function (err) {
//         console.log("Failed to resolve", err)
//     })



// const filmrequest = async (Film) => {
//     // const config = { Header: { Accept: applicstion / json } }

//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${Film}`);
//     console.log(res.data[3].show.image.original)
// }

const form = document.querySelector('#search');
const fseacrch = document.querySelector('#FilmSearch');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const filmname = form.elements.FilmSearch.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${filmname}`);

    for (let i of res.data) {
        if (i.show.image) {
            const img = document.createElement('img');
            img.src = i.show.image.medium;
            img.style.margin = "50px 10px 20px 30px";
            document.body.appendChild(img);
        }
    }
    fseacrch.value = " ";

})


