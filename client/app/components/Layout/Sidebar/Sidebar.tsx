import React, { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import { MdPermMedia, MdSupport } from 'react-icons/md'

import Logo from '../../../assets/img/youtube.png'
import Avatar from '../../../assets/img/avatar.svg'

const Sidebar: FC = () => {
    return (
        <section className='sidebar'>
            <Link href='/'>
                <a className='logo' href="">
                    <Image src={Logo} alt='Youtube.com' width={130} height={42}/>
                </a>
            </Link>
            <div className='profile_info'>
                <Image src={Avatar} alt='Avatar' width={70} height={70}/>
            </div>
            <div className='name'>
                Maximus Janukovich
            </div>
            <div className='location'>
                Minsk
            </div>
        </section>
    );
};

export default Sidebar