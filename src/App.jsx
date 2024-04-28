import Header from './components/header/Header'
import './App.css'
import Destaques from './components/destaques/Destaques'
import CardPerfume from './components/card-perfume/CardPerfume'
import PerfumeFotos from './assets/perfumes-fotos/PerfumeFotos'

function App() {

  const perfumes = [
    {
      image: PerfumeFotos.i1,
      brand: 'Lataffa',
      name: 'Al Asad',
      valuePix: '250,00',
      value: '299,90'
    },
    {
      image: PerfumeFotos.i2,
      brand: 'Lataffa',
      name: 'KHAMRAH',
      valuePix: '296,10',
      value: '329,00'
    },
    {
      image: PerfumeFotos.i3,
      brand: 'Lataffa',
      name: 'SHEIKH AL SHUYUKH',
      valuePix: '224,10',
      value: '249,00'
    },
    {
      image: PerfumeFotos.i4,
      brand: 'Lataffa',
      name: 'MUSAMAM',
      valuePix: '220,50',
      value: '245,00'
    },
    {
      image: PerfumeFotos.i5,
      brand: 'Lataffa',
      name: 'NAJDIA TRIBUTE',
      valuePix: '220,50',
      value: '245,00'
    },

  ]

  // #152441 AZUL LOGO

  return (
    <div className='App'>
      <Header className='header'></Header>
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
