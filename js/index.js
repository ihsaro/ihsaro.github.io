window.onscroll = () => {
    adaptNavigationBar();
    toggleGoToTopWidget();
}

adaptNavigationBar = () => {
    let navigationBar = document.getElementById('nav-bar');
    let navigationBarItems = document.getElementsByClassName('nav-item');

    if (document.documentElement.scrollTop === 0) {
        navigationBar.classList.remove('navbar-dark');
        navigationBar.classList.remove('bg-dark');
        navigationBar.classList.add('navbar-light');
        navigationBar.classList.add('bg-light');
        for (i = 0; i < navigationBarItems.length; i++) {
            navigationBarItems[i].classList.remove('nav-item-hover-background-change-dark');
            navigationBarItems[i].classList.add('nav-item-hover-background-change-light');
        }
    }
    else {
        navigationBar.classList.remove('navbar-light');
        navigationBar.classList.remove('bg-light');
        navigationBar.classList.add('navbar-dark');
        navigationBar.classList.add('bg-dark');
        for (i = 0; i < navigationBarItems.length; i++) {
            navigationBarItems[i].classList.remove('nav-item-hover-background-change-light');
            navigationBarItems[i].classList.add('nav-item-hover-background-change-dark');
        }
    }
}

toggleGoToTopWidget = () => {

    // userAction();

    $(document).ready(function () {
        if (document.documentElement.scrollTop === 0) {
            $("#divArrowGoToTop").fadeOut(500);
        }
        else {
            $("#divArrowGoToTop").fadeIn(500);
        }
    });
}

goToTop = () => {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("goToTop()", 15);
    } else clearTimeout(scrollAnimation);
}
/*
const userAction = async () => {
    const response = await fetch('https://abusiveexperiencereport.googleapis.com/v1/violatingSites');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}
*/