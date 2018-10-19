export default (state = null, action) =>{
  if(!action){
    return state;
  }
  switch(action.type){
    case 'USER_SET':
      return action.payload;
    default:
      return state;
  }
};