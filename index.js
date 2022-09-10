var skillprogress = document.querySelectorAll(".skill-progress > div");
var done = false;
var arrow= document.getElementById('top');
var img = document.getElementById('img');
var view = document.getElementsByClassName('view-img')





document.addEventListener('click', function(e){
    let trgt = e.target;
    if(trgt.className == 'img'){
        view[0].style.width= "500px";
        view[0].style.height= "400px";

        
    }else{
        view[0].style.width= "0px";
        view[0].style.height= "0px";
        
    }
});

window.addEventListener('scroll' , check);

function initializebar(){
    for(var bar of skillprogress){
        bar.style.width = 0 + '%';
        bar.setAttribute("done",false);
    }
    
}

initializebar();

function fillbar(bar){
    let width = 0;
    let target = bar.getAttribute('data-bar-width');

    let interval = setInterval(function(){
        if(width > target){
            clearInterval(interval);
        }
        width++;
        bar.style.width = width + "%";
    } ,6);
}

function verify(coordinates){
    if(coordinates.top < 1000){
        arrow.style.visibility = 'visible'
    }else{
        arrow.style.visibility = 'hidden'
    }
}

function check(){
    for(var bar of skillprogress){
        var coordinates = bar.getBoundingClientRect();
        verify(coordinates);
        if (bar.getAttribute("done") == "false" && coordinates.top < (window.innerHeight - coordinates.height)){
			bar.setAttribute("done",true);	
            fillbar(bar);
        } else if (coordinates.top > window.innerHeight){
            bar.setAttribute("done",false);
            initializebar();
        }
    }
}
