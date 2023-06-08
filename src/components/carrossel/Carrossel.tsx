// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importando link para produtos
import { Link } from "react-router-dom";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/produtos">
                    <img src="src\imagens\ceu.png" alt="Imagem" referrerPolicy="no-referrer" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/produtos">
                    <img src="src\imagens\painel.png" alt="Imagem" referrerPolicy="no-referrer" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/produtos">
                    <img src="src\imagens\verde.png" alt="Imagem" referrerPolicy="no-referrer" />
                    </Link>
                </SwiperSlide>

            </Swiper>
        </>
            
    )
}

export default Carrossel