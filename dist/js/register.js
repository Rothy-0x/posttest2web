const submit = document.getElementById("regis");
submit.onclick = function (e) {
    e.preventDefault();
    let uname = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if (uname == "" || email == "" || pass == "" || cpass == "") {
        alert("Harap isi semua kolom");
        return;
    }

    let user = {
        username: uname,
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
    window.location.href = "login.html";
}