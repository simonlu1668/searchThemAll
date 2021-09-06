import React, { useState } from 'react';
import Title from './components/Title.js';
import Search from './components/Search.js';
import StreamingServices from './components/StreamingServices.js';
import ReactDOM from 'react-dom';


const App = () => {
    return (
        <div>
            <Title/>
            <Search/>
        </div>
    );
};



ReactDOM.render(<App />, document.getElementById('app'));