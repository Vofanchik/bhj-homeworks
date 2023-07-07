const output = document.getElementById("timer");
    

const addText = () => {
    
    output.textContent -= 1;
    if (output.textContent=="0") {
        clearInterval(interval);
        alert("Вы победили в конкурсе")
    }          
    
    }

  interval=setInterval(addText, 1000)