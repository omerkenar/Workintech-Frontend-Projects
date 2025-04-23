import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  calculateResult,
  clearDisplay,
  addMemory,
  memoryRecall,
  memoryClear,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={() => dispatch(addMemory())} />
              <CalcButton
                value={'MR'}
                onClick={() => dispatch(memoryRecall())}
              />
              <CalcButton
                value={'MC'}
                onClick={() => dispatch(memoryClear())}
              />
            </div>
            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={8}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
              <CalcButton
                value={0}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={'-'}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
              <CalcButton
                value={'/'}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
              <CalcButton
                value={'CE'}
                onClick={() => dispatch(clearDisplay())}
              />
            </div>

            <div className="row eq_button">
              <CalcButton
                value={'='}
                onClick={() => dispatch(calculateResult())}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
