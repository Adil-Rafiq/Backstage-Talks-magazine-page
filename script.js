var screenWidth = window.innerWidth;
let body = document.querySelector('body');
let posters = document.querySelectorAll('.poster');
let ancherTags = document.querySelectorAll('.first-sec a');
let ancherTag1 = ancherTags[0];
let ancherTag2 = ancherTags[1];

if (screenWidth > 500){
    var Height = 357;
}
else if (screenWidth < 500){
    var Height = 217;
}

    document.addEventListener('scroll', function(){
        let scrollPos = window.scrollY;
        posters.forEach(function(value, index){
            let posterYoffSet = value.offsetTop;
            clrFadeInHeight = posterYoffSet + Height;
           
            if (scrollPos < 200 && innerHeight < 500){
                body.style.backgroundColor = "#fff";
                ancherTag1.style.color = "#E568AC";
                ancherTag2.style.color = "#E568AC";
            }
            else if (scrollPos < 400 && innerHeight > 500){
                body.style.backgroundColor = "#fff";
                ancherTag1.style.color = "#E568AC";
                ancherTag2.style.color = "#E568AC";
            }
            
            else if (scrollPos > clrFadeInHeight){
                if (index == 0){
                    body.style.backgroundColor = "#00c1b5";
                    ancherTag1.style.color = "#fff";
                    ancherTag2.style.color = "#fff";
                }
                else if (index == 1){
                    body.style.backgroundColor = "#ff651a";
                }
                else if (index == 2){
                    body.style.backgroundColor = "#ffbe00";
                }
                else if (index == 3){
                    body.style.backgroundColor = "#1d3fbb";
                }
                else if (index == 4){
                    body.style.backgroundColor = "#e30512";
                }
            }
        })
    })
