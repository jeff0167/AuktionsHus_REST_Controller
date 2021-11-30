app.component('create-user', {

    template: 
    /*html*/
    `<div>
    <h3 id="success" style="display: none;">{{message}}</h3>
    <h1>create new user</h1>

    <form class="review-form" @submit.prevent="CreateAccount">

        <input id="usernameInput" v-model="user.name" placeholder="Type name..."> <br> <br>
        <input id="emailInput" v-model="user.email" placeholder="Type email...">
        <br> <br> <br>
        <input id="passwordInput" v-model="user.password" placeholder="Type password...">
        <input id="confirmpasswordInput" v-model="user.confirmPassword" placeholder="Confirm password...">

        <input id="createAccountButton" class="button" type="submit" value="Create user">
    </form>
</div>`,
data() {
    return {
        user: {id: 0, name: "", password: "", email: ""},
        confirmPassword: "",
        message: "",
    }
},
methods: {
    async CreateAccount() {
        if(this.user.name === '' || this.user.password === ''|| this.user.confirmPassword === '' || this.user.email === ''){
            alert("Some input fields are empty, make sure all fields are filled out")
            return
        }

        if(!this.user.email.includes("@")){
            alert("The mail is not valid, must contain @")
            return
        }

        if(this.user.password != this.user.confirmPassword){
            alert("the passwords does not match, make sure you type the same password")
            return
        }

        if(this.user.name.length < 2){
            alert("Name is to short, name must have a lenght of at least 2 characters")
            return
        }
        if(this.user.password.length < 3){
            alert("Password is to short, password must have a lenght of at least 2 characters")
            return
        }
        // try {
        //     await axios.post(baseUrl,
        //              {name : this.user.name, password: this.user.password, email: this.user.email})
        //     } catch (ex) {
        //             alert(ex.message) 
        //         }
        this.message = "success"
        alert("Your account was created")
    },
},
})