import Link from 'next/link'
export default function ComicDetails(props){
    return (
        <>
        <div className="details">
              <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>

            </nav>
            <h1>{props.oneComic.title}</h1>
            <img src={props.oneComic.img}></img>
            </div>
            <style jsx>{`
                a{
                    margin-right: 5px;
                    color: green;
                }
                .details {
                    font: 15px Helvetica, Arial, sans-serif;
                    background: floralwhite;
                    padding: 100px;
                    display: inline-block;
                    border-style: groove;
                    width: 85%;
                    
                    
                  }
            `}
            </style>
        </>
    )
}

export async function getServerSideProps(context){
    const id = context.query.comic
    const res = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: {oneComic: dataObj} };
}