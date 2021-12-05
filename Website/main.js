const baseUrl = "https://auktionshusapi.azurewebsites.net/api/User/"

const app = Vue.createApp({
    data() {
        return {
             currentUser: 0 // logged in user
        }
    },
    mounted() {
        if(localStorage.currentUser) this.currentUser = localStorage.currentUser; // saving data to local storage, persist on refresh
      },
    async created() {
        this.currentUser = localStorage.currentUser;  
     },
    methods: {
        loginUser(id){
            localStorage.currentUser = this.currentUser = id;
        }
    },
})