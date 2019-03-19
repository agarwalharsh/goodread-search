import React from 'react';

import chai, { should } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

import BookDetail from '../container/bookDetail';

Enzyme.configure({adapter: new Adapter()});
should();
chai.use(sinonChai);

describe('Book details component', function() {
    it('should call retrieve book data after mount', function() {
        const retrieveBookDetail = sinon.spy();
        const params = {
            bookId: '123'
        };

        const wrapper = shallow(<BookDetail retrieveBookDetail={retrieveBookDetail} params={params}/>);

        retrieveBookDetail.should.have.been.calledWith('123');
    })
})
