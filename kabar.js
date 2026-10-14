/*
  ============================================================
  CARA MENAMBAH KABAR KEGIATAN BARU
  ============================================================
  1. Upload foto kegiatan ke folder images/ (contoh: images/pengiriman-oktober.jpg)
  2. Salin salah satu blok { ... } di bawah, tempel PALING ATAS di dalam tanda [ ],
     lalu ubah isinya. Jangan lupa koma (,) setelah tanda } kalau masih ada blok di bawahnya.
  3. Klik "Commit changes". Web akan ter-update dalam beberapa menit.

  Isian:
    tanggal  : format TAHUN-BULAN-TANGGAL, contoh "2026-10-20"
    kategori : bebas, contoh "Pengiriman", "Pelatihan", "Purna Jual", "Info"
    judul    : judul singkat
    isi      : 2-3 kalimat
    foto     : alamat foto, contoh "images/pengiriman-oktober.jpg" (boleh dikosongkan: "")
    tautan   : link ke postingan Instagram/Facebook (boleh dikosongkan: "")

  Yang tampil di web: 6 kabar dengan tanggal terbaru.

  PENTING sebelum memposting kegiatan:
  - Minta izin dulu kalau menyebut nama atau memajang foto rumah sakit/pelanggan.
  - Jangan pasang foto yang jelas menampilkan wajah orang tanpa persetujuan,
    dan jangan pernah menampilkan data pasien.
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
