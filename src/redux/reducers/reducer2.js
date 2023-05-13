const INITIAL_STATE = {
    singleproduct: {}
  };

    const  prodDetails = (state = INITIAL_STATE, action) =>{

    switch (action.type) {
      case "GET_PRODUCT":
        return {
          ...state,
          singleproduct: action.payload,
        }

        default:
        return state;
  
        }
        
      
      }
      export default prodDetails