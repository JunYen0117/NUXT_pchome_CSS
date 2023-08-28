<script setup lang="ts">
const controller = ref<null | Element>(null);
const isMove = ref<boolean>(false);
const goToTop = ref<null | Element>(null);
const scrollPercent = ref<null | number>(null);
const isReachPercent = ref<boolean>(false);

// 監聽isMove，改變HTML的class，決定controller的HTML選單，要顯現or隱藏
watch(isMove,
  () => {
    if (controller.value === null) return
    switch (isMove.value) {
      case true:
        controller.value.className = 'controller d-flex justify-content-evenly controller_hide'
        setTimeout(() => {
          isMove.value = false
        }, 2000)
        break;
      case false:
        controller.value.className = 'controller d-flex justify-content-evenly controller_show'
        break;
    }
      // if (isMove.value === true) {
      //   controller.value.className = 'controller d-flex justify-content-evenly controller_hide'
      //   setTimeout(() => {
      //     isMove.value = false
      //   }, 2000)
      // } else if (isMove.value === false) {
      //   controller.value.className = 'controller d-flex justify-content-evenly controller_show'
      // }
  }
)

// 監聽isReachPercent，改變HTML的class，決定goToTop的HTML按鈕，要顯現or隱藏
watch(isReachPercent,
  () => {
    if (goToTop.value === null) return
    switch (isReachPercent.value) {
      case true:
        goToTop.value.className = 'goToTop fadeIn'
        break;
      case false:
        goToTop.value.className = 'goToTop fadeOut'
        break;
    }
      // if (isReachPercent.value === true) {
      //   goToTop.value.className = 'goToTop fadeIn'
      // } else if (isReachPercent.value === false) {
      //   goToTop.value.className = 'goToTop fadeOut'
      // }
  }
)

onMounted(() => {
  // 以下是捲動監聽：
  // 只要發生捲動事件，就改變常數isMove布林值，變成true
  // 不捲動時，isMove會自動變回false
  window.addEventListener('scroll', () => {
    if(controller.value === null) return
    if(isMove.value === false) {
      isMove.value = true
    }
  })

  // 改變常數scrollPercent的值，它代表捲軸距離的百分比
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const docHeight = document.body.scrollHeight
    const winHeight = window.innerHeight
    const scrollDistance = scrollTop / (docHeight - winHeight)

    scrollPercent.value = Math.round(scrollDistance * 100)
  })

  // 只要捲動超過25%，就改變常數isReachPercent布林值
  window.addEventListener('scroll', () => {
    if (scrollPercent.value === null) return
    if (scrollPercent.value >= 25) {
      isReachPercent.value = true;
    } else if (scrollPercent.value <= 25) {
      isReachPercent.value = false;
    }
  })
})
</script>

<template>
  <div class="mycontainer" id="top">
    <section class="section1 mb-2">
      <nav class="d-flex justify-content-between first_nav">
        <div class="ps-1"><img src="../assets/img/icons8-menu-50.png" alt=""></div>
        <div><img src="../assets/img/logo_pchome.png" alt=""></div>
        <div class="pe-1"><img src="../assets/img/icons8-cart-90.png" alt=""></div>
      </nav>
      <nav class="d-flex sec_nav">
        <div class="nav_active">首頁</div>
        <div>限時瘋搶</div>
        <div>每日特賣</div>
        <div>影音專區</div>
        <div>強檔活動</div>
        <div>智慧標籤</div>
      </nav>
    </section>
    <section class="section2 mb-2 d-flex">
      <input class="input-group-text ms-2" type="text">
      <button class="btn btn-primary me-2">找商品</button>
    </section>
    <section class="section3 mb-2">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://picsum.photos/300/100" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/300/101" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/300/102" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/300/103" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/300/104" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="section4 mb-2">
      <ul class="d-flex justify-content-between">
        <li>
          <img src="../assets/img/icons8-discount-100.png" alt="">
          <div>
            我的折價券
          </div>
        </li>
        <li>
          <img src="../assets/img/icons8-card-100.png" alt="">
          <div>
            儲值更划算
          </div>
        </li>
        <li>
          <img src="../assets/img/icons8-megaphone-100.png" alt="">
          <div>
            Pi卡享6
          </div>
        </li>
        <li>
          <img src="../assets/img/icons8-calender-100.png" alt="">
          <div>
            活動總覽
          </div>
        </li>
      </ul>
      <ul class="d-flex justify-content-between">
        <li>
          <img src="../assets/img/icons8-vr-100.png" alt="">
          <div>
            電競爭霸戰
          </div>
        </li>
        <li>
          <img src="../assets/img/icons8-shoe-100.png" alt="">
          <div>
            出遊散策
          </div>
        </li>
        <li>
          <img src="../assets/img/icons8-fan-100.png" alt="">
          <div>
            風扇5折起
          </div>
        </li>
        <li>
          <img src="../assets/img/icons8-card-100.png" alt="">
          <div>
            刷卡享優惠
          </div>
        </li>
      </ul>
    </section>
    <section class="section5 mb-2">
      <div class="d-flex justify-content-between notification">
        <div class="d-flex">
          <img src="../assets/img/icons8-clock-50-white.png" class="m-2" alt="">
          <span class="info_1 m-2">限時瘋搶</span>
          <span class="info_2">每日10點開搶</span>
        </div>
        <div class="more">
          看更多 >
        </div>
      </div>
      <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-evenly">
              <div class="flex-fill m-1">
                <div class="discount_time">限時瘋搶 <span>21:00</span> 現正瘋搶</div>
                <div class="discount_info">現省6折！結帳享驚喜價</div>
                <div>
                  <img src="https://picsum.photos/150" class="d-block w-100" alt="...">
                </div>
                <div class="price">$3199</div>
              </div>
              <div class="flex-fill m-1">
                <div class="discount_time">限時瘋搶 <span>21:00</span> 現正瘋搶</div>
                <div class="discount_info">現省6折！結帳享驚喜價</div>
                <div>
                  <img src="https://picsum.photos/151" class="d-block w-100" alt="...">
                </div>
                <div class="price">$3199</div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-evenly">
              <div class="flex-fill m-1">
                <div class="discount_time">限時瘋搶 <span>21:00</span> 現正瘋搶</div>
                <div class="discount_info">現省6折！結帳享驚喜價</div>
                <div>
                  <img src="https://picsum.photos/152" class="d-block w-100" alt="...">
                </div>
                <div class="price">$3199</div>
              </div>
              <div class="flex-fill m-1">
                <div class="discount_time">限時瘋搶 <span>21:00</span> 現正瘋搶</div>
                <div class="discount_info">現省6折！結帳享驚喜價</div>
                <div>
                  <img src="https://picsum.photos/153" class="d-block w-100" alt="...">
                </div>
                <div class="price">$3199</div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-evenly">
              <div class="flex-fill m-1">
                <div class="discount_time">限時瘋搶 <span>21:00</span> 現正瘋搶</div>
                <div class="discount_info">現省6折！結帳享驚喜價</div>
                <div>
                  <img src="https://picsum.photos/154" class="d-block w-100" alt="...">
                </div>
                <div class="price">$3199</div>
              </div>
              <div class="flex-fill m-1">
                <div class="discount_time">限時瘋搶 <span>21:00</span> 現正瘋搶</div>
                <div class="discount_info">現省6折！結帳享驚喜價</div>
                <div>
                  <img src="https://picsum.photos/155" class="d-block w-100" alt="...">
                </div>
                <div class="price">$3199</div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="section6 mb-2">
      <div class="category d-flex">
        <div>3C</div>
        <div>週邊</div>
        <div>NB</div>
        <div>通訊</div>
        <div>數位</div>
        <div>家電</div>
        <div>日用</div>
        <div>母嬰</div>
      </div>
      <div class="category d-flex">
        <div>休閒</div>
        <div>保健</div>
        <div>美妝</div>
        <div>時尚</div>
        <div>居家</div>
        <div>書店</div>
        <div>旅遊</div>
        <div>生鮮</div>
      </div>
    </section>
    <section class="section7 mb-5">
      <div class="d-flex justify-content-between notification">
        <div class="d-flex">
          <img src="../assets/img/icons8-clock-50-white.png" class="m-2" alt="">
          <span class="info_1 m-2">每日特賣</span>
          <span class="info_2">3C數位/手機</span>
        </div>
        <div class="more">
          看更多 >
        </div>
      </div>
      <div class="d-flex justify-content-evenly">
        <div class="flex-fill m-1">
          <div class="discount_info">滿額登記送100P幣</div>
          <div>
            <img src="https://picsum.photos/150" class="d-block w-100" alt="...">
          </div>
          <div class="product_name">ASUS 效能筆電</div>
          <div class="price">$3199</div>
        </div>
        <div class="flex-fill m-1">
          <div class="discount_info">滿額登記送100P幣</div>
          <div>
            <img src="https://picsum.photos/151" class="d-block w-100" alt="...">
          </div>
          <div class="product_name">ASUS 效能筆電</div>
          <div class="price">$3199</div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly">
        <div class="flex-fill m-1">
          <div class="discount_info">滿額登記送100P幣</div>
          <div>
            <img src="https://picsum.photos/150" class="d-block w-100" alt="...">
          </div>
          <div class="product_name">ASUS 效能筆電</div>
          <div class="price">$3199</div>
        </div>
        <div class="flex-fill m-1">
          <div class="discount_info">滿額登記送100P幣</div>
          <div>
            <img src="https://picsum.photos/151" class="d-block w-100" alt="...">
          </div>
          <div class="product_name">ASUS 效能筆電</div>
          <div class="price">$3199</div>
        </div>
      </div>
    </section>

    <!-- controller底部控制選單 -->
    <div ref="controller" class="controller d-flex justify-content-evenly controller_show">
      <div>
        <img src="../assets/img/controller/icons8-search-50.png" alt="">
        <div class="name">搜尋</div>
      </div>
      <div>
        <img src="../assets/img/controller/icons8-menu-50.png" alt="">
        <div class="name">分類</div>
      </div>
      <div>
        <img src="../assets/img/controller/icons8-alert-50.png" alt="">
        <div class="name">通知</div>
      </div>
      <div>
        <img src="../assets/img/controller/icons8-user-50.png" alt="">
        <div class="name">顧客中心</div>
      </div>
      <div>
        <img src="../assets/img/controller/icons8-cart-50.png" alt="">
        <div class="name">購物車</div>
      </div>
    </div>

    <!-- 回到最上層按鈕 -->
    <div ref="goToTop" class="goToTop fadeOut">
      <a href="#top" type="button"></a>
      <img src="../assets/img/icons8-triangle-24.png" alt="">
      <div class="word">TOP</div>
    </div>
  </div>
</template>

<style lang="scss">
.nav_active {
  color: red;
  border-bottom: 2px solid red;
}
.section1 {
  background-color: white;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 10;
  .first_nav {
    border-bottom: 2px solid red;
    img {
      height: 25px;
    }
  }
  .sec_nav {
    div {
      padding: 5px;
      font-size: 16px;
    }
    @media screen and (max-width: 440px){
      div {
        font-size: 14px;
      }
    }
  }
}
.section2 {
  width: 100%;
  input {
    flex-grow: 2;
    background-color: white;
    box-shadow: 5px 5px 5px lightgray;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button {
    font-weight: bold;
    box-shadow: 5px 5px 5px lightgray;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.section3 {
  .carousel-item {
    height: 350px;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 768px){
    .carousel-item {
      height: 200px;
    }
  }
  @media screen and (max-width: 440px){
    .carousel-item {
      height: 150px;
    }
  }
}
.section4 {
  overflow: hidden;
  ul {
    list-style: none;
    padding-left: 10px;
    padding-right: 10px;
    li {
      div {
        text-align: center;
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 440px){
      ul {
        padding: 0 0;
      }
    }
}
.section5 {
  .notification {
    background-color: red;
    img {
      height: 30px;
    }
    span {
      display: block;
      color: white;
    }
    .info_1 {
      align-self: center;
    }
    .info_2 {
      align-self: center;
      font-size: 14px;
    }
    .more {
      color: white;
      align-self: center;
    }
  }
  // 輪播
  .carousel-control-prev, .carousel-control-next {
    z-index: 0;
  }
  .discount_time {
    text-align: center;
    span {
      font-weight: bold;
      color: red;
    }
  }
  .discount_info {
    color: white;
    background-color: red;
    font-weight: bold;
    text-align: center;
  }
  .price {
    color: red;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
}
.section6 {
  overflow-x: auto;
  .category {
    width: 700px;
    div {
      width: 100px;
      font-size: 14px;
      text-align: center;
      border: 1px solid lightgray;
      margin: 5px;
    }
  }
}
.section7 {
  .notification {
    color: white;
    background-color: rgb(52, 118, 224);
    img {
      height: 30px;
    }
    .info_1, .info_2, .more {
      align-self: center;
    }
    .more {
      font-size: 14px;
    }
  }
  .discount_info {
    color: white;
    background-color: red;
    font-weight: bold;
    text-align: center;
  }
  .product_name {
    color: gray;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  .price {
    color: red;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
}
.controller {
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0px;
  z-index: 10;

  img {
    width: 30px;
  }
  .name {
    font-size: 14px;
    color: gray;
    text-align: center;
  }
}
.controller_show {
  transition: .5s;
  transform: translateY(0px);
}
.controller_hide {
  transition: .5s;
  transform: translateY(70px);
}
.goToTop {
  width: 60px;
  height: 60px;
  color: white;
  background-color: rgba(0, 0, 0, 0.412);
  border-radius: 50%;
  position: fixed;
  right: 25px;
  bottom: 120px;
  img {
    display: block;
    position: absolute;
    top: 5px;
    left: calc(50% - 15px);
  }
  .word {
    position: absolute;
    top: calc(40%);
    left: calc(50% - 20px);
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
  }
}
.fadeIn {
  transition: .5s;
  opacity: 1;
}
.fadeOut {
  transition: .5s;
  opacity: 0;
}
</style>