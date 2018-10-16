
import { INCREASE, DECREASE, RESET } from './actionTypes';

const increase = (data) => ({ type: INCREASE, data:data });
const decrease = () => ({ type: DECREASE });
const reset = () => ({ type: RESET });

export {
    increase,
    decrease,
    reset
}