import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oryon Gym",
  description: "Aplicacion web para administrar gym",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
