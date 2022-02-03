
        let tempo = 0;
        let min = 0;
        let tHours = 0;
        let $seconds = document.querySelector('.tempo');
        let $minuts = document.querySelector('.tempo');
        console.log($minuts);
        
        setInterval(()=>
        {  
            hours();
            seconds();
            minuts();
        }, 100);

        const seconds = () =>
        {
           tempo++;
           tempo < 10 ?  $seconds.innerHTML = `0${tempo}`
                :  $seconds.innerHTML = `${tempo}`;
                minuts();
        }
        const minuts = () =>
        {
            if(tempo === 60)
            {
                min++;
                tempo = 0;
               $minuts.innerHTML = `${min}`;
               console.log(min);
            }
        }
       const hours = () =>
       {
           if(min === 60)
           {
               tHours++;
               console.log('Horas');
           }
       }