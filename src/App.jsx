import './App.css'
import Card from './Components/Cards/Cards'
import Fsection from './Components/Fsection/Fsection'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import data from './data'
function App() {
  const items=data.map(item=>{
    return(
         <Card 
         key={item.id}
         item={item}
         />
    )
  })
  return (
    <>
      <Navbar/>
      <Fsection/>
      <section className='scards'>
        {items}
      </section>
      <Footer/>
    </>
  )
}

export default App
