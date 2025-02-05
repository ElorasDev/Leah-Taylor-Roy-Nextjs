"use client";
import { NextPage } from "next";
import { FiX, FiUser, FiMail, FiSmartphone } from "react-icons/fi";
import { useForm } from "react-hook-form";

type Props = {
    eventId: number;
    eventTitle: string;
    isOpen: boolean;
    onClose: () => void;
    onRegister: (data: RegisterClientDto) => Promise<void>;
};

type RegisterClientDto = {
    fullname: string;
    email: string;
    phone_number: string;
};

const RegisterEventModal: NextPage<Props> = ({
    isOpen,
    onClose,
    eventTitle,
    onRegister,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterClientDto>();

    const onSubmit = async (data: RegisterClientDto) => {

            await onRegister(data);;
            reset();
            onClose();
            
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md transform transition-all scale-95 animate-in slide-in-from-bottom-10">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Register for {eventTitle}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm text-left font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                {...register("fullname", { required: "Required field" })}
                                placeholder="John Doe"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        {errors.fullname && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.fullname.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-left font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Required field",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="john@example.com"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-left font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <div className="relative">
                            <FiSmartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                {...register("phone_number", {
                                    required: "Required field",
                                    pattern: {
                                        value: /^(\+?1)?[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
                                        message: "Invalid Canadian phone number"
                                    },
                                    setValueAs: (value) => value.replace(/[^\d]/g, '')
                                })}
                                placeholder="+1 (123) 456-7890"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        {errors.phone_number && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone_number.message}
                            </p>
                        )}
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Complete Registration
                                    <FiUser className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterEventModal;