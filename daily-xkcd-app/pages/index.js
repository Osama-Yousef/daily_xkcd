import styles from '../styles.module.css'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.hello}>
      <Header/>
      <h2>{props.comic.title}</h2>
      <img src={props.comic.img} />
      <h2>Previous 10</h2>
      
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(){
  
  const res = await fetch('https://xkcd.com/2369/info.0.json');
  const data = await res.json();
  console.log(data)
  return {props : {comic:data}};

}
