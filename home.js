function darkModeFunc() {
    var e = document.getElementById("part1");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(250, 235, 215)"){
        //dark mode
        console.log("entered dark mode");
        //button
        document.getElementById("innerdarkmode").style.transform = "translate(24px, 0px)";
        document.getElementById("sunmoon").innerHTML = "☾";
        document.getElementById("sunmoon").style.top="0px";
        document.getElementById("sunmoon").style.fontSize="28px";
        //others
        document.getElementById("part1").style.background = "#4a6274";
        document.getElementById("about").style.color = "#D3D3D3";
        document.getElementById("contact").style.color = "#D3D3D3";
        document.getElementById("projects").style.color = "#D3D3D3";
        document.getElementById("one").style.background = "#D3D3D3";
        document.getElementById("two").style.background = "#D3D3D3";
        document.getElementById("three").style.backgroud = "#D3D3D3";
        document.getElementById("aboutme").style.color = "#87ceeb";
    }
    
    else{
        //light mode
        console.log("entered light mode");
        //button
        document.getElementById("innerdarkmode").style.transform = "translate(0px, 0px)";
        document.getElementById("sunmoon").innerHTML = "☀";
        document.getElementById("sunmoon").style.top="-2px";
        document.getElementById("sunmoon").style.fontSize="24px";
        //others
        document.getElementById("part1").style.background = "#faebd7";
        document.getElementById("about").style.color = "#033a5b";
        document.getElementById("contact").style.color = "#033a5b";
        document.getElementById("projects").style.color = "#033a5b";
        document.getElementById("one").style.background = "#033a5b";
        document.getElementById("two").style.background = "#033a5b";
        document.getElementById("three").style.backgroud = "#033a5b";
        document.getElementById("aboutme").style.color = "#faebd7";
    }
}

window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );