document.addEventListener("keydown", event => {
    let textarea = document.getElementById("keylogger");
    let key = event.key;
    if (/[a-z]/i.test(key)) {
        textarea.value += document.activeElement === textarea ? key + key : key;
    }
});
