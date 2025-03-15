import Head from 'next/head'
import React from 'react'

export default function Seo({ title, descrption }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={descrption} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
