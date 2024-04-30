import { FC } from "react";
import Header from "../components/header";

export default function Layout ({children} : {children: React.ReactNode}){
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}
