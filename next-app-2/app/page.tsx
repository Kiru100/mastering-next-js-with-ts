import Image from "next/image";
import namao from "@/public/images/Screenshot 2024-03-15 235956.png"

export default function Home() {
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
        </main>
    );
}
