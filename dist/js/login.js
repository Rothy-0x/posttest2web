const login = document.querySelector('login');
login.onclick = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ngambil nilai array dari localstorage
    const users = JSON.parse(localStorage.getItem("users"));

    //Periksa apakah array users ada dan tidak kosong
    if (users && users.length) {
        // Melakukan perulangan pada array 
        for (let i = 0; i < users.length; i++) {
            if (username == users[i].username && password == users[i].password) {
                localStorage.setItem("username-logged-in", users[i].firstName)
                window.location.href = "Beranda.html";
                alert("Berhasil Login");
                return;
            }
        }
    }


    // jika salah penginputan
    alert("Masukkan username dan password dengan benar");
}