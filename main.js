document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
       search();
    }
});
function search()
{
    request = document.getElementById("search_input").value;
   
    window.open("https://www.google.com/search?q="+request, "_blank");
}

function openPopup()
{
    document.getElementById("popup").classList.add("show");
}

function closePopup()
{
    document.getElementById("popup").classList.remove("show");
}

let time = document.getElementById("current-time");
setInterval(() => {
   let d = new Date();
   document.getElementById("current-time").innerHTML = d.toLocaleTimeString();
},1000);

fetch("https://api.nasa.gov/planetary/apod?api_key=gkskQ64DBd688IXX54MAx0czZKLCFoLbPW6Lv1ns")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.media_type === "image") {
            document.body.style.backgroundImage = `url("${data.url}")`;
        } else {
            document.body.style.backgroundImage = `url("bg1.jpg")`;
        }
    })
    .catch(error => console.error("Error:", error));
  

fetch("https://newsdata.io/api/1/latest?apikey=pub_e24609fef8744f52abe106bced183c7e&q=global news&language=en&removeduplicate=1")
.then(response => response.json())
.then(data => {
    j = 0;
    i=0;
     while( i >= 0)
     {
        const r = data.results[i];
        if(r.image_url != null)
        {
            document.getElementById("news"+j).innerHTML = r.title;
            console.log(r.title);
            console.log(r.image_url);
            console.log(r.link);
            
            document.getElementById("image"+j).style.backgroundImage = `url(${r.image_url})`;
            
            const news = document.getElementsByClassName("news");

            news[j].onclick =() =>
            {
              window.open(r.link, "_blank");
            }
            j++;
        }
    
        if(j==5)
        {
            break;
        }
        i++;
     }
})
//"https://www.google.com/s2/favicons?domain=${domain}&sz=${size}"

var Domains = ['github.com', 'discord.com', 'youtube.com', 'spotify.com', 'google.com', 'whatsapp.com'];



var storedData = localStorage.getItem('domain');

if (storedData == null) {
    localStorage.setItem('domain', JSON.stringify(Domains));
}
else {
    Domains = JSON.parse(storedData);
}

console.log(Domains);

for(let i = 0; i<6;i++)
{
    document.getElementById(`s${i}`).style.backgroundImage =
        `url("https://www.google.com/s2/favicons?domain=${Domains[i]}&sz=256")`;
}
for(let i = 0; i<6;i++)
{
    document.getElementById(`i${i}`).value = Domains[i];
}

function update() {
  for (let i = 0; i < 6; i++) {

        Domains[i] = document.getElementById(`i${i}`).value;

        document.getElementById(`s${i}`).style.backgroundImage =
            `url("https://www.google.com/s2/favicons?domain=${Domains[i]}&sz=256")`;
        console.log(Domains)
    }

    localStorage.setItem('domain', JSON.stringify(Domains));

    document.getElementById("popup").classList.remove("show");
}

function short(element) {
    console.log(Domains[element.id]);
    window.open("https://"+Domains[element.id.slice(-1)], "_blank");
}