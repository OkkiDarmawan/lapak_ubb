document.addEventListener("DOMContentLoaded", function () {
    const btnBayar = document.getElementById("btnBayar");
    const popupOverlay = document.getElementById("popupOverlay");
    const btnPesan = document.getElementById("btnPesan");
    const btnClose = document.getElementById("btnClose");
    const btnCOD = document.getElementById("btnCOD");
    const btnBRI = document.getElementById("btnBRI");

    let metodeDipilih = null; // Variable untuk menyimpan metode pembayaran yang dipilih

    // Event listener untuk tombol bayar
    btnBayar.addEventListener("click", function () {
        popupOverlay.style.display = "flex"; // Menampilkan popup
    });

    // Event listener untuk tombol tutup pada popup
    btnClose.addEventListener("click", function () {
        popupOverlay.style.display = "none"; // Menyembunyikan popup
        resetSelection(); // Reset pilihan ketika popup ditutup
    });

    // Event listener untuk tombol COD
    btnCOD.addEventListener("click", function () {
        metodeDipilih = "COD";
        btnCOD.classList.add("bg-blue-300"); // Menambahkan warna untuk menunjukkan dipilih
        btnBRI.classList.remove("bg-blue-300"); // Menghapus warna dari tombol lainnya
        enablePesanButton(); // Cek apakah tombol Buat Pesanan bisa diaktifkan
    });

    // Event listener untuk tombol BRI
    btnBRI.addEventListener("click", function () {
        metodeDipilih = "BRI";
        btnBRI.classList.add("bg-blue-300");
        btnCOD.classList.remove("bg-blue-300");
        enablePesanButton();
    });

    // Fungsi untuk mengaktifkan tombol "Buat Pesanan"
    function enablePesanButton() {
        if (metodeDipilih) {
            btnPesan.classList.remove("disabled");
            btnPesan.removeAttribute("disabled");
        }
    }

    // Fungsi untuk mereset pilihan metode pembayaran
    function resetSelection() {
        metodeDipilih = null;
        btnPesan.classList.add("disabled");
        btnPesan.setAttribute("disabled", "disabled");
        btnCOD.classList.remove("bg-blue-300");
        btnBRI.classList.remove("bg-blue-300");
    }

    // Event listener untuk tombol Buat Pesanan
    btnPesan.addEventListener("click", function () {
        if (metodeDipilih) {
            alert(`Pesanan berhasil dibuat dengan metode pembayaran: ${metodeDipilih}`);
            popupOverlay.style.display = "none"; // Menutup popup setelah pesanan dibuat
            resetSelection(); // Reset pilihan setelah pesanan dibuat
        }
    });
});
