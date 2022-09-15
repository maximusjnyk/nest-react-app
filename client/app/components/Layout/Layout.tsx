import React, { FC, PropsWithChildren } from 'react'
import Sidebar from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import Head from 'next/head';

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <main>
                    <Sidebar/>
                    <section className='content'>
                        <Header/>
                        <div className='content-wrapper'>
                            { children }
                        </div>
                    </section>
                </main>
            </Head>

        </>

    );
};