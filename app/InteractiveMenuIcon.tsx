'use client';
import React from 'react'
import Image from "next/image";
import { useState } from "react";
 

interface InteractiveMenuIconProps {
    isOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   }

const InteractiveMenuIcon: React.FC<InteractiveMenuIconProps> = ({setIsOpen, isOpen}) => {
 
    return (
            <>
                <Image 
                    onClick={() => setIsOpen(!isOpen)}
                    src="/img/menu.png"
                    alt="logo"
                    width={35}
                    height={27}
                />
            </>  
        )
}

export default InteractiveMenuIcon


 