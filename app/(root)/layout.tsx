import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/ui/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  
  const loggedIn =await getLoggedInUser()
  if(!loggedIn)redirect('/sign-up')
  return (


   <main className="flex h-screen w-full font-inter ">
    
     <SideBar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src='/icons/logo.svg'
          alt="menuicon"
          width={30}
          height={30}/>
          <div>
            <MobileNavbar user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
      
  
     
   </main>
  );
}
