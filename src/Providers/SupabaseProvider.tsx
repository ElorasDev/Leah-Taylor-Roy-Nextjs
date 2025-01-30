'use client';

import { useState, useEffect } from 'react';
import {NextPage} from "next"
import { createClientComponentClient, SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

//* Props type for the SupabaseProvider component
interface SupabaseProviderProps {
  children: React.ReactNode;
}

//* SupabaseProvider component definition
export const SupabaseProvider: NextPage<SupabaseProviderProps> = ({ children }) => {
  //* Using React's useState to hold the Supabase client object
  const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | null>(null);

  //* useEffect hook to initialize the Supabase client when this component mounts
  useEffect(() => {
    const client = createClientComponentClient({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPERBASE_URL!,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      });
      setSupabaseClient(client);
  }, []);

  //* If the Supabase client is not initialized, render nothing (or a loading spinner)
  if (!supabaseClient) {
    return null; //* or a loading spinner
  }

  //* If the Supabase client is available, render the children within the SessionContextProvider
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>
  );
};