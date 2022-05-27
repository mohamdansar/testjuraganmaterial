<template>
    <div class="row">
        <a href="#" class="badge badge-warning ml-3">
            <b-icon style="color: white" icon="pencil-square"></b-icon>
        </a> 

        <a href="#" class="badge badge-danger ml-2">
            <b-icon @click="remove" style="color: white" icon="trash"></b-icon>
        </a>
    </div>
</template>

<script>
// import {mapGetters} from "vuex";
export default {
    props: ['csId', 'csName'],
    data(){
        return{

        }
    },
    methods: {
        remove(){
            this.$bvModal.msgBoxConfirm(`Are you sure you want to delete ${this.csName} from list?`, {
            title: 'DATA SCORING',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'YES',
            cancelTitle: 'NO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true,
            })
            .then(value => {
                console.log(675, value);
                if (!value) {
                    return;
                }else {
                    this.$store.dispatch('actionDeleteCustomer', {id: this.csId} )
                    // this.$bvModal.msgBoxOk('Data berhasil di hapus', {size: 'sm'})
                }
            })
            .catch((err) => {
                console.log(err);
            })
        },
    },
    computed:{
       
    }
}
</script>

<style scoped>
.badge{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
}
</style>