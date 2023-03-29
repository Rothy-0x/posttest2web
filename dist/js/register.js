const submit_button = document.querySelector(".button");
submit_button.onclick = function (e) {
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if (fname == "" || lname == "" || email == "" || pass == "" || cpass == "") {
        alert("Harap isi semua kolom");
        return;
    }

    let user = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass,
        cpassword: cpass
    }

    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Berhasil Registrasi");
    window.location.href = "index.html";
}
