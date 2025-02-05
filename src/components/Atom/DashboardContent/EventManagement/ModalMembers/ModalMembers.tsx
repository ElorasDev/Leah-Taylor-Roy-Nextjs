import { NextPage } from "next";
import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const ModalMembers: NextPage<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 p-4 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-fit h-80 overflow-auto p-6 relative">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default ModalMembers;
