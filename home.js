function darkModeFunc() {
    var e = document.getElementById("hi");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(3, 58, 91)"){
        //dark mode
        console.log("entered dark mode");
        //button
        document.getElementById("innerdarkmode").style.transform = "translate(24px, 0px)";
        document.getElementById("sunmoon").innerHTML = "☾";
        document.getElementById("sunmoon").style.top="0px";
        document.getElementById("sunmoon").style.fontSize="28px";
        //others
        document.getElementById("part1").style.background = "linear-gradient(#f5ad92, #c67486,#765e8d, #00577F 40%)";
        document.getElementById('hi').style.color = "rgb(3, 58, 90)";   
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
        document.getElementById("part1").style.background = "linear-gradient(#ffecf2,#f8f2ed, #afd8e4 40%)";
        document.getElementById('hi').style.color = "#033a5b";
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