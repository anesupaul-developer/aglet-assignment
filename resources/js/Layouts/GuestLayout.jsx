import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, usePage} from '@inertiajs/react';
import toast, {Toaster} from "react-hot-toast";
import {useEffect} from "react";

export default function GuestLayout({ children }) {
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
        <>
            <Toaster position="top-right" />
            <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
