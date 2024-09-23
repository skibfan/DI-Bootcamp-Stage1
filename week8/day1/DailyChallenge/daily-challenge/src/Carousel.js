import { Carousel } from 'react-responsive-carousel';

export const MyCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src="../public/HongKong.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="../public/Japan.webp" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="../public/Macao.webp" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="../public/NewYork.webp" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}