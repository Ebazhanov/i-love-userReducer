import React, {useReducer} from "react";
import './App.css'

const initialState = {
    count: 0
}

function reducer(state, action) {
    if (action === "add")
        return {
            count: state.count + 1
        };
    return {
        count: state.count - 1
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <p>{state.count}</p>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch("add");
                        }}
                    >
                        ADD
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch();
                        }}
                    >
                        SUBTRACT
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
