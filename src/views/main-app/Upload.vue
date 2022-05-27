<template>
    <div class="telco-page-wrapper">
        <h1 class="mt-3 display-6">Telco Risk Scoring</h1> 
        <div class="container">
            <hr>
        </div>
        <div class="container d-flex align-items-center justify-content-center">
            <div style="margin-top: 30px;" class="card align-items-center justify-content-center">
            <div class="card-body">
                <form @submit.prevent="submitCsv">
                <h2 style="margin-top: 30px;" class="display-6">IMPORT FILE</h2>
                <div v-if="isLoading" class="frm-loading">
                    <div v-for="bar in bars" :key="bar.id" class="col mt-4 mb-5">
                        <b-spinner  v-if="bar.value < 100" class="mt-4 mb-4" variant="danger" label="Text Centered"></b-spinner>      
                        <b-progress v-if="bar.value < 100" class="m-auto w-75" height="5px" :max="max" :value="bar.value" :variant="bar.variant" :key="bar.id"></b-progress>
                        <div v-else>
                            <b-icon class="mb-4" :scale="1.5" variant="success" icon="check-square"></b-icon>
                            <p>{{fileCsvUpload.name}}</p>
                            <p @click="removeCsvHandler()">Remove File</p>                                
                        </div>
                    </div>
            
                </div>
                <div v-else @dragover.prevent @drop.stop.prevent="onDrop" @click="uploadFileHandler()" class="frm-csv">
                    <img style="margin-top: 40px;" src="~@/assets/image/upload-csv/arrow-up.svg" alt="">
                    <!-- <form  style="margin-top: 20px;"> -->
                        <div class="form-group">
                            <p class="text-center" for="exampleFormControlFile1">Drag .csv file here to upload</p> 
                            <p style="margin-top: -20px;" class="text-center">or click this (max 1Mb)</p>
                            <div @change="loadingUpload(10, $event)">
                            <input @change="customer" type="file" ref="upload" accept=".csv" class="form-control-file invisible" id="exampleFormControlFile1">
                            </div>
                        </div>
                    <!-- </form> -->
                </div>
                
                <div class="row">
                    <p class="col-8 text-left">Download file template </p>
                    <download-csv
                    style="position: relative; right: 25px;" :data="csvData" :name="fileCsvDownload" :separator-excel="space"><a href="#">here</a>
                    </download-csv>
                </div>
         
                <br>
                <b-link :to="{ path: '/home' }">
                    <button type="button" class="float-left btn btn-light btn-sm-2 btn-md-4 btn-outline-secondary"><b-icon icon="chevron-left"></b-icon> Back</button>
                </b-link>
                <!-- <b-link :disabled="fileCsvUpload === null ? true : false"> -->
                     <!-- :to="{ path: '/data-scoring' }" -->
                    <button type="submit" :style="fileCsvUpload === null ? notAllowStyle : !notAllowStyle" class="float-right btn btn-success btn-sm-2 btn-md-4">Next <b-icon icon="chevron-right"></b-icon></button>
                <!-- </b-link> -->
                </form>
            </div>
            </div>        
        </div>
        <footers-template></footers-template>
    </div>   
</template>


<script>
// import { mapFields } from 'vuex-map-fields';
import "@/assets/css/main-custom.css";
// import "@/assets/css/media-query.css";
// import { mapState } from 'vuex';
export default{ 
    title: 'Telco Risk Scoring | Upload',  
    data() {
      return {
        customer: this.$store.state.customer,
        csvData: this.$store.state.csvData,
        notAllowStyle: 'cursor: not-allowed; background: #BDBDBD; border: white;',
        fileCsvDownload: "file-template.csv",
        space: true,
        // fileCsvUpload: this.$store.state.fileCsvUpload,
        fileCsvUpload: [],
        show: true,
        isLoading: false,
        bars: [
          { id: 1, variant: 'danger', value: 0 }
        ],
        max: 100,
        myIndex: 0,
        timer: null
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    },
    methods: {        
        // ...mapActions({
        //    submitCsv: 'actionSubmitCsv',
        // }),  
        submitCsv(){
            this.$store.commit('mutateSubmitCsv', this.fileCsvUpload
             )   
        },
        uploadFileHandler() {
            this.$refs.upload.click()
        },
        onDrop(event) {
            this.isLoading = true;
            this.fileCsvUpload = event.dataTransfer.files[0];
            console.log(this.fileCsvUpload);
            this.isLoading = true;
            this.timer = setInterval(() => {
              this.bars.map((bar) =>{
                  bar.value += 10
                  if (bar.value > 100) {
                      bar.value = 100;
                  }
              });       
            }, 100);            
        },
        removeCsvHandler(){
            // this.fileCsvUpload.name = undefined;  //<-- Cannot assign to read only property 'name' of object '#<File>'"   
            this.fileCsvUpload = {name: null};   
            console.log(this.fileCsvUpload.name)         
        },
        loadingUpload(step, event){
            console.log(12, event);
            this.fileCsvUpload = event.target.files[0];

            this.isLoading = true ;
            this.timer = setInterval(() => {
                this.bars.map((bar) =>{
                    bar.value += step
                    if (bar.value > 100) {
                        bar.value = 100;
                    }
                });       
            }, 100);
        }
    },
    computed: {
        // ...mapState({
        //     customer: state => state.customer
        // })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
.card{
    width: 400px;
    max-width: 700px;
    min-width: 250px;
    border-radius: 20px;
    box-shadow: 0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2);
}

.frm-csv, .frm-loading{
    min-width: 150px;
    height: 180px;
    background: #FFF4E6;
    border: 1px dashed #757575;
    border-radius: 2px;
    cursor: pointer;
}

@media (max-width: 575.98px){
    .frm-loading{
        min-width: 150px;
    }
}
@media (min-width: 576px){
    .frm-loading{
        min-width: 305px;
    }
}

.btn:hover{
    color: white;
}

.btn{
    min-width: 70px;
}

@media (min-width: 992px) {
 .card{margin-bottom: -130px;}
}
</style>