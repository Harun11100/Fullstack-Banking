import RecentTransactions from "@/components/RecentTransactions";
import RightSideBar from "@/components/RightSideBar";
import { Button } from "@/components/ui/button";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { LassoSelect } from "lucide-react";
import Image from "next/image";

 const Home = async({searchParams:{id,page}}:SearchParamProps) =>{

   const currentPage=Number(page as string)||1
  
  const loggedIn= await getLoggedInUser()
  
  const accounts=await getAccounts({
     userId:loggedIn.$id
  })

  if(!accounts)return
  const accountData= accounts?.data
  const appwriteItemId =(id as string)|| accountData[0]?.appwriteItemId

   const  account= await getAccount({
    appwriteItemId
   })

  

  return (
  <section className="home">
    <div className="home-content"> 
      <header className="home-header">
      <HeaderBox
         type='greeting'
         title="Welcome"
         user={loggedIn?.firstName ||'Guest'}
         subtext="Access and manage your account" 
         />

      <TotalBalanceBox accounts={accountData}
      totalBanks={accounts.totalBanks}
      totalCurrentBalance={accounts.totalCurrentBalance}
      />
      </header>
     <RecentTransactions accounts={accountData} transactions={account?.transactions} appwriteItemId={appwriteItemId} page={currentPage}/>
    </div>
    <RightSideBar
    user={loggedIn}
    transactions={accounts.transactions}
    banks={accountData?.slice(0,2)}/>
  </section>
  );
}
export default Home