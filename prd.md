# Product Requirement Document (PRD) & Actionable Checklist: Thalamus AI Agent

**Nama Produk:** Thalamus (*Teaching, Academic & Administrative Document Automation System*)  
**Target Pengguna:** Dosen Program Studi Sarjana Terapan (D4) Fisioterapi & Pendidikan Profesi Fisioterapi  
**Model Deployment:** Local-First Web Application (Berjalan secara internal di perangkat lokal dengan antarmuka Landing Page & Workspace terpadu)

---

## 1. Executive Overview

### Problem Statement
Dosen fisioterapi yang mengajar pada jenjang **Sarjana Terapan (D4) Fisioterapi** dan **Pendidikan Profesi Fisioterapi** menghadapi beban penyusunan dokumen akademik dan administratif yang sangat tinggi:
1. **Kewajiban Keselarasan Kurikulum OBE (*Outcome-Based Education*):** Setiap Rencana Pembelajaran Semester (RPS), Modul Ajar (teori/praktikum/klinik), dan Materi Pembelajaran wajib diturunkan secara konsisten dan tertelusur dari Capaian Pembelajaran Lulusan (CPL) → Capaian Pembelajaran Mata Kuliah (CPMK) → Sub-CPMK, serta mengikuti template baku institusi.
2. **Perbedaan Karakteristik Dua Jenjang Studi:** Prodi Sarjana Terapan berfokus pada penguasaan konsep terapan dan keterampilan prosedur fisioterapi di kelas/laboratorium, sedangkan Prodi Profesi berfokus pada *clinical reasoning*, manajemen kasus fisioterapi komprehensif berbasis ICF (*International Classification of Functioning, Disability and Health*), dan rotasi stase klinik.
3. **Beban Tugas Tambahan (*Ad-Hoc Administrative Work*):** Dosen sering menerima penugasan mendadak di luar pengajaran (kepanitiaan, pembuatan KAK/TOR kegiatan, laporan pengabdian masyarakat, penyusunan SOP laboratorium/klinik, dokumen akreditasi LAM-PTKes) yang mengharuskan pembuatan dokumen dari nol.
4. **Pemformatan & Sistematika Penulisan Manual:** Merapikan struktur bab/sub-bab, konsistensi tata bahasa akademik, penomoran bertingkat, tabel, hingga pengaturan tata letak agar siap cetak (*print-ready*) menyita waktu produktif dosen.

### Target User / Persona
* **Persona Utama:** Dosen Fisioterapi (Pengajar Prodi Sarjana Terapan Fisioterapi & Pembimbing/Preseptor Akademik Prodi Profesi Fisioterapi) yang aktif menyusun perangkat pembelajaran semesteran sekaligus memegang peran struktural/kepanitiaan/tugas tambahan di kampus.

### Value Proposition
**Thalamus** adalah AI Agent lokal khusus dosen fisioterapi yang bertindak sebagai pusat kendali penyusunan dokumen akademik dan administratif. Layaknya struktur *thalamus* pada otak manusia yang mengintegrasikan dan menyalurkan sinyal ke area korteks yang tepat, **Thalamus** menerjemahkan CPL menjadi struktur CPMK, Sub-CPMK, RPS, Modul Ajar, dan Materi Pembelajaran secara berantai, menyusun dokumen kegiatan tambahan dari nol hanya dari poin-poin singkat, serta menyempurnakan sistematika penulisan dan tata letak ke dalam template resmi kampus hingga siap cetak (`.docx` dan `.pdf`).

### Rekomendasi Arsitektur: Landing Page vs. Aplikasi Internal Perangkat
Menjawab kebutuhan antara membuat *landing page* beserta aplikasinya atau berjalan secara internal di perangkat:
* **Solusi Optimal — Local-First Web App dengan Internal Landing Page:** Aplikasi dijalankan secara lokal di laptop/PC Anda (`localhost`) tanpa perlu menyewa server publik atau domain berbayar, namun memiliki **Halaman Beranda (Internal Landing Page)** bergaya modern saat pertama kali dibuka di browser.
* **Keunggulan:** Data kurikulum dan dokumen rahasia kampus tetap 100% aman di perangkat sendiri, bebas biaya langganan server bulanan, dapat bekerja *offline* (menggunakan penyimpanan lokal dan opsi LLM lokal) maupun *online* (terhubung ke API LLM seperti Gemini/OpenAI), serta tetap memberikan pengalaman visual yang rapi lewat *Landing Page Dashboard* pribadi.

### Core Metrics for Success
* **Efisiensi Waktu:** Pengurangan waktu penyusunan paket perangkat ajar (RPS + Modul Ajar + Materi) dan dokumen kerja tambahan sebesar **≥ 70%**.
* **Akurasi Pemetaan OBE:** **100%** Modul Ajar dan Materi Pembelajaran yang dihasilkan memiliki tautan referensi langsung ke kode Sub-CPMK, CPMK, dan CPL yang relevan.
* **Kesiapan Cetak (*Print-Ready Rate*):** **≥ 90%** dokumen yang diekspor melalui fitur perbaikan sistematika langsung siap cetak tanpa perlu perombakan margin, font, atau penomoran ulang di pengolah kata.

---

## 2. User Personas & Key Journeys

### Alur Pengguna 1: Penyusunan Berantai Perangkat Pembelajaran (CPL → RPS → Modul → Materi)
1. **Pilih Jenjang & Mata Kuliah:** Dosen membuka *Landing Page* Thalamus, memilih jenjang (**Sarjana Terapan D4** atau **Profesi Fisioterapi**), lalu memilih/membuat Mata Kuliah atau Stase Klinik (misal: *Fisioterapi Muskuloskeletal* atau *Stase Fisioterapi Neuromuskular*).
2. **Penurunan Otomatis CPL ke CPMK & Sub-CPMK:** Dosen memilih daftar CPL Prodi yang dibebankan pada mata kuliah tersebut. Thalamus merumuskan draf CPMK dan memecahnya menjadi Sub-CPMK mingguan/stase lengkap dengan indikator penilaian, taksonomi (Kognitif C1–C6, Psikomotorik P1–P5, Afektif A1–A5), dan bobot evaluasi (total 100%).
3. **Generasi RPS Sesuai Template:** Setelah matriks disetujui, Thalamus mengisi seluruh tabel RPS 16 minggu (atau jadwal rotasi profesi) dan mengekspornya ke template resmi kampus.
4. **Generasi Modul Ajar & Materi Pembelajaran:** Dari setiap baris Sub-CPMK di RPS, dosen menekan tombol **"Turunkan Modul & Materi"**. Thalamus otomatis membuat Modul Ajar (petunjuk praktikum pemeriksaan/intervensi fisioterapi, skenario kasus klinis, lembar kerja mahasiswa) dan Materi Pembelajaran (uraian teori lengkap, patofisiologi, proses fisioterapi, dan daftar pustaka) yang selaras 100% dengan Sub-CPMK tersebut.

### Alur Pengguna 2: Pembuatan Dokumen Tugas Tambahan dari Nol (*Zero-to-Document*)
1. **Inisiasi Tugas Tambahan:** Dosen memilih menu **"Dokumen Kegiatan Baru"** di halaman utama dan memilih jenis dokumen (misal: *TOR/KAK Kegiatan*, *Laporan Kepanitiaan*, *Proposal Pengabdian Masyarakat*, *SOP Laboratorium Fisioterapi*, atau *Dokumen Kustom*).
2. **Input Konteks Ringkas:** Dosen mengetikkan poin kasar (nama kegiatan, tujuan singkat, tanggal, sasaran peserta, anggaran garis besar).
3. **Penyusunan Struktur & Isi Otomatis:** Thalamus menghasilkan kerangka bab/sub-bab baku terlebih dahulu untuk dikonfirmasi, kemudian menulis isi lengkap tiap bagian secara formal dan koheren dari latar belakang hingga penutup dan lampiran.

### Alur Pengguna 3: Perbaikan Sistematika Penulisan & Persiapan Cetak (*Print-Ready Refiner*)
1. **Unggah atau Tempel Draf Kasar:** Dosen memasukkan draf dokumen yang masih berantakan (catatan rapat, gabungan ketikan tim, atau draf modul lama).
2. **Audit & Restrukturisasi Sistematika:** Thalamus menganalisis celah logika urutan bab, memperbaiki hierarki penomoran (`Bab I` → `1.1` → `1.1.1` → `a.`), menyelaraskan kalimat dengan kaidah bahasa Indonesia baku (EYD V) dan terminologi medis/fisioterapi yang tepat, serta merapikan format tabel dan daftar pustaka.
3. **Ekspor Siap Cetak:** Dosen memilih pengaturan cetak (A4/F4, kop surat prodi, lembar pengesahan berkolom tanda tangan Kaprodi/Dekan) dan mengunduh file `.docx` atau `.pdf` yang siap dikirim ke percetakan atau diajukan untuk pengesahan.

---

## 3. Core Features (MoSCoW Prioritization)

### Must Have (MVP Essentials)
* **OBE Curriculum Cascade Engine (CPL → CPMK → Sub-CPMK):** Mesin pemeta otomatis yang menurunkan CPL menjadi CPMK dan Sub-CPMK spesifik fisioterapi (dibedakan antara kompetensi vokasional D4 dan kompetensi klinis Profesi berbasis proses fisioterapi: *Assessment, Diagnosis, Planning, Intervention, Evaluation*).
* **Chained Academic Document Generator (RPS, Modul Ajar, Materi Pembelajaran):** Generator terintegrasi yang memastikan setiap topik, studi kasus, dan instrumen evaluasi pada Modul Ajar serta Materi Pembelajaran diturunkan langsung dari Sub-CPMK pada RPS.
* **Custom Institutional Template Engine:** Sistem pengelola template `.docx` (berbasis *placeholder tag* `{{variabel}}`) untuk memuat format baku RPS, Modul Ajar, dan Kop Surat milik institusi pengguna.
* **Zero-to-Document Ad-Hoc Generator:** Modul pembuatan dokumen dari nol untuk tugas tambahan dosen (KAK/TOR, Laporan Kegiatan, Proposal, SOP Praktikum/Klinik, Surat/Nota Dinas, dan Dokumen Bebas).
* **Sistematika & Print-Ready Refiner:** Fitur penyuntingan cerdas untuk merombak draf acak menjadi dokumen bersistematika baku, memperbaiki tata bahasa akademik, menyeragamkan penomoran bertingkat, dan mengatur tata letak halaman siap cetak (`.docx` & `.pdf`).
* **Local-First Web App & Internal Landing Page:** Antarmuka halaman muka (Landing Page internal) dan ruang kerja (Workspace) yang berjalan di perangkat sendiri (`localhost`), menampilkan ringkasan proyek, pintasan cepat (*Quick Actions*), dan pustaka dokumen.

### Should Have (High Value for Version 1.1)
* **Local Knowledge Base (RAG Fisioterapi):** Fitur unggah PDF referensi (buku teks fisioterapi, pedoman klinis Perdosri/IFI, dokumen kurikulum prodi) agar Thalamus menyusun materi dan modul berdasarkan rujukan ilmiah yang dimiliki dosen.
* **Generator Kasus Klinis & Rubrik OSCE/Ukom Fisioterapi:** Pembuat skenario kasus klinis (*vignette*) dan lembar ceklis penilaian praktikum/OSCE yang selaras dengan Sub-CPMK pada Prodi D4 dan Profesi.
* **Versioning & Riwayat Revisi Dokumen:** Penyimpanan riwayat perubahan draf sehingga dosen dapat membandingkan versi sebelum dan sesudah diperbaiki oleh fitur *Sistematika Refiner*.

### Could Have (Nice-to-Have Later)
* **Auto-Slide Exporter (`.pptx`):** Konversi otomatis dari dokumen Materi Pembelajaran menjadi salindia presentasi perkuliahan siap tayang.
* **Sinkronisasi Folder Lokal / Google Drive Backup:** Fitur pencadangan satu klik ke folder Google Drive atau OneDrive lokal untuk keamanan data apabila berganti perangkat.

### Won't Have (Explicitly Out of Scope for Now)
* **Sistem Informasi Akademik (SIAKAD) Kampus:** Tidak mencakup manajemen absensi mahasiswa, portal pengumpulan tugas mahasiswa, atau rekap nilai akhir semester ke PDDikti.
* **Multi-Tenant Public Cloud SaaS:** Tidak membangun sistem langganan komersial multi-kampus dengan gerbang pembayaran pada tahap awal (fokus penuh pada penggunaan personal dosen secara lokal).

---

## 4. Architecture & Technical Considerations

### Platform & Stack Recommendation
Untuk memastikan aplikasi mudah dijalankan secara internal di perangkat tunggal namun memiliki tampilan sekelas aplikasi web modern:

| Komponen | Teknologi yang Direkomendasikan | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Frontend & Internal Landing Page** | **Next.js (React) + Tailwind CSS + shadcn/ui** | Menyediakan tampilan *Landing Page* dan *Document Editor* yang bersih, responsif, dan nyaman digunakan berjam-jam. |
| **Backend & AI Orchestrator** | **Python FastAPI** | Ekosistem terbaik untuk pemrosesan dokumen (`.docx`/`.pdf`) dan orkestrasi alur kerja AI Agent (*agentic workflows*). |
| **Database Lokal** | **SQLite + ChromaDB (Lokal)** | Tanpa instalasi server database terpisah; seluruh data tersimpan dalam satu file `.db` di dalam folder aplikasi. |
| **AI / LLM Provider** | **Hybrid: Gemini API / OpenAI API + Ollama (Lokal)** | Fleksibel menggunakan API Cloud untuk hasil penulisan akademik terbaik, atau model lokal via Ollama saat tanpa internet. |
| **Document & Print Engine** | **`docxtpl` + `python-docx` + Headless Chromium / LibreOffice** | `docxtpl` menjaga tabel dan tata letak template Word kampus 100% utuh; Chromium/LibreOffice menghasilkan PDF siap cetak. |
| **Kemasan Aplikasi Lokal** | **Launcher Script (`.bat` / `.command`) atau Tauri Desktop** | Memungkinkan dosen membuka aplikasi Thalamus cukup dengan klik ganda satu ikon di desktop tanpa mengetik perintah terminal. |

### Data Entities / Schema Overview
1. **`Program_Studi`**: `id`, `nama_prodi` (*Sarjana Terapan Fisioterapi* / *Profesi Fisioterapi*), `jenjang_kkni` (*Level 6* / *Level 7*), `profil_lulusan`.
2. **`CPL_Master`**: `id`, `prodi_id`, `kode_cpl` (misal: `CPL-01`), `kategori` (*Sikap, Pengetahuan, Keterampilan Umum, Keterampilan Khusus*), `deskripsi_cpl`.
3. **`Mata_Kuliah`**: `id`, `prodi_id`, `kode_mk`, `nama_mk`, `sks_teori`, `sks_praktik`, `sks_klinik`, `semester`, `deskripsi_mk`.
4. **`Peta_CPMK`**: `id`, `mk_id`, `cpl_id`, `kode_cpmk`, `rumusan_cpmk`.
5. **`Peta_SubCPMK`**: `id`, `cpmk_id`, `minggu_ke`, `kode_sub_cpmk`, `rumusan_sub_cpmk`, `indikator_penilaian`, `kriteria_bentuk_penilaian`, `materi_pokok`, `bobot_persen`.
6. **`Dokumen_Pembelajaran`**: `id`, `mk_id`, `sub_cpmk_id`, `jenis` (`RPS`, `MODUL_AJAR`, `MATERI_PEMBELAJARAN`), `template_id`, `konten_terstruktur_json`, `konten_markdown`, `file_output_docx`, `file_output_pdf`, `updated_at`.
7. **`Dokumen_Tugas_Tambahan`**: `id`, `judul_dokumen`, `jenis_kegiatan` (`TOR_KAK`, `LAPORAN`, `PROPOSAL`, `SOP`, `SURAT`, `KUSTOM`), `input_prompt_awal`, `sistematika_bab_json`, `konten_lengkap`, `status_sistematika` (`DRAFT`, `REFINED`, `PRINT_READY`), `file_output_path`.
8. **`Template_Dokumen`**: `id`, `nama_template`, `kategori` (`RPS_D4`, `RPS_PROFESI`, `MODUL`, `MATERI`, `UMUM_KAMPUS`), `file_path_docx`, `konfigurasi_cetak_json` (ukuran kertas, margin atas/bawah/kiri/kanan, font utama, spasi).

### Security & Privacy Considerations
* **Penyimpanan Lokal 100% (*Local Data Sovereignty*):** Seluruh database SQLite, template `.docx` institusi, dan hasil dokumen disimpan di direktori lokal perangkat pengguna.
* **Keamanan Kredensial API:** Kunci API LLM (jika menggunakan layanan Cloud) disimpan secara lokal di dalam konfigurasi terenkripsi dan tidak pernah dibagikan ke pihak ketiga.
* **Backup Mandiri:** Menyediakan fitur *Export/Import Database Bundle (`.zip`)* agar pengguna dapat mencadangkan seluruh data kurikulum dan dokumen dengan mudah.

---

## 5. Success Criteria & KPIs

| Kategori KPI | Indikator Keberhasilan | Target terukur |
| :--- | :--- | :--- |
| **Kecepatan Penyusunan Akademik** | Waktu dari pemilihan CPL hingga RPS, Modul Ajar, dan Materi siap ditinjau untuk 1 mata kuliah/pertemuan | **≤ 25 menit** per paket pertemuan |
| **Konsistensi Turunan OBE** | Kesesuaian kata kerja operasional (KKO) dan lingkup materi antara CPL → CPMK → Sub-CPMK → Modul → Materi | **100%** terhubung tanpa bagian yang melenceng dari Sub-CPMK |
| **Produktivitas Tugas Tambahan** | Waktu pembuatan draf lengkap dokumen kegiatan (KAK/TOR/Laporan/SOP) dari nol hingga siap sunting | **≤ 10 menit** per dokumen |
| **Kualitas Fitur Siap Cetak** | Persentase dokumen hasil *Sistematika & Print-Ready Refiner* yang memenuhi standar margin, penomoran bab, dan halaman pengesahan tanpa revisi format manual | **≥ 90%** langsung siap cetak (*print-ready*) |
| **Kemudahan Pengoperasian Lokal** | Waktu pemuatan awal aplikasi lokal dari klik ikon hingga halaman utama (*Internal Landing Page*) siap digunakan | **< 5 detik** di perangkat lokal |

---

## 6. Actionable Implementation Checklist

### Fase 1: Fondasi Proyek & Arsitektur Lokal (Setup & Environment)
- [ ] Inisialisasi repositori monorepo proyek `thalamus-app` dengan pemisahan direktori `/frontend` (Next.js) dan `/backend` (Python FastAPI).
- [ ] Konfigurasi database lokal SQLite menggunakan SQLAlchemy/SQLModel beserta sistem migrasi skema otomatis menggunakan Alembic.
- [ ] Buat modul konfigurasi pengaturan lokal (`settings.json` / `.env`) untuk memilih mode AI (*Cloud API* vs *Local Ollama*) dan menyimpan path direktori penyimpanan dokumen.
- [ ] Bangun script peluncur satu klik (`start-thalamus.bat` untuk Windows dan `start-thalamus.command` untuk macOS) yang menjalankan server backend dan membuka *Internal Landing Page* di browser secara otomatis.

### Fase 2: Database Kurikulum & Mesin Pemetaan OBE (CPL → CPMK → Sub-CPMK)
- [ ] Implementasikan tabel database untuk `Program_Studi` (Sarjana Terapan Fisioterapi & Profesi Fisioterapi), `CPL_Master`, `Mata_Kuliah`, `Peta_CPMK`, dan `Peta_SubCPMK`.
- [ ] Buat fitur *Seed & Import Data Kurikulum* agar dosen dapat mengimpor daftar CPL dan Mata Kuliah dari file Excel/CSV atau mengisi melalui formulir antarmuka.
- [ ] Rancang *System Prompt* khusus Agen Kurikulum Fisioterapi yang memahami perbedaan taksonomi KKNI Level 6 (Sarjana Terapan/D4) dan KKNI Level 7 (Profesi Fisioterapi berbasis kerangka ICF & proses fisioterapi).
- [ ] Bangun endpoint API `/api/obe/generate-cascade` untuk menurunkan CPL terpilih menjadi draf CPMK dan rincian Sub-CPMK 16 minggu (beserta indikator, bentuk penilaian, dan validasi total bobot 100%).
- [ ] Buat komponen UI matriks interaktif *CPL–CPMK–Sub-CPMK* yang memungkinkan dosen mengedit, menambah, atau mengunci rumusan sebelum diturunkan ke RPS.

### Fase 3: Generator Berantai RPS, Modul Ajar, & Materi Pembelajaran
- [ ] Bangun mesin injeksi template dokumen berbasis `docxtpl` yang memetakan data JSON dari RPS, Modul Ajar, dan Materi ke dalam tag `{{variabel}}` pada file `.docx` template kampus.
- [ ] Siapkan 3 template `.docx` bawaan (*default*) yang dapat dikustomisasi: Template RPS Standar SN-Dikti/LAM-PTKes, Template Modul Ajar/Praktikum Fisioterapi, dan Template Handout Materi Pembelajaran.
- [ ] Implementasikan Agen Generator RPS (`/api/academic/generate-rps`) yang menyusun rencana pembelajaran lengkap per pertemuan berdasarkan Sub-CPMK yang telah disetujui.
- [ ] Implementasikan Agen Generator Modul Ajar (`/api/academic/generate-modul`) yang otomatis mengambil konteks Sub-CPMK terkait untuk menyusun tujuan praktikum/klinis, dasar teori singkat, prosedur pemeriksaan/intervensi fisioterapi langkah demi langkah, studi kasus klinis, dan lembar evaluasi keterampilan.
- [ ] Implementasikan Agen Generator Materi Pembelajaran (`/api/academic/generate-materi`) yang menurunkan Sub-CPMK menjadi bahan ajar komprehensif (anatomi/fisiologi terapan, patofisiologi, *clinical reasoning*, penatalaksanaan fisioterapi berbasis bukti, rangkuman, dan latihan soal).
- [ ] Tambahkan fitur validasi silang otomatis (*Alignment Checker*) yang memberi penanda visual hijau apabila isi Modul Ajar dan Materi telah mencakup seluruh indikator pada Sub-CPMK terkait.

### Fase 4: Generator Dokumen Tugas Tambahan dari Nol (*Zero-to-Document Agent*)
- [ ] Buat skema database `Dokumen_Tugas_Tambahan` dan pustaka prasetel (*preset*) struktur dokumen untuk: KAK/TOR Kegiatan, Laporan Pertanggungjawaban Kegiatan, Proposal Pengabdian Masyarakat, SOP Laboratorium/Klinik, dan Dokumen Kustom.
- [ ] Bangun alur kerja 2-tahap pada Agen *Zero-to-Document*: Tahap 1 menghasilkan *Outline/Kerangka Bab* dari poin singkat pengguna untuk disetujui; Tahap 2 menuliskan isi lengkap setiap bab secara mendalam.
- [ ] Buat antarmuka *Wizard* "Buat Dokumen Kegiatan dari Nol" dengan formulir input cepat (Nama Kegiatan, Latar Belakang Singkat, Tujuan, Tanggal/Tempat, Target Peserta, dan Catatan Khusus).
- [ ] Tambahkan fitur generator lampiran otomatis (seperti tabel susunan acara/rundown, tabel estimasi anggaran sederhana, dan susunan kepanitiaan) di dalam dokumen kegiatan.

### Fase 5: Fitur Perbaikan Sistematika Penulisan & Mesin Siap Cetak (*Print-Ready Refiner*)
- [ ] Bangun modul parser dokumen (`/api/refiner/parse`) menggunakan `python-docx` dan `pdfplumber` untuk mengekstrak teks dan struktur dari draf kasar yang diunggah dosen.
- [ ] Rancang Agen *Sistematika & Academic Style Refiner* yang bertugas: (1) mengurutkan dan menormalisasi hierarki Bab dan Sub-bab, (2) memperbaiki kalimat tidak efektif sesuai EYD V dan istilah baku fisioterapi, serta (3) melengkapi bagian transisi antar-paragraf yang terputus.
- [ ] Buat tampilan perbandingan berdampingan (*Side-by-Side Diff Preview*) di UI agar dosen dapat meninjau perbandingan draf asli vs. hasil perbaikan sistematika sebelum menyimpannya.
- [ ] Bangun mesin *Print-Ready Formatter* yang menerapkan standar cetak secara otomatis: ukuran kertas (A4/F4), margin penjilidan (misal: Kiri 4 cm, Atas/Kanan/Bawah 3 cm), jenis dan ukuran font (Times New Roman 12pt / Arial 11pt), spasi baris (1.15 / 1.5), perataan kanan-kiri (*justify*), serta nomor halaman otomatis.
- [ ] Buat generator otomatis **Halaman Sampul (Cover)**, **Daftar Isi**, dan **Lembar Pengesahan** (lengkap dengan ruang tanda tangan Dosen Pengampu, Koordinator MK, dan Ketua Program Studi beserta NIDN/NIP) yang mencegah tabel atau kolom tanda tangan terpotong di pergantian halaman (*page-break control*).
- [ ] Integrasikan konverter otomatis `.docx` ke `.pdf` menggunakan LibreOffice Headless / Chromium agar dosen mendapatkan file Word yang mudah diedit sekaligus file PDF yang siap cetak.

### Fase 6: Internal Landing Page, Ruang Kerja UI & Pengujian Akhir
- [ ] Bangun **Internal Landing Page Thalamus** yang menampilkan: Hero Banner identitas dosen & prodi, kartu pintasan cepat (*Buat RPS/Modul dari CPL*, *Buat Dokumen Tugas Tambahan dari Nol*, *Perbaiki Sistematika & Cetak Dokumen*), statistik ringkas dokumen semester berjalan, dan daftar dokumen terakhir yang dikerjakan.
- [ ] Bangun halaman **Manajemen Template & Profil Dosen** untuk menyimpan data tetap (Nama Dosen, Gelar, NIDN/NIP, Nama Institusi, Logo Kampus, Nama Kaprodi) agar otomatis terisi di setiap dokumen baru.
- [ ] Lakukan pengujian *end-to-end* skenario 1: Menurunkan 1 CPL Sarjana Terapan Fisioterapi & 1 CPL Profesi Fisioterapi menjadi CPMK, Sub-CPMK, RPS, Modul Ajar, dan Materi Pembelajaran hingga ekspor `.docx`/`.pdf`.
- [ ] Lakukan pengujian *end-to-end* skenario 2: Membuat dokumen KAK/TOR kegiatan dari nol dan menguji fitur *Sistematika & Print-Ready Refiner* pada draf dokumen acak hingga menghasilkan cetakan PDF berhalaman pengesahan rapi.
