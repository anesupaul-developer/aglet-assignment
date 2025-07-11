import { usePage } from '@inertiajs/react';
import {useEffect, useState} from 'react';
import toast, {Toaster} from "react-hot-toast";

export default function AuthenticatedLayout({children }) {

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    return (
        <div className="min-h-screen">
            <Toaster position="top-right" />
            <main>{children}</main>
        </div>
    );
}
