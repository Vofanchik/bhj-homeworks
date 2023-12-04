const storedText = localStorage.getItem('text');
const textEditor = document.getElementById('editor');

if(storedText !== null) {
    textEditor.value = storedText;
}

textEditor.addEventListener('input', () => {
    localStorage.setItem('text', textEditor.value);
})
