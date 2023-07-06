import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

interface EmailContextProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>
  status: "authenticated" | "loading" | "unauthenticated" | null,
  data: Session | null
}

export const EmailContexto = createContext<EmailContextProps>(
  {
    email: "",
    setEmail: (email) => '',
    data: null,
    status: null
  }
);

export const EmailProvider = ({ children }: { children: React.ReactNode }) => {

  const [email, setEmail] = useState('');

  const { data, status ,update} = useSession()

 

  useEffect(() => {
    console.log(email)
  }, [email])

  useEffect(()=>{
    console.log( data, status ,update)
  },[ data, status ,update])

  return (
    <EmailContexto.Provider value={{ email, setEmail, status, data }}>
      {children}
    </EmailContexto.Provider>
  );

};
