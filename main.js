function search()
{
    request = document.getElementById("search_input").value;
   
    window.open("https://www.google.com/search?q="+request, "_blank");
}


fetch("https://api.nasa.gov/planetary/apod?api_key=gkskQ64DBd688IXX54MAx0czZKLCFoLbPW6Lv1ns")
.then(response => response.json())
.then(data => {
    console.log(data);

    const date = data.date;
    const Url = data.url;
    if(data.media_type=="image"){
    document.body.style.backgroundImage=`url(${Url})`;
    console.log(Url);}
    else{
       document.body.style.backgroundImage=`url("bg1.jpg")`;
    }
}
)
.catch(error => console.error(error));
  

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
            j++;
            const news = document.getElementsByClassName("news");

            news[j].onclick = () => 
            {
              window.open(r.link, "_blank");
            }
        }
    
        if(j==5)
        {
            break;
        }
        i++;
     }
})