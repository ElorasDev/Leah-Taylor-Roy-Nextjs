import { create } from 'zustand';

// Define the type for our store
interface ModalStore {
  showModal: boolean;
  closeModal: () => void;
  resetModal: () => void;
}

const useModal = create<ModalStore>((set) => ({
  showModal: true, // Default state is true (modal visible)
  closeModal: () => set({ showModal: false }),
  resetModal: () => set({ showModal: true }),
}));

export default useModal;