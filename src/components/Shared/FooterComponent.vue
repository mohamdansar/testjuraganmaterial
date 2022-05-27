<template>
    <div>
        <div class="telco-wave-img w100 fixed-bottom">
            <img class="" src="~@/assets/image/main/Rectangle 30.svg" alt="wave1">
            <img class="" src="~@/assets/image/main/Rectangle 31.svg" alt="wave2">
        </div> 
        <footer class="w-100">
            <img class="" src="~@/assets/image/001-magnifying-glass.svg" alt="" >  
        </footer>  
            <!-- <p style="color: #BDBDBD;">{{new Date().getFullYear()}} Telkom Data Scientist | Version 4.0.0 | All Rights Reserved</p> -->
            <!-- 001-magnifying-glass -->
    </div>
</template>


<script>
export default {

}
</script>

<style scoped>
@media(max-width: 575.98px){
    footer{
    padding: 1px; font-size: 3vmin;
    margin-top: 29;
    }
}   

footer{
    /* z-index: 1; */
    margin-top: 42vmin;
    padding: 15px;
    height: 60px;
    background: #c1d1eb;
}
footer p{
    /* color: #FFFFFF; */
    /* margin-top: 60px; */
    margin: auto;
}       
</style>
