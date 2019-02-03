import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('Shows a comment box', () => {
   const div =document.create('div');
   ReactDOM.render(<App/>,div);

   

   ReactDOM.unmountComponentAtNode(div);
});