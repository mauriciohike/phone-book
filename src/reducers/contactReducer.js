export const contactReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_CONTACT':
      const {id, name, email, phone, type} = action.contact;
      return [...state, {
          id,
          name,
          email,
          phone,
          type
      }];

    case 'REMOVE_CONTACT':
      return state.filter(contact => contact.id !== action.id)
    
    default:
        return state
  }
} 