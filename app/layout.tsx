import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter,IBM_Plex_Serif} from "next/font/google"
import "./globals.css";




const inter = Inter({
  subsets:["latin"],
  variable: "--font-inter",
});
const ibm_plex =IBM_Plex_Serif({
  subsets:["latin"],
  variable: "--font-ibm_plex_serif",
  weight:['400','700']
 
}); 

export const metadata: Metadata = {
  title:"World Bank",
  description: "Modern banking platform for everynone",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm_plex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
