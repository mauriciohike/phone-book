export const userListReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_USER':
            const {id, name, email, password} = action.user;

            return [...state, {
                id,
                name,
                email,
                password
            }]
        default:
            return state
    }
}