import Timber from "./pages/timber/Timber";
import Plywood from './pages/plywood/Plywood'
import { Route, Routes} from 'react-router-dom';
import Antiques from "./pages/antiques/Antiques";
import Thaella from "./pages/thaella/Thaella";
import Vinay from "./pages/vinay/Vinay";
import Calcom from "./pages/calcom/Calcom";
import Retail from "./pages/retail/Retail";
import Diduce from "./pages/diduce/Diduce"
import Quantta from "./pages/quantta/Quantta";
import Resin from "./pages/resin/Resin";
import Cijen from "./pages/cijen/Cijen"
import Think from "./pages/think/Think"
import Idea from "./pages/idea/Idea";
import Growth from "./pages/growth/Growth";
import Road from "./pages/road/Road";
import Home from "./pages/home/Home";
import Health from "./pages/health/Health"
import Option from "./pages/option/Option";
import Story from "./pages/story/Story";
import About from "./pages/aboutus/About";
import Mission from "./pages/mission/Mission";
import Values from "./pages/values/Values";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact"
import Navbar from "./pages/contact/components/navbar/Navbar";
import Main from './pages/main/main'

function App() {
  return (
     <>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/plywood' element={<Plywood/>} />
        <Route path='/timber' element={<Timber/>} />
        <Route path='/antiques' element={<Antiques/>}/>
        <Route path='/thaella' element={<Thaella/>} />
        <Route path='/retail' element={<Retail/>} />
        <Route path='/vinay' element={<Vinay/>} />
        <Route path='/calcom' element={<Calcom/>} />
        <Route path='/diduce' element={<Diduce/>} />
        <Route path='/quantta' element={<Quantta/>} />
        <Route path='/resin' element={<Resin/>} />
        <Route path='/cijen' element={<Cijen/>} />
        <Route path='/think' element={<Think/>} />
        <Route path='/idea' element={<Idea/>} />
        <Route path='/growth' element={<Growth/>} />
        <Route path='/profit' element={<Road/>} />
        <Route path='/health' element={<Health/>} />
        <Route path='/options' element={<Option/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/values' element={<Values/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='non-profit' element={<Main/>}/>
      </Routes>

    </>
  );
}

export default App;
