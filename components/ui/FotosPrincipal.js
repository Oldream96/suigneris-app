// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { css } from "@emotion/react";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const FotosPrincipal = () => {
  return (
      <div css={css`
        padding-top: 2rem;
        padding-bottom: 2rem;
        width:100%;
        background: var(--gris1);
        `}
      >
        <div css={css`
          max-width:1200px;
          height: inherit;
          margin: auto;
        `}>
          <Swiper
            slidesPerView={1}
            loop={true}
            className="mySwiper"
            // cssMode={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              "clickable": true,
            }}
          >
            <SwiperSlide>
              <img src="/static/img/bra2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/static/img/bra3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/static/img/bra4.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  );
};

export default FotosPrincipal;
