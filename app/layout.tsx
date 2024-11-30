export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import {Inter,IBM_Plex_Serif} from "next/font/google"
import "./global.css";




const inter = Inter({
  subsets:["latin"],
  variable: "--font-inter",
});
const ibm_plex =IBM_Plex_Serif({
  subsets:["latin"],
  variable: "--font-ibm-plex-serif",
  weight:['400','700']
 
});  

export const metadata: Metadata = {
  title:"Horizon",
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
        className={`${inter.variable} ${ibm_plex.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
