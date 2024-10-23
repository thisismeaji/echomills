import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  icons: {
    icon: '/favicon.png', // path ke favicon di folder public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <header>
          <Navigation/>
        </header>
          {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
