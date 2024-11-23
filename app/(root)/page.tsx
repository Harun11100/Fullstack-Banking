import { Button } from "@/components/ui/button";
import HeaderBox from "@/components/ui/HeaderBox";
import Image from "next/image";

export default function Home() {

      const LoggedIn={
            firstNAme:"Harun"
      }
  return (
  <section className="home">
    <div className="home-content"> 
         <HeaderBox
         type='greeting'
         title="Welcome"
         user={LoggedIn?.firstNAme}
         subtext="Access and manage your account" 
         />

     

    </div>
  </section>
  );
}
