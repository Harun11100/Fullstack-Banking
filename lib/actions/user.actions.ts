'use server'
import { cookies } from 'next/headers'
import {createSessionClient, createAdminClient} from '../server/appwrite'
import { parseStringify } from '../utils'

export const signIn=async ()=>{

      try {
      //Mutation// database// Make fetch


            
      } catch (error) {
            
            console.log(error)
      }

}
export const signUp=async (userData:SignUpParams)=>{

      const {email,password,firstName,lastName}=userData

      try {
      
  const { account } = await createAdminClient();

   const newUserAccount = await account.create(ID.unique(), email, password,`${firstName} ${lastName}`);
   const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAccount)
            
      } catch (error) {
            
            console.log(error)
      }

}


export async function getLoggedInUser() {
      try {
        const { account } = await createSessionClient();
        return await account.get();
      } catch (error) {
        return null;
      }
    }