import Header from './Header';
import Home from './pages/home/Home';
import Footer from './Footer';

import React, { useState } from 'react';


const App =()=> {
 
   const [nbr, setNbr] = useState(5)

    return ( 
      <div>
        <Header name = 'Header...'/>
        <Home />
        <Footer name = 'Footer.'/>
      </div>
    );
}

export default App;