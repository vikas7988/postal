import axios from 'axios'

export const myAction = ((code)=>{


    return async (dispatch) => {
        dispatch({ type: 'REQUEST' });
        try {
          const response = await axios.get(`https://api.zippopotam.us/in/${code}`);
          dispatch({ type: 'SUCCESS', payload: response.data });
        } catch (error) {
          dispatch({ type: 'FAILURE', payload: 'Invalid Code' });
        }
      };

})

export const clearData = ()=>{


    return {
            type:"CLEAR"
        }
    
}




