import { Session } from 'inspector';
import { useSession } from 'next-auth/react';
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

interface EmailContextProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>
  status: "authenticated" | "loading" | "unauthenticated",
  data:Session | null
}

export const EmailContexto = createContext<EmailContextProps>(
  {
    email: '',
    setEmail: (email) => { }
  }
);

export const EmailProvider = ({ children }: { children: React.ReactNode }) => {

  const [email, setEmail] = useState('');

  const { data, status } = useSession()

  useEffect(() => {
    console.log(email)
  }, [email])

  return (
    <EmailContexto.Provider value={{ email, setEmail, data, status }}>
      {children}
    </EmailContexto.Provider>
  );

};
