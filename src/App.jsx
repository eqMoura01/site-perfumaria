import Header from './components/header/Header'
import './App.css'
import Destaques from './components/destaques/Destaques'
import CardPerfume from './components/card-perfume/CardPerfume'
import PerfumeFotos from './assets/perfumes-fotos/PerfumeFotos'

function App() {

  const perfumes = [
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.imagem1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
  ]

  // #152441 AZUL LOGO

  return (
    <div className='App'>
      <Header></Header>
      <Destaques></Destaques>
      <div className='perfume-catalog'>
        {perfumes.map((item, index) => (
          <CardPerfume perfume={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App
