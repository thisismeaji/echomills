import Styles from "../hero/hero.module.css";
import Subscribe from "../subscribe/Subscribe";

export default function Hero() {
    return(
        <div className={Styles.hero}>
            <div className={Styles.mainHero}>
                <h1>Mengembangkan Konten Berkualitas untuk Meningkatkan Keterlibatan dan Visibilitas</h1>
                <p>Temukan strategi, alat, dan teknik terbaru untuk menciptakan konten yang tidak hanya menarik perhatian, tetapi juga membangun hubungan yang kuat dengan audiens Anda.</p>
                <Subscribe/>
            </div>
        </div>
    );
}