import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

interface SettingsPageProps {
    params: {
        storeId: string;
    }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({
    params
}) => {

    const {userId} = auth()

    if(!userId) {
        redirect('/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where:{
            id:params.storeId,
            userId
        }
    });

    if(!store)

  return (
    <div>SettingsPage</div>
  )
}

export default SettingsPage