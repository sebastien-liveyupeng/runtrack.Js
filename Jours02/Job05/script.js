window.addEventListener("scroll", () => {
    let percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("scrollFooter").style.backgroundColor = `hsl(${percent}, 100%, 50%)`;
});