"use server"

import { Content } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getLikedContents = async (): Promise<Content[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase 
    .from('liked_contents')
    .select('*, contents(*)')
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false })

  if (!data) return [];

  return data.map((item) => ({
    ...item.contents
  }))
};

export default getLikedContents;
