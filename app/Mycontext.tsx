'use client';
import React, { Dispatch, SetStateAction } from 'react';
interface IMyContext {
    data: boolean;
    setData: Dispatch<SetStateAction<boolean>>;
  }

export const MyContext = React.createContext<IMyContext>({
    data: false,
    setData: () => {},
  });