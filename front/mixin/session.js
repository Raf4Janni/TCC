const session = {
    methods: {
        get_session(key) {
            const value = localStorage.getItem(key);
            // Decodifica o valor
            return value ? atob(value) : null;
        },
        set_session(key, val) {
            // Codifica o valor
            const encodedValue = btoa(val);
            localStorage.setItem(key, encodedValue);
        },
        clear_storage() {
            localStorage.clear();
        },
        get_all_sessions() {
            const allSessions = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                allSessions[key] = value ? atob(value) : null;
            }
            return allSessions;
        }
    }
};

export default session;
