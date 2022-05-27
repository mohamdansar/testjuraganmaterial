<template>
    <div class="telco-page-wrapper">
        <h1 class="mt-3 display-6">Telco Risk Scoring</h1> 
        <div class="container">
            <hr>  
        </div> 
        <div class="container d-flex align-items-center justify-content-center"> 
            <div style="margin-top: 30px;" class="card">
            <div class="card-body">
                <h3 class="display-6 mb-4">MANUAL INPUT</h3>
                <!-- <p class="text-left mb-1">Choose key Parameter</p>  -->

                <!-- <div class="w-100 btn-group" role="group" aria-label="Basic example">
                <button type="button" class="button-pill btn btn-light btn-outline-secondary">Phone</button>
                <button type="button" class="button-pill btn btn-light btn-outline-secondary">Mobile</button>
                <button type="button" class="button-pill btn btn-light btn-outline-secondary">E-mail</button>
                </div> -->

                <p class="text-left mt-4 mb-2">Fill This Form</p> 
                <form @submit.prevent="submitData">
                    <div class="form-inline mb-3">
                        <input name="id" type="hidden" class="form-control col-sm-12 col-md-12 col-lg-12">
                        <p v-if="inputIsInvalid">Please enter a valid name!</p>
                    </div>
                    <div class="form-inline mb-3">
                        <input name="name" type="text" class="form-control col-sm-12 col-md-12 col-lg-12" placeholder="Full Name" required>
                        <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="pencil"></b-icon>
                    </div>
                    <div class="form-inline mb-3">
                        <input name="phone" type="tel" class="form-control col-sm-12 col-md-12 col-lg-12 " maxlength="10" placeholder="Phone Number" required>
                        <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="pencil"></b-icon>
                    </div>
                    <div class="form-inline mb-3">
                        <input name="mobile" type="tel" class="form-control col-sm-12 col-md-12 col-lg-12"  maxlength="12" placeholder="Mobile Number" required>
                        <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="pencil"></b-icon>
                    </div>
                    <div class="form-inline mb-3">
                        <input name="email" type="email" class="form-control col-sm-12 col-md-12 col-lg-12" placeholder="E-mail" required>
                        <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="pencil"></b-icon>
                    </div>
                    <div class="form-inline mb-3">
                        <input name="address" type="text" class="form-control col-sm-12 col-md-12 col-lg-12" placeholder="Address" required>
                        <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="pencil"></b-icon>
                    </div>
                    <b-link :to="{ path: '/home' }">
                        <button type="button" class="float-left btn btn-light btn-sm-2 btn-md-4 btn-outline-secondary"><b-icon icon="chevron-left"></b-icon> Back</button>
                    </b-link>
                        <button type="submit" class="float-right btn btn-light btn-sm-2 btn-md-4 btn-outline-secondary">Add <b-icon icon="plus"></b-icon></button>
                </form>
            </div>
            </div>              
        </div>
        <footer class="w-100">
            <p>{{new Date().getFullYear()}} Telkom Data Scientist | Version 4.0.0 | All Rights Reserved</p>
        </footer>  
    </div>   
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import "@/assets/css/main-custom.css";
import "@/assets/css/media-query.css";
import { mapMutations } from 'vuex';
 export default{ 
    title: 'Telco Risk Scoring | Request',  
    data() {
      return {
        customer: this.$store.state.customer,
        inputIsInvalid: this.$store.state.inputIsInvalid,
      }
    },
    computed: {
        ...mapFields([
        'customer.id',
        'customer.name',
        'customer.phone',
        'customer.mobile',
        'customer.email',
        'customer.address',
        ])
    },
    methods: {        
        ...mapMutations({
           submitData: 'mutateAddCustomer',
        }),
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
.card{
    width: 400px;
    padding-right: 12px;
    padding-left: 12px;
    max-width: 700px;
    min-width: 150px;
    border-radius: 20px;
    box-shadow: 0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2);
}

.telco-page-wrapper{height: 800px;}    

.form-control{
    display: inline;
}

.btn:hover{
    background-color: green;
}

.button-pill{
    font-family: 'Ubuntu';
    color: #212121;
    border-color: #ced4da;
}

.button-pill:hover{
    background-color: #0C7AB0;
    color: white;
    font-family: 'Ubuntu';
}

@media (max-width: 575.98px){
    .pencil-icon{
        left: -25px;
        right: 6vmin; 
        margin-right: -11vmin;
    }
}
@media (min-width: 576px){
    .pencil-icon{
        left: -25px;
        right: 6vmin; 
        margin-right: -11vmin;
    }
}
@media (max-height: 575.98px){
    .pencil-icon{
        left: -25px;
        right: 6vmax; 
        margin-right: -11vmax;
    }
}

@media (min-width: 992px) {
 .card{margin-bottom: -160px;}
}

footer {
    text-align: center;
    background-color:#343941;
    color: #BDBDBD;  
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    position: fixed;
    z-index: 1;
}

</style>