import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "APODEX",
  description: "Software a la medida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/apodex-logo-blue.svg" />
      </head>
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
