import { FC } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout ({children} : {children: React.ReactNode}){
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}
