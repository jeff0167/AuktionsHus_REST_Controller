const baseUrl = "https://localhost:44348/api/User/"

const app = Vue.createApp({
    data() {
        return {
            user: {id: 0, name: "", password: "", email: ""},
            confirmPassword: "",
            message: "",
            mes: "hello",
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
            try {
                await axios.post(baseUrl,
                         {name : this.user.name, password: this.user.password, email: this.user.email})
                } catch (ex) {
                        alert(ex.message) 
                    }
            this.message = "success"
            alert("Your account was created")
        },
    },
})