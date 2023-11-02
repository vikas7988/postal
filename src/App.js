import './index.css'
import PostalCode from "./component/PostalCode";
import PostalData from "./component/PostalData";

function App() {
  return (
    <div className='h-screen flex justify-center bg-gradient-to-r from-blue-300 to-purple-200  '>
      <div className=' text-center  '>
        <PostalCode />
        <PostalData />
      </div>
    </div>
  );
}

export default App;
