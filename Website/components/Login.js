app.component('login', {

    template: 
    /*html*/
    `    <div>
    <h1>Login</h1>
    <form class="review-form" @submit.prevent="Login">

        <input id="usernameInput" v-model="user.name" placeholder="Type name...">
        <br> <br> <br>
        <input id="passwordInput" v-model="user.password" placeholder="Type password...">
        <input id="loginbutton" class="button" type="submit" value="Login">
    </form>
</div>`,
data() {
    return {
        user: {name: "", password: ""},
        loggedInUserId: 0,
    }
},
methods: {
    async Login() {

        if(this.user.name === '' || this.user.password === ''){
            alert("Some input fields are empty, make sure all fields are filled out")
            return
        }
        try {
            const response = await axios.get(baseUrl + "login?Username=" + this.user.name + "&Password=" + this.user.password)
                    this.loggedInUserId = await response.data
                    if(this.loggedInUserId == 0){
                        alert("Wrong password or username") 
                    }
                    else{
                        this.$emit('login', this.loggedInUserId) // valid login, save user, go to home page
                        window.location.href="./index.html";
                    }
            } catch (ex) {
                    alert("Couldn't connect to server") 
                }
    },
},
})