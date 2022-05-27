<template>
    <div style="box-sizing: border-box;" class="telco-page-wrapper">
        <h1 style="" class="mt-3 display-6">Telco Risk Scoring</h1> 
        <div class="container">
            <hr>  
        </div> 
        <div class="container"> 
            <div class="">

            <div class="btn-group float-left" role="group" aria-label="Basic example">
            <button type="button" class="button-pill btn btn-sm btn-light btn-outline-secondary">ID Verification</button>
            <button type="button" class="button-pill btn btn-sm btn-light btn-outline-secondary">Customer Score</button>
            </div>
            <br>
            <br>
            <div class="row">
                <div class="float-left col-8">
                <bar-chart :styles="myStyles" :chartdata="chartdata" :options="options"></bar-chart>
                </div>

                <div class="col-2 form-group">
                    <h6 class="text-left">Behaviour Summary</h6>
                    <!-- <label for="exampleFormControlSelect1">Example select</label> -->
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Udi Achmadi</option>
                    <option>Tri Suriyanti</option>
                    <option>Deni Muttaqin</option>
                    <option>Eko Andriyanto</option>
                    <option>Bambang Pujiyono</option>
                    </select>
                    <h6 style="font-size: 14px;" class="text-left mt-4">TV Interest</h6>
                    <p style="font-size: 13px;">No Data to Display</p>
                </div>
                <div style="margin-top: 64px;" class="col-2">
                    <h6 style="font-size: 14px;" class="text-left mt-4">Payment Method</h6>
                    <p style="font-size: 13px;">No Data to Display</p>
                </div>
            </div>

            <div style="margin-top: 30px;" class="card w-100">
            <div class="card-body">
                <h4 class=" display-6">DATA SCORING</h4>
                <button type="button" class="btn btn-success float-left mb-4"><b-icon class="mr-2" icon="download"></b-icon>Download All Data +</button>
                
                <div class="form-inline mb-3 float-right">
                    <input type="search" class="form-control col-sm-4 col-md" placeholder="Search..." aria-label="Search...">
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
                        <th scope="col">Match Name</th>
                        <th scope="col">Match Phone</th>
                        <th scope="col">Match Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Udi Achmadi</td>
                            <td>02134551613</td>
                            <td>0852789879187</td>
                            <td>tes1@gmail.com</td>
                            <td>surabaya</td>
                            <td>64</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td scope="row">Tri Suriyanti</td>
                            <td>02188355110</td>
                            <td>0813287896344</td>
                            <td>tes2@gmail.com</td>
                            <td>gambir</td>
                            <td>77</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td scope="row">Denny Muttaqin</td>
                            <td>02163291637</td>
                            <td>0813782799789</td>
                            <td>tes3@gmail.com</td>
                            <td>cimahi</td>
                            <td>85</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td scope="row">Eko Andriyanto</td>
                            <td>02134551263</td>
                            <td>0813872934743</td>
                            <td>tes4@gmail.com</td>
                            <td>makassar</td>
                            <td>45</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td scope="row">Bambang Pujiyono</td>
                            <td>02156356297</td>
                            <td>0812729570244</td>
                            <td>tes5@gmail.com</td>
                            <td>padang</td>
                            <td>45</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <p class="text-left">Showing 1 to 5 of 25 entries</p>
                
                <b-pagination style="margin-top: -40px;" v-model="currentPage" :total-rows="rows" align="right"></b-pagination>
                
            </div>
            </div> 
            </div>             
        </div>
        <footers-template></footers-template>
    </div>   
</template>


<script>
import ResultBarChart from "@/components/Shared/ResultBarChart.vue";
import "@/assets/css/main-custom.css";
import "@/assets/css/media-query.css";
export default {
    title: 'Telco Risk Scoring | Result',  
    components:{
        barChart: ResultBarChart
    },
    data(){
        return{
           height: 300 
        }
    },
    methods:{
       
    },
    computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

.card{
    /* z-index: 1; */
    /* position: relative; */
    /* margin-top: 1%; */
    /* padding: 10px; */
    width: 100%;
    /* max-width: 730px; */
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
    /* height: 20px;
    width: 100px; */
}

/* .btn-outline-secondary:hover{
    background-color: #0C7AB0;
    color: white;
    font-family: 'Ubuntu';
} */

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
    .btn-outline-secondary{
    font-size: 3vw;
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