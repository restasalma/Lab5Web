
/* =========================================
   LATIHAN 1 — Hello World
   ========================================= */

document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


/* =========================================
   LATIHAN 2 — Input Nama Pengguna
   ========================================= */

const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}


/* =========================================
   LATIHAN 3 — Operasi Dasar
   ========================================= */

function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

operasiDasar(9, 4);


/* =========================================
   LATIHAN 4 — Percabangan Nilai Mahasiswa
   ========================================= */

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}


/* =========================================
   LATIHAN 5 — Switch Case
   ========================================= */

const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}


/* =========================================
   LATIHAN 6 — Mengecek Bilangan Genap/Ganjil
   ========================================= */

function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}


/* =========================================
   LATIHAN 7 — Mengubah Warna Latar
   ========================================= */

function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}


/* =========================================
   LATIHAN 8 — Menghitung Total Menu
   ========================================= */

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;

  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  document.getElementById("total").textContent =
    total.toLocaleString("id-ID");
}


/* =========================================
   MINI PROJECT — Menghitung Nilai Akhir
   Bobot: Tugas 30%, UTS 30%, UAS 40%
   ========================================= */

function prosesNilai() {
  const inputTugas = document.getElementById("tugas").value;
  const inputUTS = document.getElementById("uts").value;
  const inputUAS = document.getElementById("uas").value;
  const hasil = document.getElementById("hasilNilai");

  if (
    inputTugas.trim() === "" ||
    inputUTS.trim() === "" ||
    inputUAS.trim() === ""
  ) {
    hasil.textContent = "Semua nilai harus diisi.";
    return;
  }

  const tugas = Number(inputTugas);
  const uts = Number(inputUTS);
  const uas = Number(inputUAS);

  if (
    !Number.isFinite(tugas) ||
    !Number.isFinite(uts) ||
    !Number.isFinite(uas) ||
    tugas < 0 || tugas > 100 ||
    uts < 0 || uts > 100 ||
    uas < 0 || uas > 100
  ) {
    hasil.textContent = "Nilai harus berupa angka dari 0 sampai 100.";
    return;
  }

  const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(nilaiAkhir);
  const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

  tampilkanHasil(nilaiAkhir, predikat, status);
}

function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) {
    return "A";
  } else if (nilai >= 75) {
    return "B";
  } else if (nilai >= 60) {
    return "C";
  } else if (nilai >= 50) {
    return "D";
  } else {
    return "E";
  }
}

function tampilkanHasil(nilai, predikat, status) {
  document.getElementById("hasilNilai").textContent =
    "Nilai akhir: " + nilai.toFixed(2) +
    " | Predikat: " + predikat +
    " | Status: " + status;
}


/* =========================================
   EKSPERIMEN MANDIRI 1
   Operasi Dasar Menggunakan Input Prompt
   ========================================= */

function eksperimenOperasi() {
  const inputA = prompt("Masukkan bilangan pertama:");
  const inputB = prompt("Masukkan bilangan kedua:");

  if (
    inputA === null || inputB === null ||
    inputA.trim() === "" || inputB.trim() === ""
  ) {
    document.getElementById("hasilOperasi").textContent =
      "Kedua bilangan harus diisi.";
    return;
  }

  const a = Number(inputA);
  const b = Number(inputB);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    document.getElementById("hasilOperasi").textContent =
      "Masukkan angka yang valid.";
    return;
  }

  let hasil =
    "Penjumlahan: " + (a + b) +
    "\nPengurangan: " + (a - b) +
    "\nPerkalian: " + (a * b);

  if (b !== 0) {
    hasil +=
      "\nPembagian: " + (a / b) +
      "\nModulus: " + (a % b);
  } else {
    hasil +=
      "\nPembagian dan modulus tidak bisa dilakukan karena pembagi nol.";
  }

  document.getElementById("hasilOperasi").textContent = hasil;
}


/* =========================================
   EKSPERIMEN MANDIRI 7
   Tabel Perkalian 7
   ========================================= */

function tampilkanTabel() {
  let hasil = "";

  for (let i = 1; i <= 10; i++) {
    hasil += "7 x " + i + " = " + (7 * i) + "\n";
  }

  document.getElementById("hasilTabel").textContent = hasil;
}


/* =========================================
   EKSPERIMEN MANDIRI 8
   Fungsi untuk Mengecek Bilangan Genap
   ========================================= */

function cekGenap(angka) {
  return angka % 2 === 0;
}

function ujiGenap() {
  const input = document.getElementById("angkaGenap").value;
  const hasil = document.getElementById("hasilGenap");

  if (input.trim() === "" || !Number.isInteger(Number(input))) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }

  const angka = Number(input);

  if (cekGenap(angka)) {
    hasil.textContent = angka + " adalah bilangan genap.";
  } else {
    hasil.textContent = angka + " adalah bilangan ganjil.";
  }
}


/* =========================================
   EKSPERIMEN MANDIRI 9
   Validasi Form
   ========================================= */

const formValidasi = document.getElementById("formValidasi");

if (formValidasi) {
  formValidasi.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nilai = document.getElementById("nilai").value.trim();
    const hasil = document.getElementById("hasilValidasi");

    if (nama === "" || nilai === "") {
      hasil.textContent = "Semua kolom harus diisi.";
    } else {
      hasil.textContent = "Form berhasil diisi.";
    }
  });
}


/* =========================================
   EKSPERIMEN MANDIRI 10
   Menambah Pilihan Menu
   ========================================= */

const menuTambahan = document.querySelectorAll(".menuTambahan");

menuTambahan.forEach((item) => {
  item.addEventListener("change", hitungTotalTambahan);
});

function hitungTotalTambahan() {
  let total = 0;

  menuTambahan.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  document.getElementById("totalMenuTambahan").textContent =
    total.toLocaleString("id-ID");
}


/* =========================================
   EKSPERIMEN MANDIRI 11
   Menyembunyikan dan Menampilkan Elemen
   ========================================= */

function togglePesan() {
  const pesan = document.getElementById("pesanToggle");

  if (pesan.style.display === "none") {
    pesan.style.display = "block";
  } else {
    pesan.style.display = "none";
  }
}