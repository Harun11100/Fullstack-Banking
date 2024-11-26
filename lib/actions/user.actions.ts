'use server'
import { cookies } from 'next/headers'
import {createSessionClient, createAdminClient} from './appwrte'
import { parseStringify } from '../utils'
import { ID } from 'node-appwrite'



export const signIn=async({email,password}:signInProps)=>{

      try {
      //Mutation// database// Make fetch

      const { account } = await createAdminClient();
      const response= await account.createEmailPasswordSession(
            email,
            password,
      )

      return parseStringify(response)
            
      } catch (error) {
            
            console.log(error)
      }

}
export const signUp=async (userData:SignUpParams)=>{

      const {email,password,firstName,lastName}=userData;

      try {
  // Account creation
    const { account } = await createAdminClient();

    const newUserAccount = await account.create( 
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
      );

   const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
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



export const logoutAccount=async ()=>{

      try {
            const { account } = await createSessionClient();
            cookies().delete('appwrite-session')

            await account.deleteSession('current')


      } catch (error) {
            console.log('Error from logout',error)
            return null
        
            
      }
}    