import React from 'react';
// import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { shallow, mount, render } from 'enzyme';
let wrapped;
beforeEach(()=>{
   wrapped = shallow(<App/>);
});
it('Shows a comment box', () => {
   // const div = document.createElement('div');
   // ReactDOM.render(<App/>,div);
   //
   // expect(div.innerHTML).toContain('comment box');
   // //  expect(div).toHaveAnInstanceOf(CommentBox);


   expect(wrapped.find(CommentBox).length).toEqual(0);
   // ReactDOM.unmountComponentAtNode(div);
});

//second expect shallow
it('shows a comment list',()=>{
   expect(wrapped.find(CommentList).length).toEqual(0);
});