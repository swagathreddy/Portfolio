
        function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "Read more"; 
         moreText.style.display = "none";
        } else {
         dots.style.display = "none";
         btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
       }
     
       let menu=document.querySelector("#menu");
       let navbar=document.querySelector('.navbar');
       menu.onclick=()=>{
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    let sections=document.querySelectorAll('section');
    let navlinks=document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top =window.scrollY;
            let offset=sec.offsetTop-100;
            let height=sec.offsetHeight;
            let is=sec.getAttribute('id');

            if(top >= offset && top<offset + height){
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        let header =document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>100);
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
    





        let btn=document.getElementById("btn");
        let btntext=document.getElementById("btntext");
        let btnimg=document.getElementById("btnimg");
        btn.onclick=function(){
            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){
                btnimg.src="images/sun.png";
                btntext.innerHTML= "Light";
            }
            else{
                btnimg.src="images/moon.png";
                btntext.innerHTML= "Dark";
            }
        }
