     var displayMinutes, displaySeconds;
     var sec = 60;
     var min = [25,5,30];
     var pomodoro = 3
     var state = true;
     
    function count () {
      
      var countSeconds = setInterval(function(){
        
       if(sec > 0){
          sec--;
         displaySeconds.innerHTML = sec < 10 ? '0' + sec : sec;
        } else if(sec == 0){
          
          
         
           if(min[0] > 1){
            min[0]--;
            displayMinutes.innerHTML = min[0] < 10 ? '0' + min[0] : min[0];
            sec = 60;
           } else if(pomodoro > 0) {
             if(min[1] > -1){
             displayMinutes.innerHTML = min[1] < 10 ? '0' + min[1] : min[1];
             min[1]--;
             sec = 60;
             } else if(min[1] == -1) {
               
               if (pomodoro > 0) {
                 count();
                 pomodoro--;
               }
               clearInterval(countSeconds);
               min[1] = 5
               min[0] = 25
             }
           } else if (pomodoro == 0){
            if(min[2] > 0){
             displayMinutes.innerHTML = min[2]
             min[2]--;
            } else {
              pomodoro--;
              clearInterval(countSeconds)
              min[1] = 5
              min[0] = 25
              min[2] = 30
            }
            
           }
           
        
      
      }
     
      
      },1)
      
    }
    
    function startPomodoro() {
      displayMinutes = document.getElementById("minutes");
      displaySeconds = document.getElementById("seconds");  
      count();
    }
