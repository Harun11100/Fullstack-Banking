import RightSideBar from "@/components/RightSideBar";
import { Button } from "@/components/ui/button";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import { LassoSelect } from "lucide-react";
import Image from "next/image";

export default function Home() {

      const LoggedIn={
            firstName:"Md Harun",
            lastName:"Or Rashid",
            email:"harun20011112@gmail.com"
      }
  return (
  <section className="home">
    <div className="home-content"> 
      <header className="home-header">
      <HeaderBox
         type='greeting'
         title="Welcome"
         user={LoggedIn?.firstName ||'Guest'}
         subtext="Access and manage your account" 
         />

       <TotalBalanceBox accounts={[]}
      totalBanks={1}
      totalCurrentBalance={15020}
      />
      </header>

      Recent Actions
        
     

    </div>
    <RightSideBar
    user={LoggedIn}
    transactions={[]}
    banks={[{currentBalance:342.9},{currentBalance:234.25}]}/>
  </section>
  );
}
