import logo from './logo.svg';
import './App.css';
import Counter from './hooks/useState/Counter';
import Counter1 from './hooks/useEffect/Counter';
import FetchData from './hooks/useEffect/FetchData';
import ChangeBackColor from './hooks/useLayoutEffect/ChangeBackColor';
import IndianGov from './hooks/useContext/PropsDrilling/IndianGov';
import Reducer from './hooks/useReducer/Reducer';
import Cart from './hooks/useMemo/Cart';
import ParentIndex from './hooks/useCallback/ParentIndex';
import Index from './hooks/useTransition/Index';
import RefIndex from './hooks/useRef/RefIndex';
import IDIndex from './hooks/useId/IDIndex';
import CustomIndex from './hooks/CustomHook/CustomIndex';
 
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* <FetchData /> */}
      {/* <ChangeBackColor /> */}

      {/* props drilling and useContext */}
      {/* <IndianGov /> */}

      {/* useReducer */}
      {/* <Reducer /> */}

      {/* usememo */}
      {/* <Cart /> */}

      {/* useCallback hook */}
      {/* <ParentIndex /> */}

      {/* usetransition hook */}
      {/* <Index /> */}

      {/* useref hook */}
      {/* <RefIndex /> */}

      {/* useid  */}
      {/* <IDIndex /> */}

      {/* custom hook  */}
      <CustomIndex />
    </div>
  );
}

export default App;
