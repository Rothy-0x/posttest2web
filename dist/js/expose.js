function saveData() {
    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var angkatan = document.getElementById("angkatan").value;
    var pekerjaan = [];
    var checkboxes = document.querySelectorAll('input[name="pekerjaan[]"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        pekerjaan.push(checkboxes[i].value);
    }

    var data = {
        Nama: nama,
        Email: email,
        Status: pekerjaan,
        Angkatan: angkatan
    };

    sessionStorage.setItem("data", JSON.stringify(data));
    alert("Data berhasil disimpan");
    window.location.href = "expose.html";
}