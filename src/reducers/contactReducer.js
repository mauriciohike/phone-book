export const contactReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_CONTACT':
      const {id, name, email, phone, type} = action.user;
      return [...state, {
          id,
          name,
          email,
          phone,
          type
      }];

    case 'REMOVE_CONTACT':
      return state.map(contact => contact.id !== action.id)
    
    default:
        return state
  }
} 