<template>
  <div class="app">
    <center> <header>
      <h2> <i class="far fa-smile"></i> SELAMAT BERBAHAGIA DAN BERSUKA CITA MENYAMBUT HARI RAYA IDUL FITRI </h2> <hr/>
    </header> </center>
    <div class="container">
      <center> <img src="../assets/eid-mubarok.png" alt="bedug" class="bedug-img"> </center>
      <div class="box-ucapan">
        <h1 class="ucapan-hari-raya">Selamat Hari Raya Idul Fitri 1440 H</h1>

        <p class="sub-ucapan-hari-raya">"Taqobbalallahu minna wa minkum <br/> (Semoga Allah menerima  amalku dan amal kalian)."
        </p>

        <p class="nasihat">Selamat hari raya idul fitri 1440 H teman teman semuanya, semoga dengan <br/> ramadhan yang kita lakukan sebulan ini bisa membuat kita lebih baik lagi dari <br/> sebelumnya, salam hangat <strong>#muhfaridzia</strong>
        </p>

        <h3 class="tagar">#IdulFitri #Lebaran #HariRaya #Islam #Muslim #1440H</h3>
      </div>
    </div>
    <footer>
      <p> [Dibuat dengan <strong class="love">❤</strong> di Lombok/Mantang/NusaTenggaraBarat/Indonesia] </p>
    </footer>
  </div>
</template>

<style scoped>
  .app {
    width: 96%;
  }
  header {
    width: 66%;
    margin: 70px auto;
  }
  header hr {
    border: 1px solid black;
  }
  header h2 {
    text-align: left;
  }
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 60%;
    font-family: 'Source Sans Pro', sans-serif;
  }
  /* .box-ucapan {
    width: 90%;
  } */
  .bedug-img {
    margin: -80px 0px 0px 200px;
    width: 350px;
  }
  .ucapan-hari-raya {
    margin: 0px 0px 0px 0px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 35px;
  }
  .sub-ucapan-hari-raya {
    /* width: 65%; */
    line-height: 21px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 200px;
    font-size: 20px;
  }
  .tagar {
    font-weight: bold;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
  }
  .nasihat {
    /* width: 68%; */
    font-weight: 200px;
  }
  footer {
    width: 66%;
    margin: 70px auto;
    position: relative;
  }
  footer p {
    position: absolute;
    top: 50px;
    font-weight: bold;
  }
  .love {
    color: red;
  }
  @media (max-width: 1200px) {
    .container {
      grid-template-columns: 1fr;
    }
    .bedug-img {
      margin-left: 0px;
      width: 200px;
    }
    .ucapan-hari-raya {
      text-align: center;
      font-size: 20px;
      text-align: center;
    }
    .nasihat, .sub-ucapan-hari-raya {
      font-size: 15px;
      /* margin-left: 100px; */
      text-align: center;
      padding: 0px 50px;
    }
    footer p {
      font-size: 9px;
    }
    .tagar {
      font-size: 15px;
      text-align: center;
      padding: 0px 50px;
    }
  }
  @media (max-width: 400px) {
    .bedug-img {
      margin-left: 0px;
      width: 200px;
    }
    .ucapan-hari-raya {
      text-align: center;
      font-size: 17px;
    }
    .nasihat, .sub-ucapan-hari-raya {
      font-size: 17px;
      padding: 0px 30px;
    }
    .tagar {
      font-size: 14px;
      padding: 0px 30px;
    }
  }
</style>
