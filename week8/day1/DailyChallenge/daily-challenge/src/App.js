import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {
  return (
    <>
    <Carousel >
            <div>
                <img src="/HongKong.jpg" />
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="/Japan.webp" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="/Macao.webp" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="/NewYork.webp" />
                <p className="legend">New-York</p>
            </div>
        </Carousel>
    </>
  );
}

export default App;
