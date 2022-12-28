import { createContext, useState } from 'react'
import React from 'react'

export const UiContext = createContext() 

export const UiProvider = ({children}) => {
    const [isSideBarOpen, setSideBarOpen] = useState(false)
    const toggleSideBar = () => setSideBarOpen((prev) => !prev )

    return (
        <UiContext.Provider value = {{isSideBarOpen, toggleSideBar}} > {children} </UiContext.Provider>
        )}
        