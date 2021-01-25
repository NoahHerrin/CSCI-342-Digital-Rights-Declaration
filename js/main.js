var home = document.getElementById("home-link");
var declaration = document.getElementById("declaration-link");
var authors = document.getElementById("authors-link");

// Initially give home is-active
// home.classList.add("is-active");

function removeClass(linkOne, linkTwo) {
    $(linkOne).removeClass("is-active")
    $(linkTwo).removeClass("is-active")
}

$(home).on('click', function(){
    home.classList.add("is-active");
    removeClass(declaration, authors);
});

$(declaration).on('click', function(){
    declaration.classList.add("is-active");
    removeClass(home, authors);
});

$(authors).on('click', function(){
    authors.classList.add("is-active");
    removeClass(home, declaration);
});