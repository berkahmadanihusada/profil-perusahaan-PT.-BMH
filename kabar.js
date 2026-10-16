/*
  ============================================================
  PENGATURAN KABAR KEGIATAN
  ============================================================
  Kabar kegiatan DIAMBIL OTOMATIS dari Google Sheet.
  Tempel link "Publish to web" (format CSV) dari Google Sheet di antara tanda kutip di bawah.
  Cukup dilakukan SEKALI. Setelah itu staf hanya mengisi Google Sheet, tanpa menyentuh file ini.

  Contoh isi:
  window.KABAR_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-xxxx/pub?output=csv";
*/
window.KABAR_SHEET_URL = "";

/*
  ============================================================
  DATA CADANGAN
  ============================================================
  Daftar di bawah HANYA tampil kalau link Google Sheet di atas kosong atau gagal dibaca.
  Boleh dibiarkan apa adanya.
  Format tanggal: TAHUN-BULAN-TANGGAL (contoh "2026-10-20").
  ============================================================
*/
window.KABAR = [
  {
    tanggal: "2026-10-14",
    kategori: "Purna Jual",
    judul: "Pelatihan dan layanan purna jual",
    isi: "Kami memberikan pelatihan terkait barang yang kami distribusikan, serta mengedepankan layanan purna jual yang baik dan optimal bagi setiap pelanggan.",
    foto: "images/pend.jpg",
    tautan: ""
  },
  {
    tanggal: "2026-10-13",
    kategori: "Info",
    judul: "Peralatan untuk kamar operasi",
    isi: "Kami menyediakan alat bedah dan peralatan pengembangan rumah sakit, disesuaikan dengan kebutuhan dan standar yang berlaku.",
    foto: "images/or.jpg",
    tautan: ""
  },
  {
    tanggal: "2026-10-12",
    kategori: "Layanan",
    judul: "Konsultasi spesifikasi dan anggaran biaya",
    isi: "Hubungi kami untuk berkonsultasi mengenai spesifikasi peralatan dan anggaran biaya pengadaan alat kesehatan di rumah sakit Anda.",
    foto: "images/esu.jpg",
    tautan: ""
  }
];
