import React from 'react';
// import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import { shallow, mount, render } from 'enzyme';

it('Shows a comment box', () => {
   // const div = document.createElement('div');
   // ReactDOM.render(<App/>,div);
   //
   // expect(div.innerHTML).toContain('comment box');
   // //  expect(div).toHaveAnInstanceOf(CommentBox);


   const wrapped = shallow(<App/>);
   expect(wrapped.find(CommentBox).length).toEqual(1);
   // ReactDOM.unmountComponentAtNode(div);
});

//second expect shallow
it('shows a comment list',()=>{
   const wrapper=shallow(<App/>);
   expect(wrapper.find(CommentList).length).toEqual(1);
})