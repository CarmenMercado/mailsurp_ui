<template>
  <div class="flex">
    <div class="w-full max-w-md flex items-center">
      <form class="w-full shadow-inner rounded px-8 pt-6 pb-8 mb-4"
            v-on:submit.prevent="send_email"
      >
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
import  axios from 'axios'
export default {
  name: 'Form',
  data () {
    return {
      form: {
        email: null,
        subject: null,
        body:null,
      }
    }
  },
  methods:{
    send_email () {
      if(this.validate()===false){
        return;
      }
      const params = new FormData()
      params.append('email', this.form.email)
      params.append('subject', this.form.subject)
      params.append('body', this.form.body)
      axios.post("http://127.0.0.1:8000/send-mail",params).then((result) => {
        alert("Email send");
        this.clean();
        console.log(result.data);
      }).catch(error=>{
        console.log(error);
      })
    },
    validate(){
      if(this.form.body === null && this.form.email === null && this.form.subject === null ){
        return false;
      }
      return true;
    },
    clean(){
      this.form.email="";
      this.form.subject="";
      this.form.body="";
    }
  }
}
</script>

<style>
.flex{
  justify-content: center;
}
</style>
