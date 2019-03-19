import React from 'react';

import chai, { should } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

import SearchBooks from '../container/searchBooks';

Enzyme.configure({adapter: new Adapter()});
should();
chai.use(sinonChai);

describe('Search books component', function() {
    it('should call retrieve books api on input change', function() {
        const retrieveBooks = sinon.spy();
        const wrapper = shallow(<SearchBooks retrieveBooks={retrieveBooks}/>);
        const mockEvent = {
            "target": {
                "value": 'mockVal'
            }
        }

        wrapper.find('.search-input').simulate('change', mockEvent);
        retrieveBooks.should.have.been.calledWith('mockVal');
    })
})
