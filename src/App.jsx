import { useEffect, useState } from 'react'
import './App.css'
import { CardCoffee } from './components/card_coffee'

function App() {
  const [coffeList, setCoffeList] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setCoffeList(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <img src="src/assets/bg-cafe.jpg" alt="" className='banner' />
      <section className='container'>
        <header className='coffee-header'>
          <img className='coffe-vector' src="src/assets/vector.svg" alt="" />
          <div className='coffee-header-section'>
            <h1 className='coffee-tittle'>Our Collection</h1>
            <p className='coffee-description'>
              Introducing out Coffee Collection, a section of unique coffees from different roast types
              and origins, expertly roasted in small barches and shipped fresh weekly.
            </p>
          </div>
        </header>
        <nav className='navbar'>
          <button className='navbar-btn'>All Products</button>
          <button className='navbar-btn'>Available Now</button>
        </nav>
        <section className='section-coffee'>
          {
            coffeList.map((coffee) => (
              <CardCoffee 
                key={coffee.id}
                name={coffee.name}
                image={coffee.image}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            ))
          }
        </section>
      </section>
    </>
  )
}

export default App
