import Link from 'next/link';
import Styles from "../page.module.css";

export default function KebijakanPrivasi() {
  return(
    <main className={Styles.main}>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h1>Kebijakan Privasi</h1>
          <p>
            Selamat datang di Echomills.com. Kebijakan privasi ini menjelaskan cara kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda mengunjungi situs kami.
          </p>
          
          <h2>Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami dapat mengumpulkan informasi pribadi yang dapat diidentifikasi, seperti nama, alamat email, dan informasi kontak lainnya ketika Anda mengisi formulir di situs kami. Kami juga mengumpulkan informasi non-pribadi secara otomatis, seperti alamat IP, jenis browser, dan halaman yang Anda kunjungi.
          </p>

          <h2>Penggunaan Informasi</h2>
          <p>
            Informasi yang kami kumpulkan digunakan untuk:
            <ul>
              <li>Meningkatkan pengalaman pengguna di situs kami</li>
              <li>Mengirimkan informasi dan pembaruan terkait layanan kami</li>
              <li>Membalas pertanyaan dan permintaan dari pengguna</li>
              <li>Melakukan analisis untuk meningkatkan kualitas konten</li>
            </ul>
          </p>

          <h2>Cookies</h2>
          <p>
            Kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil yang disimpan di perangkat Anda. Anda dapat menonaktifkan cookies melalui pengaturan browser Anda, tetapi ini mungkin mempengaruhi fungsi situs kami.
          </p>

          <h2>Pihak Ketiga dan Iklan</h2>
          <p>
            Kami menggunakan Google AdSense untuk menampilkan iklan di situs kami. Google AdSense menggunakan cookie untuk menampilkan iklan berdasarkan kunjungan sebelumnya Anda ke situs kami atau situs lainnya di internet. Anda dapat mengunjungi <a href="https://policies.google.com/technologies/partner-sites" target="_blank">halaman kebijakan privasi Google</a> untuk mempelajari lebih lanjut tentang bagaimana Google mengumpulkan dan menggunakan informasi Anda.
          </p>

          <h2>Keamanan Informasi</h2>
          <p>
            Kami berkomitmen untuk melindungi informasi pribadi Anda. Kami menggunakan berbagai langkah keamanan untuk menjaga data Anda tetap aman. Namun, tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman.
          </p>

          <h2>Perubahan Kebijakan Privasi</h2>
          <p>
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diumumkan di halaman ini dengan tanggal kebijakan yang diperbarui. Kami mendorong Anda untuk secara berkala meninjau halaman ini untuk informasi terbaru tentang kebijakan privasi kami.
          </p>

          <h2>Kontak Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan atau komentar tentang kebijakan privasi ini, silakan hubungi kami di: <a href="mailto:info@echomills.com">info@echomills.com</a>
          </p>
        </article>
      </section>
    </main>
  );
}