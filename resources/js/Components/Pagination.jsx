// resources/js/Components/Pagination.jsx

import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {router} from "@inertiajs/react";

const Pagination = ({ items, scrollPosId, searchQuery, callBack }) => {
    const [currentPage, setCurrentPage] = useState(items.meta.current_page);
    const [totalPages, setTotalPages] = useState(items.meta.last_page);

    if (totalPages <= 1) return null;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        const url = new URL(window.location.href);
        url.searchParams.set('page', pageNumber);

        router.get(`${url.pathname}?${url.searchParams.toString()}`,
            {},
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: (page) => {
                    callBack(page);
                }
            });

        scrollToSection(scrollPosId);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = 0;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            //window.scrollTo({ top: 500, behavior: 'smooth' });
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            paginate(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1)
        }
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <Button
                variant="outline"
                size="icon"
                className="text-slate-800"
                onClick={prevPage}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {items.meta.links.map((linkedItem, index) => (
                linkedItem.url && !linkedItem.label.includes('&')
                ? <Button
                        key={index}
                        variant={currentPage === +linkedItem.label ? "default" : "outline"}
                        className={`min-w-[40px] ${
                            currentPage === +linkedItem.label
                                ? "bg-red-600 hover:bg-red-700 text-white px-3 py-1"
                                : "border-gray-700 text-black hover:bg-gray-800 hover:text-white px-3 py-1"
                        }`}
                        onClick={() => paginate(+linkedItem.label)}
                    >
                        {linkedItem.label}
                    </Button>: null
            ))}

            <Button
                variant="outline"
                size="icon"
                className="text-slate-800"
                onClick={nextPage}
                disabled={currentPage === totalPages}
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default Pagination;
