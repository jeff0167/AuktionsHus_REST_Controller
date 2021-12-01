app.component('navigations-bar', {

    template: 
    /*html*/
    `   <div id="navdiv">
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <a class="navbar-brand" href="./index.html" id="logoButton"><img src="Images/hus.png" alt="logo" class="rounded-circle"></a>
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="./index.html" id="homeButton">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="katalog.html" id="katalogButton">Katalog</a>
            <a class="nav-item nav-link" href="#">Placeholder</a>
            <a class="nav-item nav-link" href="createAuction.html">Auction</a>
            <a class="nav-item nav-link" href="./login.html">Profil</a>
        </div>
        <div class="justify-content-end">
            <a class="nav-item nav-link border border-dark" href="./login.html" id="loginButton">Login</a>
            <a class="nav-item nav-link" href="./createUser.html" id="signUpButton">Sign up</a>
        </div>
    </nav>
</div>`,
  })