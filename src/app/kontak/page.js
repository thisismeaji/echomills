import Link from 'next/link';
import Styles from "../page.module.css";

export default function Kontak() {
  return(
    <main className={Styles.main}>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h1>Kontak Echomills.com</h1>
          <p>Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, saran, atau umpan balik, silakan hubungi kami melalui email di contact@echomills.com. Anda juga dapat menghubungi kami melalui telepon di 08979111521. Kami berkomitmen untuk memberikan respon secepat mungkin. Untuk mendapatkan pembaruan terbaru, ikuti kami di media sosial melalui Instagram, Twitter, dan Facebook. Terima kasih atas perhatian Anda, dan kami berharap dapat segera berkomunikasi dengan Anda!</p>
        </article>
      </section>
    </main>
  );
}