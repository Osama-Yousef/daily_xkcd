import Link from 'next/link'
export default function About(){
    return(
        <>
        <div className="about">
        <Link href="/">
        <a>Home</a>
        </Link>
        <Link href="/about">
        <a>About</a>
        </Link>
        
        <h1>About Page</h1>
        </div>
        <style jsx>{`
                a{
                    margin-right: 5px;
                    color: green;
                }
                .about {
                    font: 15px Helvetica, Arial, sans-serif;
                    background: floralwhite;
                    padding: 100px;
                    display: inline-block;
                    border-style: groove;
                    width: 85%;
            `}
            </style>
        </>
        ) 
        
}