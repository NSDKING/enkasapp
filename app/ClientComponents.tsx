'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import React from 'react';
import { MyContext } from "./Mycontext";

const inter = Inter({ subsets: ["latin"] });


export default function ClientComponents({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = React.useState(false);

    return (
          <MyContext.Provider value={{ data, setData }}>
            <html lang="en">
              <Navbar/>
              <body className={inter.className}>{children}</body>
              
            </html>
          </MyContext.Provider>
    );
}


 