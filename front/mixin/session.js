var session = {
    methods:{
        get_session(key){
            return localStorage.getItem(key)
        },
        set_session(key, val){
            localStorage.setItem(key, val)
        },
        clear_storage(){
            localStorage.clear()
        }
    }
}