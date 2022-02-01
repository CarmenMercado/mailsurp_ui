<template>
  <div class="flex pt-11">
    <div class="w-full max-w-md flex items-center">
      <form class="w-full shadow-inner border-solid border-2 rounded px-8 pt-6 pb-8 mb-4"
            v-on:submit.prevent="send_email"
      >
        <div role="alert"
             v-show="success"
        >
          <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
            Success
          </div>
          <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
            <p>Email send.</p>
          </div>
        </div>

        <div role="alert"
             v-show="error"
        >
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Sorry, try again.</p>
          </div>
        </div>
        <div class="mb-4">
          <input class="input-styles"
                 id="email"
                 type="email"
                 placeholder="Email"
                 v-model="form.email"
          >
        </div>
        <div class="mb-6">
          <input class="input-styles"
                 id="subject"
                 type="text"
                 placeholder="Subject"
                 v-model="form.subject"
          >
        </div>
        <div class="mb-12">
          <textarea class="input-styles"
                    id="body"
                    type="text"
                    placeholder="Body"
                    v-model="form.body"
          >
        </textarea>
        </div>
        <div class="flex items-center">
          <button class="button-style"
                  type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {utils} from "../assets/js/utils";
import  axios from 'axios';
export default {
  name: 'Form',
  data () {
    return {
      success:false,
      error:false,
      form: {
        email: null,
        subject: null,
        body:null,
      }
    }
  },
  methods:{
    send_email () {
      if(utils(this.form)===false){
        return;
      }
      const params = new FormData()
      params.append('email', this.form.email)
      params.append('subject', this.form.subject)
      params.append('body', this.form.body)
      axios.post("http://127.0.0.1:8000/send-mail",params).then((result) => {
        this.success=true;
        this.clean();
      }).catch(error=>{
        this.error=true;
        this.clean();
      })
    },
    clean(){
      this.form.email="";
      this.form.subject="";
      this.form.body="";
    },
  }
}
</script>

<style>
.flex{
  justify-content: center;
}
</style>
