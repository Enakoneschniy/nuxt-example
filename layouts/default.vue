<template>
  <div>
    <!--<TheHeader/>-->
    <header class="header">
      <div class="container">
        <div class="header__content">
          <a href="#" class="header__logo">
            <img src="img/CRYPTOMIR LOGO-3.png" alt="">
          </a>
          <div class="cell">
            <span class="burger-menu"></span>
            <nav class="header__nav">
              <a href="index.html">Главная</a>
              <a href="education.html">Обучение</a>
              <a href="news.html">Новости</a>
              <a href="aboutUs.html">О нас</a>
              <a href="#">Контакты</a>
            </nav>
            <button class="btn">Запись</button>
          </div>
        </div>
      </div>
    </header>
    <nuxt/>
    <footer class="footer">
      <div class="container">
        <div class="footer-flex">
          <div class="footer-flex__logo-wr">
            <a href="#" class="footer-flex__logo">
              <img src="img/CRYPTOMIR LOGO-3.png" alt="">
            </a>
          </div>
          <div class="footer-flex__address">01001, г. Киев, Ул. Крещатик, 15, офис 110</div>
          <a href="tel:80442238988" class="footer-flex__phone">+38 044 223 89 88</a>
          <a href="mailto:info@cryptomir.com.ua" class="footer-flex__mail">info@cryptomir.com.ua</a>
          <div class="social">
            <a href="#" class="icon-facebook">
              <img src="img/icons/facebook.svg" alt="">
            </a>
            <a href="#" class="icon-instagram">
              <img src="img/icons/instagram.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import TheHeader from "../components/TheHeader";
  export default {
    components: { TheHeader }
  }
</script>
