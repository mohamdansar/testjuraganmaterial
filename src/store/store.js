import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import '../plugins/bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    customer: [],
    fileCsvUpload: [],
    csvData: [
      {
        'Phone': '0215254738',
        'Mobile': '086527721677',
        'Name': 'ansar',
        'Email': 'wahyu@mail.com',
        'Address': 'cengkareng'
      },
      {
        'Phone': '0221334488',
        'Mobile': '085277889966',
        'Name': 'Rini',
        'Email': 'Rini@mail.com',
        'Address': 'Tanah Abang'
      }
    ],
    inputIsInvalid: false,
  },
  getters: {
    getterCustomerDetail: state => {
      return state.customer;
    },
    gettersToggle: state => {
      return state.toggleInput;
    },
  },
  mutations: {
    mutateSubmitCsv: (state, payload) => {
      let reader = new FileReader();
      reader.onload = e => {
        let result = e.target.result.split('\n')  //step 1
        // let arr = result;
        let arr = result.slice(0, -1);
        console.log(1234, arr);
        // var headers = arr[0].split(',');
        // console.log(111, headers);
        for (var i = 1; i <= arr.length; i++) {
          var data = arr[i].includes(';') ? arr[i].split(';') : arr[i].split(',');
          console.log(222, data);
          var obj = {};
          for (var j = 1; j <= data.length; j++) {
            obj[j] = data[j];
          }

          let [phone, mobile, name, email, address] = data;
          let zeroStr = '0';
          let addZeroPhone = zeroStr + phone //<-tambahin angka nol di depan phone number
          let addZeroMobile = zeroStr + mobile //<-tambahin angka nol di depan mobile number
          console.log(777, addZeroPhone);
          console.log(888, addZeroMobile);
          state.customer.push({
            // id: new Date().toISOString(), 
            // id: setInterval(() =>  Math.random(new Date().getTime()), 1000),
            // id: Math.random(new Date().getTime()),
            // id: Math.floor(Math.random() * 1000) + 1,
            id: Math.random().toString(36).substr(2, 5),
            name: name,
            phone: phone.charAt(phone[0]) !== '0' ? addZeroPhone : phone, //<-kalau phone number gak ada angka nol di depan di kasih nol, klo ada, gausah
            mobile: mobile.charAt(mobile[0]) !== '0' ? addZeroMobile : mobile, //<-kalau mobile number gak ada angka nol di depan di kasih nol, klo ada, gausah
            email: email,
            address: address
          })

        }
        JSON.stringify(state.customer);
      };
      console.log(1212, payload);
      reader.readAsText(payload);
      router.push({ path: 'data-scoring' })
    },
    mutateAddCustomer: (state, payload) => {
      if (
        payload.target.elements.name.value.trim() === '' ||
        payload.target.elements.phone.value.trim() === '' ||
        payload.target.elements.mobile.value.trim() === '' ||
        payload.target.elements.email.value.trim() === '' ||
        payload.target.elements.address.value.trim() === ''
      ) {
        state.inputIsInvalid = true;
        return;
      }
      state.customer.push({
        // id: payload.target.elements.id.value,
        id: new Date().getTime(),
        name: payload.target.elements.name.value,
        phone: payload.target.elements.phone.value,
        mobile: payload.target.elements.mobile.value,
        email: payload.target.elements.email.value,
        address: payload.target.elements.address.value,
      })
      // this.$route.push({name: 'data-scoring'})
      router.push({ path: 'data-scoring' })
      console.log(payload)
      console.log(payload.target.elements)
      console.log(1, state.customer)
    },
    mutateDeleteCustomer: (state, payload) => {
      const csId = payload.id;
      console.log(csId);
      const customerIndex = state.customer.findIndex(
        (cs) => cs.id === csId
      );
      state.customer.splice(customerIndex, 1);
    },
    mutateEditCustomer: (state, payload) => {
      console.log(22, state.customer.name);
      console.log(23, payload);
      state.customer.name = payload
      state.customer.phone = payload
      state.customer.mobile = payload
      state.customer.email = payload
      state.customer.address = payload
    }
  },
  actions: {
    actionSubmitCsv: (context, payload) => {
      context.commit('mutateSubmitCsv', payload);
    },
    actionAddCustomer: (context, payload) => {
      console.log(context);
      context.commit('mutateAddCustomer', payload);
      // console.log('11', payload);
    },
    actionDeleteCustomer: (context, payload) => {
      context.commit('mutateDeleteCustomer', payload);
    },
    actionEditCustomer: (context, payload) => {
      context.commit('mutateEditCustomer', payload);
    }
  },
})
