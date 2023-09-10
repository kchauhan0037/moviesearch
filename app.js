var inputsearch=document.getElementById('nameinput')
var searchbtn=document.getElementById('searchbtn')
var moviewrapper=document.getElementById('wrapper')
var textload=document.getElementById('textload')
var inputbox=document.getElementById('inputbox')
searchbtn.addEventListener('click',function(){

    // inputbox.classList.add('hideclass')

    moviewrapper.innerHTML=""
    textload.innerText="Loading....... Please Wait!!"

    $.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${inputsearch.value}`,function(response){
       
    textload.innerText=""
    console.log(response.Response)
       if(response.Response=="True"){
        var movielist=response.Search
        for(var i=0;i<movielist.length;i++){
            moviewrapper.innerHTML+=`<div class="movie-card">
            <img class="poster" src="${movielist[i].Poster}" alt="">
            <p class= "title"><b>${movielist[i].Title}</b></p>
            <p class="year"><b>${movielist[i].Year}</b></p>
             </div>`
        }
       }else{
        moviewrapper.innerText=`404 Page not Found`
       }
    
   
    
})
})