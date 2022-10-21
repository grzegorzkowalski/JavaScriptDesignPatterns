import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => state.counter);

    const increaseHandler = () => {
        dispatch(incrementCounter);
    }

    const decrementHandler = () => {
        dispatch(decrementCounter);
    }

    return (
        <>
          Home
            <p>{stateValue}</p>
            <button onClick={() => decrementHandler()}>-</button>
            <button onClick={() => increaseHandler()}>+</button>
        </>
    );
};

export default Home;
