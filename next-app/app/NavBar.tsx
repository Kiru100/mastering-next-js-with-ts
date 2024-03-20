"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  	const {status, data: session} = useSession();
  
	return (
		<div className='flex bg-slate-200 p-5'>
			<Link href="/" className="mr-5">Next.js</Link>
			<Link href="/users" className="mr-5">Users</Link>
			{status === "loading" && <span className="loading loading-dots loading-sm"></span>}
			{status ==="authenticated" && 
				<div>
					<span className="mr-2">{session.user!.name}</span>
					<Link href="/api/auth/signout">Sign Out</Link>
				</div>
			}
			{status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}      
		</div>
	)
}

export default NavBar;
