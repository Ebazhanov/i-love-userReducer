# Find out how to `useReducer` in different cases:
> [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) is an alternative to useState. useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

## We will start with `useState` and convert it later to `userReducer`
```javascript
import React, {useState} from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <p>{count}</p>
                    <button
                        type="button"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        useState Count
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
```

## So now the first example how we can convert `useState` to `useReducer`
```javascript
import React, {useReducer} from "react";

function reducer(count) {
    return count + 1;
}

const App = () => {
    const [reducerCount, dispatch] = useReducer(reducer, 0);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <p>{reducerCount}</p>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch();
                        }}
                    >
                        REDUCER COUNT
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
```
## Third example with more complex example:
```javascript
import React, {useReducer} from "react";

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
```
