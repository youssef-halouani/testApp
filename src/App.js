import React from 'react';
import userPage from './component/userPage';
import postPage from './component/postPage';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'
// import Com from './component/com';




export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={userPage} />

        <Route exact path="/post-list/:id" component={postPage} />

      </Router>
    </div>
  )
}
