
        let tempo = 0;
        var $time = document.querySelector('.time');
        let min = 0;
        let tHours = 0;
        var $start = document.querySelector('.start');
        var $pause = document.querySelector('.pause');
        var $stop = document.querySelector('.stop');
        
       function watch()
       {
           tempo++;
           
           if(tempo === 60)
           {
               min++;
               tempo = 0;
           }
           tempo < 10 ? document.querySelector('.time').innerHTML = `${min}:0${tempo}`
              :document.querySelector('.time').innerHTML = `${min}:${tempo}`;
       }

       $start.addEventListener('click', () =>
       {
           setInterval(watch,1000);
       });