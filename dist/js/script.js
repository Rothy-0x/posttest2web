// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;


    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Humberger

const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');


humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

// Helo user

const loggedInUsername = localStorage.getItem('username-logged-in')

if (loggedInUsername) {
    const hello = document.getElementById('hello')
    hello.innerHTML = localStorage.getItem('username-logged-in')
}


// Contact me

function saveData() {
    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pekerjaan = [];
    var checkboxes = document.querySelectorAll('input[name="pekerjaan[]"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        pekerjaan.push(checkboxes[i].value);
    }
    var angkatan = document.getElementById("angkatan").value;

    var data = {
        Nama: nama,
        Email: email,
        Status: pekerjaan,
        Angkatan: angkatan
    };

    sessionStorage.setItem("data", JSON.stringify(data));
    alert("Data berhasil disimpan");
    window.location.href = "../html/expose.html";
    // console.log(JSON.parse(sessionStorage.getItem("data")))
}