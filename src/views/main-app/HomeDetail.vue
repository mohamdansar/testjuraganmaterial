<template>
    <div>
        <div class="container">
            <div style="margin-top: 50px;" class="row main-content">
                <div class="col-lg-12 col-md-12 col-sm-12">  
                    <div style="width: 100%" class="telco-heading row justify-content-around">
                        <b-link :to="{ path: '/home' }">
                        <img class="box" src="~@/assets/image/arrow-left3.svg" alt="" >  
                         </b-link>  
                        <form action="">
                            <input class="input-box" type="text" placeholder="cari poperti">
                        </form>      
                    </div>
                    <hr>
                <p class="text-left">13212 Homes found at Jakarta Selatan</p>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <b-link :to="{ path: '/' }">
                    <img style="width: 100%" src="~@/assets/image/slider3.png" alt="" >    
                    </b-link>
                    <p class="text-left">2 Rooms 1 Bath room 250M2</p>
                    <h6>Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian</h6>
                    <p class="text-left">Rp 800 Juta</p>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <b-link :to="{ path: '/' }">
                    <img style="width: 100%" src="~@/assets/image/slider3.png" alt="" >    
                    </b-link>
                    <p class="text-left">2 Rooms 1 Bath room 250M2</p>
                    <h6>Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian</h6>
                    <p class="text-left">Rp 800 Juta</p>
                </div>

            </div>

        </div>
        <footer class="w100 telco-heading row justify-content-around">
                <div class="col">
                    <img style="margin-right: 0.1rem" src="~@/assets/image/filter2.svg" alt="" > 
                    <p>Filter</p>
                </div>
                <div class="col">
                    <img style="margin-left: 0.1rem" src="~@/assets/image/sliders1.svg" alt="" >
                    <p>Sort</p>
                </div>
        </footer>
    </div>   
</template>


<script>
export default{ 
    data() {
      return {
        modalShow: false
      }
    },
    methods: {

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');

/* .telco-3-card{top: 20px;} */

h1, h2{
    font-weight: 700;
}

h6{
    text-align: left;
    font-weight: bold;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px){
    .container{min-width: 50%;}
    .main-content div:nth-child(2){
        margin-bottom: 25px;
    }
    .main-content div:nth-child(3){
        margin-bottom: 25px;
    }
    .telco-heading{margin-top: -30px;}
    .telco-heading h2{font-size: 10.5vw; display: inline;}
    h2::after{
        content: "\00a0 ";
    }
    h1.display-4{display: inline;}
    footer{
        padding: 10vw;
        margin-top: 50px;
    }
    footer p{font-size: 3vw;}
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px){
    /* footer p{font-size: 9.5vw;}  */
}

.box {
    border-radius: 4px;
    width: 3rem;
    height: 3rem;
    padding: 10px;
    background: #dcdde0;
    text-align: center;
    /* padding: 1rem; */
    margin: 0.5rem 0;
    /* width: 100%; */
}

.input-box {
    border-radius: 4px;
    width: 15rem;
    height: 3rem;
    padding: 10px;
    border: 0;
    background: #dcdde0;
    text-align: center;
    /* padding: 1rem; */
    margin: 0.5rem 0;
    /* width: 100%; */
}

/*  Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px){
    .telco-heading h2{font-size: 7vw; }
     h1.display-4{font-size: 5vw;}
    footer{
        padding: 10px;
        margin-top: 50px;
    }
    footer p{font-size: 1.5vmax;}
}

 /* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
    footer{
        margin-top: 130px;
    }
    footer p{margin:5px auto;}
    /* footer p{font-size: 1.5vw; display: inline;} */
}

@media (min-width: 992px){
     footer p{position: absolute; left: 20%; right: 20%;}
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px){
    footer{
        margin-top: 95px;
    }
}

@media (min-height: 1024px) {
    footer{
        margin-top: 420px;
    }
}
@media (min-height: 1366px) {
    footer{
        margin-top: 475px;
    }
}
@media (height: 1361px) {
    footer{
        margin-top: 475px;
    }
}

footer{
    /* z-index: 1; */
    padding: 15px;
    height: 60px;
    background: #dcdde0;
    position: sticky;
    bottom: 1px;
}
footer p{
    /* color: #FFFFFF; */
    /* margin-top: 60px; */
    margin: auto;
} 

</style>