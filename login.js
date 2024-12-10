const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const art_cell = loginForm.art_cell_select.value;
    console.log('art_cell');
    const username = loginForm.user.value;  
    console.log("username");

    if (art_cell === "Cell C" && username === "joey") {
        alert('Login Successful');
        location.reload();
    }
    else {
        alert('Login Unsuccessful. Please Try Again');
        location.reload();
    }
})