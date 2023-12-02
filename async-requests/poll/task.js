const pollVars = new XMLHttpRequest()
const pollTitle = document.getElementById('poll__title')
const pollAns = document.getElementById('poll__answers')
pollVars.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
pollVars.onload = function(){
    if (pollVars.readyState == pollVars.DONE) {
        if (pollVars.status == 200){
            const response = JSON.parse(pollVars.responseText)
            createPoll(response.data.title, response.data.answers)
        }
        
    }
}
pollVars.send()

function createPoll(title, answers) { 
    pollTitle.innerText = title
    answers.forEach(element => {
        const button = document.createElement('button')
        button.className = 'poll__answer'
        button.innerText = element
        button.addEventListener('click', () => {
            alert('Ваш голос засчитан')
        })
        pollAns.append(button)
    });
}