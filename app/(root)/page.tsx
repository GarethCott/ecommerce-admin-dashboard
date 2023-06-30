"use client"
import { ModeToggle } from "@/components/ui/LightDarkMode";
import Modal from "@/components/ui/Modal";
import useStoreModal from "@/hooks/useStoreModal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state)=>state.onOpen);
  const isOpen = useStoreModal((state)=>state.isOpen);

  useEffect(()=>{
    if(!isOpen) {
      onOpen()
    }
  }, [isOpen,onOpen])

  return (
    <div className="p-4">
      Root page
      {/* <ModeToggle/> */}
    </div>
  )
}

export default SetupPage;