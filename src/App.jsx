// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* <Menu /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu.jsx';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Tech from './Pages/Tech';
import Contact from './Pages/Contact';
import Video from './Pages/Video';
import Keys from './Pages/Keys';
import Hobbies from './Pages/Hobbies';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
        <Route path="/keys" element={<Keys />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
