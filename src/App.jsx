import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    {
      title: "HB Staedler Pencil",
      description: "A HB Pencil",
      price: "Ksh. 80",
      image: "https://imgs.search.brave.com/hi1opjmesEaaZcu-ZaEo8Ag5BSnrx70WgJ69azE6cjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL3RSa0FB/T1N3dzR0bGhSSjcv/cy1sNTAwLmpwZw"
    },
    {
      title: "Pembe Unga",
      description: "Maize Flour 2KG",
      price: "Ksh. 140",
      image: "https://imgs.search.brave.com/XvW6p8lK1nZRBBXvsE_daq0WDBzWPZvOXL9rrwa1buU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTZ6/bXQ2aGdxMWpoai5j/bG91ZGZyb250Lm5l/dC9wcm9kdWN0LzQw/NTQvUGVtYmUlMjBN/YWl6ZSUyME1lYWwl/MjAyS2cuanBn"
    },
    {
      title: "MillBakers Tea Scones",
      description: "Tea Scones (6pcs)",
      price: "Ksh. 60",
      image: "https://imgs.search.brave.com/NUBh5B7Vpt30gKgD8uTC-MkRx-3Uwq2HWEDcrsYEBvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTZ6/bXQ2aGdxMWpoai5j/bG91ZGZyb250Lm5l/dC9wcm9kdWN0LzEx/MDEwL01pbGxiYWtl/cnMlMjBDaG9jbyUy/MEN1cCUyMENha2Ul/MjAzMDBnLmpwZw"
    },
    {
      title: "Kabras Sugar",
      description: "2KG Bag of Sugar",
      price: "Ksh. 230",
      image: "https://imgs.search.brave.com/bvqze9yBdR1FV1IB4qGShvwrPBORF24p7WOAMft8mbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTZ6/bXQ2aGdxMWpoai5j/bG91ZGZyb250Lm5l/dC9wcm9kdWN0LzE2/OTYvS2FicmFzJTIw/UGFja2VkJTIwU3Vn/YXIlMjBXaGl0ZSUy/MDJLZy5qcGc"
    }
  ]

  return (
    <>
      <Navbar />

      <main className='flex flex-wrap justify-center gap-8 py-12 bg-gray-50'>
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </main>

      <Footer />
    </>
  )
}

export default App
