import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Navbar from './components/Navbar/Navbar'
import {
  Home, Sale, Kids,
  AllK, NewArrivalsK, ClothesK, ShoesK,
  GolfWang, TenDeep, AColdWall, Kith,
  AllQ, NewArrivals, Clothes, Shoes,
  Huf, Stussy
} from './pages/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sale" exact element={<Sale />} />
        <Route path="/kids" exact element={<Kids />} />
        {/* KINGS */}
        <Route path="/kings/browse_all" exact element={<AllK />} />
        <Route path="/kings/newarrivals" exact element={<NewArrivalsK />} />
        <Route path="/kings/clothes" exact element={<ClothesK />} />
        <Route path="/kings/shoes" exact element={<ShoesK />} />
        {/* Kings BRANDS */}
        <Route path="/kings/golf_wang" exact element={<GolfWang />} />
        <Route path="/kings/10_deep" exact element={<TenDeep />} />
        <Route path="/kings/a_cold_wall" exact element={<AColdWall />} />
        <Route path="/kings/kith" exact element={<Kith />} />
        {/* QUEENS */}
        <Route path="/queens/browse_all" exact element={<AllQ />} />
        <Route path="/queens/newarrivals" exact element={<NewArrivals />} />
        <Route path="/queens/clothes" exact element={<Clothes />} />
        <Route path="/queens/shoes" exact element={<Shoes />} />
        {/* Queens BRANDS */}
        <Route path="/queens/huf" exact element={<Huf />} />
        <Route path="/queens/stussy" exact element={<Stussy />} />
      </Routes>
    </>
  );
}

export default App;
