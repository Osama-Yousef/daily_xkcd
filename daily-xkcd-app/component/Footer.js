import Link from 'next/link'

export default function Footer(){
    var count = 0
    let item = []
    for(let i = 2369 ; i>=2360 ; i--){
        let oneObj = {elem:i}
        item.push(oneObj)
    }
  

    
    return(
        <>
                
            <ul>
                {item.map( (num) =>
                    <Link key={num.elem} href="/comic/[comic].js" as={`/comic/${num.elem}` }>
                        <a>#{num.elem}</a>
                    </Link>
                )}
            </ul>
            <style jsx>{`
                a{
                    margin-right: 5px;
                    
                }
            `}
            </style>
            
        </>
    )
}