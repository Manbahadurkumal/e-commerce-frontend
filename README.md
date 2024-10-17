## hook
- are the functions defined for some special use cases
- hook functions always start with 'use' keyword in their name
- Basic hooks that are used in react in many way are:
  -State Hook
    
    - to maintain a state in any react functional component
    - useState()
    - useState hook return two data, a. state data b. stateFunction to manipulate state data in an array
    - whenever any state value/ variable in our componetn gets change component will re-render
    - You can never update/change/modify/manipulate of the can=
    (useState(), useReducer())
    
  - Effect Hook
    (useEffect(), useLayoutEffect())
    - to listen or execute/ render the component whenever there is any change on any states/dependency defined in the component 
    - useEffect() is the effect hook
    - there are 3 major implementation in useEffect hook
    - useEffect(() => {}) ===> This hook executes on any state change of the component
    - useEffect(() => {}, []) ===> This hook exexutes only once when the component is loaded/mounted
    - useEffect(() => {}, [depencylist,...]) => this hook executes only when any of the mentioned dependencylist gets changed


// state maintain
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("I am always called");
  });
  useEffect(() => {
    console.log("I am only callded during loading of the component");
  }, []);
  useEffect(() => {
    console.log(
      "I am only called when the products stat or name props gets changed"
    );
  }, [products, name]);


 // XHR request
        // XML-HTTP-Request
        // XMLHttpRequest

        // fetch ==> good for basic impelmentation
        // axios


Web Storage Unit
###
Cookie => Volatile
 * Cookie gets destroyed when mature
 * Cookie has a limitation of 50 per domain
 * Cookie are stored in always key value but as a string data
  document.cookie =" key = value; expires = timeIso; "
  document.cookie =" key1 = value; expires = timeIso; "

  const cookie = document.cookie;

LocalStorage
  -> size => 5mb of string data
  -> any no
  -> persist
  -> after forceful clear, gets deleted


  localStorage.setItem('key', 'value as string'),
  localStorage.getItem("key")
  localStorage.removeItem("key")
  localStorage.clear();

  sessionStorage.setItem('key', 'value as string'),
  sessionStorage.getItem("key")
  sessionStorage.removeItem("key")
  sessionStorage.clear();


  sweetalert2

  React Componet ===> Event trigger ===> State ===> Multiple component use

                      Global State Management tool
  React Component ===> Redux - state - reducers



  UI (react-component)=====> action =======>state
  
useDispatch
thunkApi
flow bite
shadcnui
