<template>
    <div style="height: auto" class="container">
        <div style="margin-top: 50px;" class="row main-content">
            <div class="col-lg-12 col-md-12 col-sm-12">  
                <div class="telco-heading row justify-content-around">         
                    <h5>REAL ESTATE FINDER</h5>
                    <img class="" src="~@/assets/image/Mask Group 1.svg" alt="" >          
                    <img class="" src="~@/assets/image/Mask Group 2.svg" alt="" >          
                </div>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 mt-5">
                <img class="img-fluid" src="~@/assets/image/Rectangle 18 Copy.png" alt="" >
            </div>
        </div>

        <div class="m-auto">
            <div class="row justify-content-around">
                <div>
                    <img class="img-fluid" src="~@/assets/image/Group 3.svg" alt="" >
                </div>
                <div>
                    <p>Pick Location</p>
                    <h3 @click="showModal()">Jakarta Selatan</h3>
                </div>
                <div>
                </div>
            </div>
                    <hr>
            <div class="row justify-content-around">
                <img class="img-fluid" src="~@/assets/image/Mask Group 4.svg" alt="" >
                <div>
                    <p>Pick Location</p>
                    <h3 @click="showModal()">Jakarta Selatan</h3>
                </div>
                <div>
                </div>
            </div>
                    <hr>
            <div class="row justify-content-around">
                <img class="img-fluid" src="~@/assets/image/Mask Group 5.svg" alt="" >
                <div>
                    <p>Pick Location</p>
                    <h3 @click="showModal()">Jakarta Selatan</h3>
                </div>
                <div>
                </div>
            </div>
                    <hr>
        </div> 
        <b-link :to="{ path: '/request' }">
            <button  class="button">FIND</button>
        </b-link>
            
        <footer class="w-100">
            <div class="row">
                <div class="round">
                    <img class="bundar" src="~@/assets/image/001-magnifying-glass.svg" alt="" >  
                </div>
                <div class="round" >
                    <img class="bundar" src="~@/assets/image/002-chat-bubble.svg" alt="" >  
                </div>
                <div class="round" >
                    <img class="bundar" src="~@/assets/image/003-list.svg" alt="" >  
                </div>
                <div class="round" >
                    <img class="bundar" src="~@/assets/image/004-history.svg" alt="" >  
                </div>
                <div class="round" >
                    <img class="bundar" src="~@/assets/image/005-user.svg" alt="" >  
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>SEARCH</p>
                </div>
                <div class="col">
                    <p>CHAT</p>
                </div>
                <div class="col">
                    <p>CATEGORY</p>
                </div>
                <div class="col">
                    <p>HISTORY</p>
                </div>
                <div class="col">
                    <p>PROFILE</p>
                </div>
            </div>
        </footer>
        <base-dialog v-if="modalShow" @close="closeModal">
            <template #default>
            <p>Type Keyword here</p>
            <p>Jakarta Utara.</p>
            <p>Jakarta Timur.</p>
            <p>Jakarta Pusat.</p>
            <p>Jakarta Selatan.</p>
            <p>Jakarta Bekasi.</p>
            </template>
            <template #actions>
            <base-button @click="closeModal">Okay</base-button>
            </template>
        </base-dialog>
    </div>   
</template>


<script>
// import "@/assets/css/media-query.css";
// import "@/assets/css/main-custom.css";
import BaseDialog from './BaseDialog.vue'
export default{ 
    components: {
        BaseDialog
    },
    data() {
      return {
        modalShow: false
      }
    },
    methods: {
        showModal(){
            this.modalShow = true
        },
        closeModal(){
            this.modalShow = false
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');


h1, h2, h3{
    /* font-weight: 700; */
    font-size: 1.5rem;
}

footer p{
    font-size: 0.5rem;
}

hr{
    width: 100%;
}
.modal {
    width: 100%;
    height: 100%;
    background: #0e4f1f;
}
.button {
    width: 100%;
    background: #42505C;
    color: white;
    font: inherit;
    border: 1.5px solid #0e4f1f;
    padding: 0.5rem;
    border-radius: 16px;
    font-weight: bold;
    cursor: pointer;
}

.bundar{
    position: absolute;
    right: 10px;
    bottom: 10px;
    float: right;
}

.round{
    position: relative;
    color: white;
    background: #79828B ;
    width: 10px;
    height: 10px;
    /* border: 2px solid #424242; */
    border-radius: 50%;
    margin: auto;
    padding: 1.2rem;
    bottom: 10px;
}


 /* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
    footer{
        margin-top: 12rem !important;
    }
    /* footer p{font-size: 1.5vw; display: inline;} */
}

@media (min-height: 1024px) {
    footer{
        margin-top: 32rem !important;
    }
}
@media (min-height: 1366px) {
    footer{
        margin-top: 32rem !important;
    }
}
@media (height: 1361px) {
    footer{
        margin-top: 28rem !important;
    }
}

@media (min-width: 992px){
     footer p{position: absolute; left: 20%; right: 20%;}
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px){
    footer{
        margin-top: 9rem;
    }
}


footer{
    left: 0;
    z-index: 10;
    position: absolute;
    padding: 27px 15px;
    height: auto;
    background: #d7dbe1;
    margin: auto;
}
</style>