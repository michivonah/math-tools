// functions.js
// Michi von Ah - 2022

function toggleSection(sectionName, type){
    var section = document.getElementById(sectionName);
    if(section.style.display == "block" || section.style.display == "flex"){
      section.style.display = "none";
    }
    else{
      section.style.display = type;
    }
  }


  function toggleClass(className){
    var elements = document.getElementsByClassName(className);
    for(var i = 0; i < elements.length; i++){
      if(elements[i].style.display == "block"){
        elements[i].style.display = "none";
      }
      else{
        elements[i].style.display = "block";
      }
    }
  }

  function changeTool(){
    var allTools = document.getElementsByClassName('tool');
    for(var i = 0; i < allTools.length; i++){
      var current = allTools[i].id;
      var toolId = allTools[i].dataset.toolid;
      var state = document.getElementById(toolId).checked;
      if(state == true) document.getElementById(current).style.display = "block";
      else document.getElementById(current).style.display = "none";
    }
  }

  function toggleNavigation(mode){
    var toggleBtn = document.getElementById("openNavbar");
    var nav = document.getElementById("toolNavigation");
    if(window.innerWidth <= 640){
      if(mode == "show"){
        nav.style.left = 0;
        toggleBtn.style.display = "none";
      }
      else{
        nav.style.left = "-100%";
        toggleBtn.style.display = "flex";
      }
    }
  }

  function copyClipboard(contentID){
    var copyTxt = document.getElementById(contentID).value;
    navigator.clipboard.writeText(copyTxt);
  }