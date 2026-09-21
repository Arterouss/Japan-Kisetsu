# Japan Kisetsu

Frontend React + TypeScript untuk Japan Kisetsu. Tampilan dan aset dari proyek HTML lama dipertahankan, tetapi kode slider dan kontennya kini ditata agar mudah dikembangkan.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Lalu buka alamat yang ditampilkan di terminal. Untuk memeriksa versi produksi, gunakan:

```bash
npm run build
```

## Struktur saat ini

- `src/App.tsx` menyimpan komponen halaman dan data setiap musim dalam struktur TypeScript.
- `src/App.css` menyimpan tampilan responsif untuk halaman, slider, dan dialog detail.
- `public/images` menyimpan salinan seluruh gambar dari versi HTML lama.

## Tahap Laravel berikutnya

Saat PHP dan Composer tersedia, buat aplikasi Laravel dengan starter kit React + TypeScript + Inertia. Komponen frontend ini kemudian dipindahkan ke `resources/js`, sedangkan Laravel menangani login, database, admin panel, form, dan fitur booking.

Kebutuhan yang perlu dipasang di Windows: PHP 8.3 atau lebih baru serta Composer. Node.js sudah tersedia di komputer ini.
