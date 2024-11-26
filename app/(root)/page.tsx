import RightSideBar from "@/components/RightSideBar";
import { Button } from "@/components/ui/button";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { LassoSelect } from "lucide-react";
import Image from "next/image";

 const Home = async() =>{

     
  
  const loggedIn= await getLoggedInUser()
 

  return (
  <section className="home">
    <div className="home-content"> 
      <header className="home-header">
      <HeaderBox
         type='greeting'
         title="Welcome"
         user={loggedIn?.name ||'Guest'}
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
    user={loggedIn}
    transactions={[]}
    banks={[{currentBalance:342.9},{currentBalance:234.25}]}/>
  </section>
  );
}
export default Home