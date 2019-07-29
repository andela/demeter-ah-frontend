
import React from 'react';
import { shallow } from 'enzyme';

describe('Button Component', () => {
  it('Should render without errors', () => {
    const buttonComponent = shallow(<button className="btn" type="submit"> Button</button>);
    const button = buttonComponent.find('.btn');
    expect(button.text().includes('Button')).toBe(true);
  });
});
