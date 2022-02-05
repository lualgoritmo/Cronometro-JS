
        let tempo = 0;
        var $time = document.querySelector('.time');
        let min = 0;
        let tHours = 0;
        var $start = document.querySelector('.start');
        var $pause = document.querySelector('.pause');
        var $stop = document.querySelector('.stop');
        var interval;

       function watch()
       {
           tempo++;
           
           if(tempo < 10)
           {
               document.querySelector('.time').innerHTML = `0${tHours}:0${min}:0${tempo}`;
           }

           else if(tempo === 60)
           {
                min++;                                                  
                tempo = 0;
                document.querySelector('.time').innerHTML = `0${tHours}:${min}:${tempo}`;
           }
           else if(min < 10)
           {
                document.querySelector('.time').innerHTML = `0${tHours}:0${min}:${tempo}`;
           }
           else if(min === 60)
           {
               tHours++;
               min = 0;
               document.querySelector('.time').innerHTML = `0${tHours}:0${min}:${tempo}`;
           }
           else
           {
                document.querySelector('.time').innerHTML = `${tHours}:${min}:${tempo}`;
           }
        }
       
       $start.addEventListener('click', () =>
       {
           interval = setInterval(watch,100);
       });

       $pause.addEventListener('click', () => 
       {
           clearInterval(interval);
       });

       $stop.addEventListener('click', () => 
       {
           clearInterval(interval);
           tempo = 0;
           min = 0;
           tHours = 0; 
           document.querySelector('.time').innerHTML = `00:00:00`;
       });