export const USER_LOCAL = 'USER_LOCAL'

export const userLocalService = {
    get: () => {
        let userJson = localStorage.getItem(USER_LOCAL);
        if(userJson) {
            return JSON.parse(userJson);
        } else {
            return null;
        }
    },
    
    remove: () => { 
        localStorage.removeItem(USER_LOCAL);
    },

    set: (userData) => { 
        const userJson = JSON.stringify(userData);
        localStorage.setItem(USER_LOCAL, userJson)
    }
}