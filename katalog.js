/*
  ============================================================
  KATALOG PRODUK (DAFTAR KELOMPOK PRODUK)
  ============================================================
  Setiap blok { ... } = satu kartu di web. Ubah, tambah, atau hapus blok sesuai kebutuhan.
  Jangan lupa koma (,) setelah tanda } kalau masih ada blok di bawahnya.

  Isian:
    nama   : nama kelompok (bahasa Indonesia)
    en     : nama dalam bahasa Inggris (boleh dikosongkan: "")
    ket    : keterangan singkat di bawah nama (boleh dikosongkan: "")
    varian : true  = tampil label "Beberapa varian",  false = tanpa label
    ikon   : ikon sementara jika foto belum ada. Pilihan:
             ic-drop, hrt, ic-pulse, ic-wind, ic-flask, ic-search, syr, ic-box
    foto   : alamat foto, contoh "images/katalog-hemodialisis.jpg"
             (kosongkan "" kalau belum ada foto; kartu akan memakai ikon)
    tampil : false = sembunyikan kartu ini tanpa menghapusnya (boleh dihapus barisnya)

  CATATAN FOTO:
  - Pakai foto sendiri, foto dari pabrikan/pemasok yang sudah diizinkan, atau foto berlisensi bebas.
    Jangan mengambil foto dari hasil pencarian Google tanpa izin (berhak cipta).
  - Tanpa merek, latar polos, ukuran sekitar 800x600 piksel, di bawah 200 KB.
  - Upload foto ke folder images/ di GitHub dengan nama yang sama seperti isian "foto".

  JANGAN menaruh data stok, harga, atau angka internal lain di file ini (file ini terbuka untuk umum).
  ============================================================
*/

window.KATALOG = [
  {
    nama: "Produk Hemodialisis",
    en: "Hemodialysis Products",
    ket: "Kateter Short Term & Long Term",
    varian: true,
    ikon: "ic-drop",
    foto: "images/katalog-hemodialisis.jpg"
  },
  {
    nama: "Kateter Vena Sentral (CVC)",
    en: "Central Venous Catheters",
    ket: "Double lumen & triple lumen",
    varian: true,
    ikon: "hrt",
    foto: "images/katalog-cvc.jpg"
  },
  {
    nama: "Bedah Vaskular",
    en: "Vascular Surgery",
    ket: "",
    varian: true,
    ikon: "ic-pulse",
    foto: ["images/katalog-vaskular-1.jpg", "images/katalog-vaskular-2.jpg"]
  },
  {
    nama: "Bedah Toraks",
    en: "Thoracic Surgery",
    ket: "",
    varian: true,
    ikon: "ic-wind",
    foto: "images/katalog-toraks.jpg"
  },
  {
    nama: "Urologi",
    en: "Urology",
    ket: "",
    varian: true,
    ikon: "ic-flask",
    foto: "images/katalog-urologi.jpg"
  },
  {
    nama: "Gastroenterologi",
    en: "Gastroenterology",
    ket: "",
    varian: false,
    ikon: "ic-search",
    foto: "images/katalog-gastro.jpg"
  },
  {
    nama: "Intervensi & Drainase",
    en: "Interventional & Drainage",
    ket: "",
    varian: false,
    ikon: "syr",
    foto: "images/katalog-drainase.jpg"
  },
  {
    nama: "Produk Habis Pakai & Penunjang",
    en: "Consumables & Support Products",
    ket: "",
    varian: true,
    ikon: "ic-box",
    foto: ""
  }
];
