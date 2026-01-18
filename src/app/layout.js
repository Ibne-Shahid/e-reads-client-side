import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/components/ToastProvider";
import AOSProvider from "@/components/AOSProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Reads",
  description: "Find ypur desired book or sell!",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=113802&format=png&color=000000",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey="pk_test_ZW1lcmdpbmctZW11LTM1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <html lang="en" data-theme="restaurant">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AOSProvider>
            <ToastProvider />
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </AOSProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
