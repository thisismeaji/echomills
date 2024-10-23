import Link from 'next/link';
import Styles from "../page.module.css";

export default function KetentuanPengguna() {
  return(
    <main className={Styles.main}>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h1>Ketentuan Pengguna</h1>
          <h2>Penerimaan Ketentuan</h2>
          <p>
              Dengan mengakses atau menggunakan situs web ini, Anda setuju untuk terikat oleh ketentuan ini. 
              Jika Anda tidak setuju dengan salah satu ketentuan ini, Anda tidak boleh menggunakan situs ini.
          </p>

          <h2>Layanan yang Tersedia</h2>
          <p>
              Situs ini menyediakan berbagai informasi, artikel, dan konten lainnya yang berhubungan dengan 
              pengembangan web, tips blogging, dan topik terkait. Kami berhak untuk mengubah atau menghentikan 
              layanan ini kapan saja tanpa pemberitahuan sebelumnya.
          </p>

          <h2>Penggunaan Konten</h2>
          <p>
              Anda tidak diperbolehkan untuk mengubah, mendistribusikan, menyalin, atau menggunakan konten 
              yang terdapat di situs ini tanpa izin tertulis dari pemilik situs. Semua konten yang 
              dipublikasikan di situs ini dilindungi oleh hak cipta.
          </p>

          <h2>Tanggung Jawab Pengguna</h2>
          <p>
              Pengguna bertanggung jawab atas semua aktivitas yang terjadi di akun mereka. Anda setuju untuk 
              tidak menggunakan situs ini untuk tujuan yang melanggar hukum atau melanggar ketentuan ini.
          </p>

          <h2>Tautan ke Situs Lain</h2>
          <p>
              Situs ini mungkin berisi tautan ke situs web lain. Kami tidak bertanggung jawab atas konten 
              atau praktik privasi dari situs-situs tersebut. Kami menyarankan Anda untuk membaca kebijakan 
              privasi dan ketentuan pengguna dari setiap situs yang Anda kunjungi.
          </p>

          <h2>Pembaruan Ketentuan</h2>
          <p>
              Kami berhak untuk memperbarui atau mengubah ketentuan ini kapan saja. Pembaruan akan diposting 
              di halaman ini dan tanggal efektif akan diperbarui. Anda disarankan untuk memeriksa halaman 
              ini secara berkala untuk memastikan Anda memahami ketentuan terbaru.
          </p>

          <h2>Kontak</h2>
          <p>
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang ketentuan ini, silakan hubungi kami 
              melalui informasi kontak yang tersedia di situs ini.
          </p>
        </article>
      </section>
    </main>
  );
}