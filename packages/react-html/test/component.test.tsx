import React from 'react';
import { shallow } from 'enzyme';
import { random } from 'faker';
import assert from 'power-assert';
import ReactHtml from '../src/index';

describe('react-html', () => {
  it('react-html', () => {
    const words = random.words();
    const el = shallow(<ReactHtml lang="fr">{words}</ReactHtml>);
    assert(el.text().includes(words));
  });
});
