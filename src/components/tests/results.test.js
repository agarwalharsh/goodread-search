import React from 'react';

import { should } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import Results from '../results';

Enzyme.configure({adapter: new Adapter()});
should();

describe('Results component', function() {
    it('should redirect to detail page on book click', function() {
        const listData = {
            booksList: [
                {
                    best_book: [
                        {
                            id: [
                                {
                                    '_': '123'
                                }
                            ],
                            small_image_url: [
                                'img'
                            ],
                            author: [
                                {
                                    name: [
                                        'author'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        const wrapper = shallow(<Results listData={listData}/>);
        const mockEvent = {
            "preventDefault": function(){
                return true;
            }
        }

        wrapper.find('.result-item').simulate('click', mockEvent);
        wrapper.state('redirect').should.be.equal('/detail/123');
    })
})
