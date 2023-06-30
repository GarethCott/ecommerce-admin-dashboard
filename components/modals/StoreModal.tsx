"use client"

import useStoreModal from "@/hooks/useStoreModal"
import Modal from "@/components/ui/Modal"

export const StoreModal = () => {
    
    const storeModal = useStoreModal();

  return (
    <Modal 
        title="Create store"
        description="Add a new store to manage your products" 
        isOpen={storeModal.isOpen} 
        onClose={storeModal.onClose}
        >
            Future create store form
    </Modal>
  )
}
