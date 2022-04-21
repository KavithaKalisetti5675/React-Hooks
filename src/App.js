import './App.css';
import StateHook from './react_hooks/StateHook.js';
import ReducerHook from './react_hooks/ReducerHook.js';
import EffectHook from './react_hooks/EffectHook';
import ContextHook from './react_hooks/useContextFiles/ContextHook';

function App() {
  return (
    <div className="App">
      <StateHook />
      <ReducerHook />
      <EffectHook />
      <ContextHook />
    </div>
  );
}

export default App;
