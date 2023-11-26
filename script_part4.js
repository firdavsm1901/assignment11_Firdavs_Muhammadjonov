new Vue({
    el: '#app',
    data: {
        username: '',
        email: '',
        password: '',
        usernameValid: false,
        emailValid: false,
        passwordValid: false
    },
    computed: {
        formValid() {
            return this.usernameValid && this.emailValid && this.passwordValid;
        }
    },
    methods: {
        submitForm() {
            Swal.fire({
                title: 'Success!',
                text: 'Form submitted successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            if (this.formValid) {
                this.username = '';
                this.email = '';
                this.password = '';
                this.usernameValid = false;
                this.emailValid = false;
                this.passwordValid = false;
            }
        },
        attemptSubmit() {
            if (this.formValid) {
                this.submitForm();
            }
        }
    },
    watch: {
        username(value) {
            this.usernameValid = value.trim() !== '';
        },
        email(value) {
            this.emailValid = /\S+@\S+\.\S+/.test(value);
        },
        password(value) {
            this.passwordValid = value.length >= 6;
        }
    }
});