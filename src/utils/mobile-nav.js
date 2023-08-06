const mobileNav = ( ) => {
    const bars = document.querySelector(".header__bars");
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')
    let isMobileNavOpen = false;

    bars.addEventListener("click" , () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen){
            mobileNav.style.display = "flex"
            document.body.style.overflow = "hidden";
        }else{
            mobileNav.style.display = "none"
            document.body.style.overflow = "auto";
        }
    })

    mobileLinks.forEach((link) => {
        console.log("here"+link);
        link.addEventListener("click" , () => {
            isMobileNavOpen = false;
            mobileNav.style.display = "none"
            document.body.style.overflow = "auto";

        })
    })
}
export default mobileNav; 

