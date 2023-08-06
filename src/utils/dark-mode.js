const darkMode = () => {
    const themeToggleButtons = document.querySelectorAll("#theme-toggle")
    const theme = localStorage.getItem("theme");
    
    // On mount
    theme && document.body.classList.add(theme)
    
    // Handlers
    const handleThemeToggle = () =>{
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains('light-mode')){
            localStorage.setItem("theme","light-mode")
        }else{
            localStorage.removeItem("theme");
            document.body.removeAttribute("class");
        }
    };

    // Events
    themeToggleButtons.forEach( (btn) => {
        btn.addEventListener("click", handleThemeToggle);
    })  
}

export default darkMode;

