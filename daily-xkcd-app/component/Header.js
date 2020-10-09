import Link from 'next/link'

export default function Header(){
    return(
        <>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>

            </nav>
            <h1>XKCD</h1>

            <style jsx>{`
                a{
                    margin-right: 5px;
                    color: green;
                }
            `}
            </style>
            </>
    )
}