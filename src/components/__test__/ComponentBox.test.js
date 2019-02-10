import React from 'react'
import ReactDOM from 'react-dom'
import ComponentBox from 'components/CommentBox'
import {mount} from 'enzyme'

it("shows the component box",()=>{
   const wrapper=mount(<ComponentBox/>);
   console.log(wrapper.find('textarea'));
   console.log(wrapper.find('button'));
});