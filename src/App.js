import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';


function App() {
  return (
    <div className="bg-[#F8F8F8] font-mono">

      <header className=' drop-shadow-xl m-0 sticky top-0'>
        <Header />
      </header>
      
      <div className='flex' >
        <div className='fixed'>
          <SideBar />
        </div>
        
        <div className="w-3 h-[620px] rounded-b-lg outline outline-offset-3 bg-slate-200 outline-slate-200 ml-[220px] fixed"></div>
        <div className='ml-[250px] w-[1200px]'>
          <Body />
        </div>
      </div>
      
    </div>
  );
}

export default App;
