let p = 0;


function addPercent(lP) {
  p=p+lP;
  if (p>100) {
    p=100;
  }
  $("#my-progress-bar").width(p+"%");  
}


function init() {
  $("#button-1p").click(function() {
     addPercent(1);
  });
  $("#button-3p").click(function() {
     addPercent(3);
  });
  $("#button-7p").click(function() {
     addPercent(7);
  });    
}

$(document).ready(init); 
