import { incrasync } from './actions';
const ABC = dispatch => {
    handleIncrClick: () => dispatch(incrasync);
    return {
        handleIncrClick: () => dispatch(
            innerDispatch => innerDispatch({ type: 'INCREMENT' })
        ),
        handleDecrClick: () => dispatch({ type: 'DECREMENT' })
        
    }
};