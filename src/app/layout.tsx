import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://travel-in-a-blink.vercel.app"),

  title: {
    default: "Himanshi Travels",
    template: `%s | Himanshi Travels`,
  },
  description: "Your Dream Destination is Just a Blink Away!",

  openGraph: {
    title: "Himanshi Travels",
    description: "Your Dream Destination is Just a Blink Away!",
    images: ["/assets/images/cover-landscape-compress.jpg"],
  },

  keywords: [
    "Himanshi Travels",
    "Himanshi travels",
    "Himanshi travels website",
    "Travelling website",
    "Travel Agency",
    "Travel Agency Website",
    "Trip",
	"Vrushabh Gawas",
  ],

  verification: {
    google: "JH2cAfFIcBaQ_rBQ5Yhbzua6sFpwoB0W6fo5RIf5QIQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
