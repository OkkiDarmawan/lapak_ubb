document.addEventListener("DOMContentLoaded", function () {
    const hargaPerItem = 300000;

    // Ambil elemen yang dibutuhkan
    const qtyInput = document.getElementById("qtyInput");
    const hargaElem = document.getElementById("harga");
    const btnTambah = document.getElementById("btnTambah");
    const btnKurang = document.getElementById("btnKurang");
    const btnHapus = document.getElementById("btnHapus");
    const cartContent = document.getElementById("cart-content");

    // Fungsi untuk memperbarui harga berdasarkan kuantitas
    function updateHarga() {
        const qty = parseInt(qtyInput.value) || 1;
        const totalHarga = hargaPerItem * qty;
        hargaElem.textContent = `Rp${totalHarga.toLocaleString("id-ID")}`;
    }

    // Event listener untuk tombol tambah
    btnTambah.addEventListener("click", function () {
        let qty = parseInt(qtyInput.value) || 1;
        qty++;
        qtyInput.value = qty;
        updateHarga();
    });

    // Event listener untuk tombol kurang
    btnKurang.addEventListener("click", function () {
        let qty = parseInt(qtyInput.value) || 1;
        if (qty > 1) {
            qty--;
            qtyInput.value = qty;
            updateHarga();
        }
    });

    // Event listener untuk tombol hapus
    btnHapus.addEventListener("click", function () {
        // Hapus isi dari elemen cart-content, menyisakan kolom dan tombol
        cartContent.innerHTML = `
            <tr>
                <td colspan="4" class="text-gray-500">Keranjang kosong</td>
            </tr>
        `;
    });

    // Update harga awal
    updateHarga();
});