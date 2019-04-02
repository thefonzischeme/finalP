function setup(){

    createCanvas(900,800);

}

function draw(){
    background(0);
    squares(4 + mouseY/10);

}



function squares (n = 10) {
  var s = width/n;
  var u = s/12;
    noStroke();
      for (var j = 0 ; j < n ; j++){
        for (var i = 0 ; i < n ; i++){
          fill(255,200,0);
          var x = i*s + u;
          var y = j*s + u;
          rect(x,y,10*u,10*u);

          fill(0,255,200);
          if( (i+j)%2==0){
            x = i*s +4*u;
            y = j*s +4*u;
            rect(x,y,4*u,4*u);
          }

              else {
                x = i*s + 3*u;
                y = j*s + 3*u;
                rect(x,y,6*u,6*u);
              }

        }
      }

}
