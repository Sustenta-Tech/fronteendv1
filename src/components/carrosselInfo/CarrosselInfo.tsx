// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./CarrosselInfo.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function CarrosselInfo() {
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
                    <img src="https://imgur.com/bxe0qOP.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/AQvbdlG.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/9VSP3KU.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/fqcLA5S.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default CarrosselInfo