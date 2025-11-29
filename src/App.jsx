import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import logo from "./assets/icons/logo.svg";
import katolog from "./assets/icons/katolog.svg";
import qidiruv from "./assets/icons/qidiruv.svg";
import like from "./assets/icons/like.svg";
import compare from "./assets/icons/1.svg";
import cart from "./assets/icons/2.svg";
import logo2 from "./assets/icons/logo2.svg";

import visa from "./assets/png/11.png";

const Company = lazy(() => import("./pages/Company"));
const Delivery = lazy(() => import("./pages/Delivery"));
const ReturnPage = lazy(() => import("./pages/Return"));
const Guarantee = lazy(() => import("./pages/Guarantee"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Blog = lazy(() => import("./pages/Blog"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
        <div className="container">
          <header className="head">
            <div className="head_text">
              <div>
                <ul>
                  <li>
                    <Link to="/company">О компании</Link>
                  </li>
                  <li>
                    <Link to="/delivery">Доставка и оплата</Link>
                  </li>
                  <li>
                    <Link to="/return">Возврат</Link>
                  </li>
                  <li>
                    <Link to="/guarantee">Гарантии</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты</Link>
                  </li>
                  <li>
                    <Link to="/blog">Блог</Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>8 (800) 890-46-56</li>
                  <li>Заказать звонок</li>
                </ul>
              </div>
            </div>

            <div className="head_img">
              <div className="head_desc">
                <div className="head_norlignt">
                  <Link to="/company">
                    <img className="logo_img" src={logo} alt="logo" />
                  </Link>
                </div>

                <button className="head_buttom">
                  <img src={katolog} alt="katolog" />
                </button>

                <div className="head_input">
                  <input type="text" placeholder="Поиск по товарам" />
                  <img src={qidiruv} alt="search" />
                </div>

                <div className="head_img_3">
                  <div className="head_svg">
                    <img src={like} alt="like" />
                  </div>

                  <div className="head_svg">
                    <img src={compare} alt="compare" />
                  </div>

                  <div className="head_svg1">
                    <img className="img_shox" src={cart} alt="cart" />
                  </div>
                </div>
              </div>
              <div className="head_input head_input2">
                <input type="text" placeholder="Поиск по товарам" />
                <img src={qidiruv} alt="search" />
              </div>
            </div>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Company />} />

          <Route path="/company" element={<Company />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/return" element={<ReturnPage />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <footer className="footer_blog">
          <div className="container">
            <div className="footer_text_2">
              <div className="footer_logo">
                <img src={logo2} alt="" className="footer_img_1" />
                <p className="footer_number">8 (800) 890-46-56</p>
                <img src={visa} alt="" />
                <p className="footer_text">Политика конфидециальности</p>
                <p className="footer_text">Пользовательское соглашение</p>
                <div className="footer_vk">
                  <p>VK</p>
                  <p>VK</p>
                  <p>VK</p>
                </div>
              </div>
              <div className="footer_h1">
                <h1>Покупателям</h1>
                <div className="footer_text_3">
                  <p>O компании</p>
                  <p>Доставка и оплата</p>
                  <p>Возврат</p>
                  <p>Гарантии</p>
                  <p>Контакты</p>
                  <p>Блог</p>
                </div>
              </div>
              <div>
                <h1>Товары</h1>
                <div className="footer_text_3">
                  <p>Люстры</p>
                  <p>Светильники</p>
                  <p>Бра</p>
                  <p>Торшеры</p>
                  <p>Комплектуюшие</p>
                  <p>Настольные лампы</p>
                </div>
              </div>
              <div>
                <div className="footer_text_33">
                  <p>Споты</p>
                  <p>Трековые светильники</p>
                  <p>Уличные светильники</p>
                  <p>Технические светильники</p>
                  <p>Светодиодные ленты</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
