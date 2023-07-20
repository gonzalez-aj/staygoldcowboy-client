/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import Hat from '../images/Hat.png';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link passHref href="/">
          <a>
            <Image src={Hat} alt="Gold Hat" width={70} height={50} />
          </a>
        </Link>
        <ul className="px-3 text-3xl">
          <Link href="/about" className="text-3xl">About</Link>
        </ul>
        <div className="dropdown">
          <Button className="btn btn-ghost lg:hidden">
            <svg href="/" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </Button>
          <Button className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/about" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">About</Link></li>
            <li>
              <a>Art</a>
              <ul className="p-2">
                <li><Link href="/videos">Videos</Link></li>
                <li><Link href="/arts/new">Add Art</Link></li>
              </ul>
            </li>
            <li>
              <a>Tags</a>
              <ul className="p-2">
                <li><Link href="/tags">View Tags</Link></li>
                <li><Link href="/tags/new">Add Tag</Link></li>
              </ul>
            </li>
          </Button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex text-3xl">
        <ul className="menu menu-horizontal px-1 text-3xl">
          <li><Link href="/videos">Videos</Link></li>
          <li><Link href="/arts/new">New Art</Link></li>
          <li><Link href="/tags">Tags</Link></li>
          <li><Link href="/tags/new">New Tag</Link></li>
        </ul>
      </div>
      <div className="dropdown dropdown-end text-2xl">
        <Button className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image className="w-10 rounded-full" src={user?.fbUser?.photoURL} width={50} height={50} />
          </div>
        </Button>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Button className="pt-2 text-xl" onClick={signOut}>Sign Out</Button></li>
        </ul>
      </div>
    </div>
  );
}
