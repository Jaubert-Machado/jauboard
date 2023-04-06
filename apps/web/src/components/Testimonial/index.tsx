import React, { FC } from "react";
import * as S from "./style";
import profile from "../../../public/profile.jpg";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";

interface CardProps {
  testimonialText: string;
  userImage: string;
  userName: string;
  userTitle: string;
}

// SwiperCore.use([Pagination]);

const Card: FC<CardProps> = ({
  testimonialText,
  userImage,
  userName,
  userTitle,
}) => {
  return (
    <S.Card>
      <S.CardBody>
        <S.CardText>{testimonialText}</S.CardText>
      </S.CardBody>
      <S.CardFooter>
        <S.CardImage src={userImage} alt="User Image" />
        <S.Info>
          <S.Name>{userName}</S.Name>
          <S.Title>{userTitle}</S.Title>
        </S.Info>
      </S.CardFooter>
    </S.Card>
  );
};

const Testimonial = () => {
  return (
    <S.Container>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        style={{ height: 190, width: "100%" }}
        autoplay={{ delay: 2000 }}
        speed={2000}
        loop={true}
      >
        <SwiperSlide>
          <Card
            testimonialText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
            userImage={profile.src}
            userName="Jaubert Machado"
            userTitle="CEO"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            testimonialText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
            userImage={profile.src}
            userName="Jaubert Machado"
            userTitle="CEO"
          />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default Testimonial;
