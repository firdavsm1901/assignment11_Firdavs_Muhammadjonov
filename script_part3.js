new Vue({
    el: '#usernameGreeting',
    data : {
        username: ''
    },
    methods: {
        setDefaultUsername(){
            this.username = 'Firdavs';
        }
    }
});