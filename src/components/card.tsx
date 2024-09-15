'use client'

import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

function Card({ children }: CardProps) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center w-full max-w-2xl p-8 md:p-16 bg-neutral-900 border border-sky-950 rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default Card;