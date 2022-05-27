<template>
    <div style="box-sizing: border-box;" class="telco-page-wrapper">
        <h1 style="" class="mt-3 display-6">Telco Risk Scoring</h1> 
        <div class="container">
            <hr>  
        </div> 
        <div class="container"> 
            <div class="row">
            <div style="margin-top: 30px;" class="card col-sm-12 col-md-4 col-xl-4 mr-4">
            <div class="card-body">
                <p class="text-left mb-1">Choose key Parameter</p> 

                <div class="w-100 btn-group" role="group" aria-label="Basic example">
                <button type="button" @click="btnPillPhoneToggle = !btnPillPhoneToggle" :class="btnPillPhoneToggle ? btnPillPrimary : btnPillSecondary">Phone</button>
                <button type="button" @click="btnPillMobileToggle = !btnPillMobileToggle" :class="btnPillMobileToggle ? btnPillPrimary : btnPillSecondary">Mobile</button>
                <button type="button" @click="btnPillEmailToggle = !btnPillEmailToggle" :class="btnPillEmailToggle ? btnPillPrimary : btnPillSecondary">E-mail</button>
                </div>
            
                <p class="text-left mt-4 mb-2">Insert API Key <b-icon v-b-popover.hover.right="'API Key is...'" style="color: red" icon="question-circle-fill"></b-icon></p> 
                
                <form class="">
                    <div class="form-inline mb-3">
                        <input type="text" class="form-control col-sm col-md" placeholder="Input API Key here">
                        <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="pencil"></b-icon>
                    </div>
                        <p style="margin-top: -15px;" class="text-left gfont300"><small>Get API Key <a @click="getApiKey()" href="#">here</a></small></p>
                    <p class="text-left mt-4 mb-2">Choose Scoring Field(s)</p> 
                    <div v-for="(button, index) in buttonScoring" :key="index">
                        <button v-b-modal.modal-1 type="button" @click="button.toggle = !button.toggle" :class="button.toggle ? primary : secondary "><small>{{button.label}}</small></button>
                    </div>
                        <b-modal id="modal-1" v-if="buttonScoring.every(btn => btn.toggle == false)" ok-only> <p>Please choose at least one scoring field</p></b-modal>
                    <br>
                    <br>
                    <br>
                    <br>
                    <p style="margin-top: 80px;" class="text-left mb-2">Click Button Below to Find the Customer</p> 
                        <button type="button" class="btn btn-sm btn-success btn-block">Find Customer Score</button>
                </form>
            </div>
            </div>              
            <div style="margin-top: 30px;" class="card col-sm-12 col-md-7 col-xl-8">
            <div class="card-body">
                <h4 class=" display-6">DATA SCORING</h4>
                <b-link :to="{ path: '/request' }">
                <button type="button" style="background-color: #0C7AB0; color: white;" class="btn float-left mb-4">Add Data +</button>
                </b-link>
                
                <div class="form-inline mb-3 float-right">
                    <input type="search" v-model="searchCustomer" class="form-control col-sm-4 col-md" placeholder="Search..." aria-label="Search...">
                    <b-icon class="pencil-icon" style="position: relative; right: 4vmin; margin-right: -10vmin;" icon="search"></b-icon>
                </div>
                <div class="table-responsive">
                <table style="font-size: 12px;" class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr v-for="cust in filteredCustomer" :key="cust.id">
                                <input name="id" type="hidden" :value="cust.id">

                            <td @mouseleave="editName" v-if="toggleInputName">
                                <input name="name" type="text" v-model="cust.name" autocomplete="off">
                            </td>
                            <td @click="editName" v-else>{{cust.name}}</td>

                            <td @mouseleave="editPhone" v-if="toggleInputPhone">
                                <input name="phone" type="text" v-model="cust.phone" autocomplete="off">
                            </td>
                            <td @click="editPhone" v-else>{{cust.phone}}</td>

                            <td @mouseleave="editMobile" v-if="toggleInputMobile">
                                <input name="mobile" type="text" v-model="cust.mobile" autocomplete="off">
                            </td>
                            <td @click="editMobile" v-else>{{cust.mobile}}</td>

                            <td @mouseleave="editEmail" v-if="toggleInputEmail">
                                <input name="email" type="email" v-model="cust.email" autocomplete="off">
                            </td>
                            <td @click="editEmail" v-else>{{cust.email}}</td>

                            <td @mouseleave.stop="editAddress" v-if="toggleInputAddress">
                                <input name="address" type="text" v-model="cust.address" autocomplete="off">
                            </td>
                            <td @click="editAddress" v-else>{{cust.address}}</td>
                            
                            <td>
                               <BtnEditDel :csId="cust.id" :csName="cust.name"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <p class="text-left">Showing 1 to {{filteredCustomer.length}} of {{filteredCustomer.length}} entries</p>
                
                <b-pagination style="margin-top: -40px;" align="right"></b-pagination>
                
            </div>
            </div> 
            </div>             
        </div>
        <footers-template></footers-template>
    </div>   
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import BtnEditDel from "@/components/Shared/BtnEditDel.vue";
import "@/assets/css/main-custom.css";
import "@/assets/css/media-query.css";
import {mapGetters} from 'vuex';
export default {
    title: 'Telco Risk Scoring | Data Scoring', 
    components: {
     BtnEditDel
    }, 
    data(){
        return{
            btnPillPhoneToggle: false,
            btnPillMobileToggle: false,
            btnPillEmailToggle: false,
            btnPillSecondary: 'button-pill btn btn-sm btn-light btn-outline-secondary',
            btnPillPrimary: 'button-pill btn btn-sm btn-light btn-pill-active btn-outline-primary ',
            primary:'btn btn-sm float-left mr-1 mb-1 btn-outline-primary',
            secondary:'btn btn-sm float-left mr-1 mb-1 btn-outline-secondary',
            buttonScoring: [
                {toggle: false, label: 'ID Verification'},
                {toggle: false, label: 'Telco Risk'},
                {toggle: false, label: 'Payment Behaviour'},
                {toggle: false, label: 'Payment Method'},
                {toggle: false, label: 'Average Revenue Per User (ARPU)'},
                {toggle: false, label: 'Length Of Stay (LOS)'},
                {toggle: false, label: 'Internet Usage'},
                {toggle: false, label: 'Channel Program'}
            ],
            customer: this.$store.state.customer,
            // toggleInput: this.$store.state.toggleInput
            toggleInputName: false,
            toggleInputPhone: false,
            toggleInputMobile: false,
            toggleInputEmail: false,
            toggleInputAddress: false,
            searchCustomer: ''
        }
    },
    mounted(){
        this.buttonScoring[0].toggle = true;
        this.btnPillPhoneToggle = true;
    },
    methods:{
        editName(e){
            this.toggleInputName = !this.toggleInputName
            this.customer.name =  e.target.innerText
            this.$store.commit('mutateEditCustomer', e.target.innerText)
        },
        editPhone(e){
            this.toggleInputPhone = !this.toggleInputPhone
            this.customer.phone =  e.target.innerText
            this.$store.commit('mutateEditCustomer', e.target.innerText)            
        },
        editMobile(e){
            this.toggleInputMobile = !this.toggleInputMobile
            this.customer.mobile =  e.target.innerText
            this.$store.commit('mutateEditCustomer', e.target.innerText) 
        },
        editEmail(e){
            this.toggleInputEmail = !this.toggleInputEmail
            this.customer.email =  e.target.innerText
            this.$store.commit('mutateEditCustomer', e.target.innerText) 
        },
        editAddress(e){
            this.toggleInputAddress = !this.toggleInputAddress
            this.customer.address =  e.target.innerText
            this.$store.commit('mutateEditCustomer', e.target.innerText) 
        }
    },  
    computed: {
        ...mapGetters({

        }),
        ...mapFields([
        'customer.id',
        'customer.name',
        'customer.phone',
        'customer.mobile',
        'customer.email',
        'customer.address',
        ]),
        filteredCustomer() {
            return this.customer.filter(({ phone, mobile, email, name, address}) => {
                let upperAndLower = this.searchCustomer.toUpperCase() || this.searchCustomer.toLowerCase();
                let searchName = name.toUpperCase() || name.toLowerCase();
                let searchPhone = phone.toUpperCase() || phone.toLowerCase();
                let searchMobile = mobile.toUpperCase() || mobile.toLowerCase();
                let searchEmail = email.toUpperCase() || email.toLowerCase();
                let searchAddress = address.toUpperCase() || address.toLowerCase();
               
                if (searchName.includes(upperAndLower)) {
                    return searchName.match(upperAndLower);
                }else if(searchPhone.includes(upperAndLower)){
                    return searchPhone.match(upperAndLower);
                }else if(searchMobile.includes(upperAndLower)){
                    return searchMobile.match(upperAndLower);
                }else if(searchEmail.includes(upperAndLower)){
                    return searchEmail.match(upperAndLower);
                }else if(searchAddress.includes(upperAndLower)){
                    return searchAddress.match(upperAndLower);
                }
            });
        }
        
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

.card{
    width: 400px;
    max-width: 730px;
    min-width: 150px;
    border-radius: 20px;
    box-shadow: 0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2);
}

.telco-page-wrapper{height: 800px;}    

.form-control{
    display: inline;
}

.gfont300{
    font-weight: 300;
}

.btn-group .btn-outline-secondary{
    font-family: 'Ubuntu';
    color: #212121;
    border-color: #ced4da;
}

.btn-outline-secondary{
    border-color: #ced4da;
}

.btn-pill-active{
    background-color: #0C7AB0;
    color: white;
    font-family: 'Ubuntu';
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

</style>