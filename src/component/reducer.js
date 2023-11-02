const ReducerData = {

    data:"",
    loading:false,
    error:false

}

const myReducer = (state=ReducerData, action)=>{
 
    switch (action.type) {
        case 'REQUEST':
          return {
            ...state,
            loading: true,
            error: null,
          };
          
        case 'SUCCESS':
          return {
            ...state,
            data: action.payload,
            loading: false,
            error: null,
          };
        case 'FAILURE':
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case 'CLEAR':
          return {
            ...state,
            data: null,
            error: null,
          };
        default:
          return state;
      }

}

export default myReducer