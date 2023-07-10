import React from "react"
import NombreProjet from "../component/NombreProjet"
import Header from "../component/Header"

export default function Home(){


    return(
        <>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <div class="h-32 rounded-lg bg-gray-100">
                <Header />
            </div>
            <div class="h-32 rounded-lg lg:col-span-3">
                <NombreProjet />
            </div>
        </div>          
           
        </>
    )
}