import React from "react";

import left from "../assets/icons/3.svg";
import rght from "../assets/icons/4.svg";
import right_ from "../assets/icons/5.svg";
import img from "../assets/icons/6.svg";

import arter from "../assets/png/5.png";
import divinare from "../assets/png/6.png";
import odion from "../assets/png/7.png";
import dom1 from "../assets/png/8.png";

const Company = () => {
  return (
    <div className="container">
      <div className="company">
        <div>
          <div>
            <p>
              <span>Главная </span> : О компании
            </p>
          </div>
          <div className="company_text">
            <h1>О компании</h1>

            <div className="company_color">
              <h1>170+</h1>
              <p>Товаров</p>
            </div>
            <div className="company_color">
              <h1>1000+ </h1>
              <p>Довольных покупателей</p>
            </div>
            <div className="company_color">
              <h1>170+</h1>
              <p>Товаров</p>
            </div>
          </div>
        </div>
        <div className="company_desc ">
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>

          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>

          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>

          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
      <div className="company_title">
        <div>
          <h1>Только проверенные бренды</h1>
        </div>
        <div>
          <img src={left} alt="" />
          <img src={rght} alt="" />
        </div>
      </div>

      <div className="company_png">
        <img src={arter} alt="" />
        <img src={divinare} alt="" />
        <img src={odion} alt="" />
        <img src={arter} alt="" />
        <img src={divinare} alt="" />
      </div>

      <div className="company_blog">
        <div>
          <h1>Блог</h1>
        </div>
        <div>
          <button className="company_bottom">
            Перейти в блог <img src={right_} alt="" />
          </button>
        </div>
      </div>

      <div className="company_cardblog">
        <div className="company_card">
          <img src={dom1} alt="" />
          <div className="company_subtitle">
            <p>Как правильно освещать дом снаружи?</p>
            <img src={img} alt="" />
          </div>
          <p>01.01.2024</p>
        </div>

        <div className="company_card">
          <img src={dom1} alt="" />
          <div className="company_subtitle">
            <p>Как правильно освещать дом снаружи?</p>
            <img src={img} alt="" />
          </div>
          <p>01.01.2024</p>
        </div>

        <div className="company_card">
          <img src={dom1} alt="" />
          <div className="company_subtitle">
            <p>Как правильно освещать дом снаружи?</p>
            <img src={img} alt="" />
          </div>
          <p>01.01.2024</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
