"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";

export default function Home() {
    const [isVisible, setVisible] = useState(false);

    return (
        <main className="relative h-screen">
            {/* <Image 
                src="https://bit.ly/react-cover" 
                alt="Namao"
                fill
                className="object-cover"
                sizes="(max-width: 480px) 100vh, (max-width: 768px) 50vw, 33vw"
                quality={100}
                priority
            /> */}

            <h1>Hello</h1>
            <button onClick={()=>{
                const users = [
                    {name: "C"},
                    {name: "B"},
                    {name: "D"}
                ]

                const sorted = _.orderBy(users, ["name"])
                console.log(sorted)
            }}>Show</button>
            
        </main>
    );
}
