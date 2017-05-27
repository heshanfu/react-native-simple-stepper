import 'react-native';
import React from 'react';
import SimpleStepper from '../SimpleStepper';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('renders correctly', () => {
  const tree = renderer.create(
    <SimpleStepper />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
test('test incrementAction', () => {
  const wrapper = shallow(<SimpleStepper />)
  wrapper.instance().incrementAction()
  expect(wrapper.state().value).toBe(1)
});
test('test decrementAction', () => {
  const wrapper = shallow(<SimpleStepper />)
  wrapper.instance().decrementAction()
  expect(wrapper.state().value).toBe(0)
  expect(wrapper.state().hasReachedMin).toBe(true)
});
test('state values to match expected', () => {
  const wrapper = shallow(<SimpleStepper />)
  expect(wrapper.state().value).toEqual(0)
  expect(wrapper.state().decrementOpacity).toBe(0.5)
  expect(wrapper.state().incrementOpacity).toBe(1)
  expect(wrapper.state().hasReachedMin).toBe(true)
  expect(wrapper.state().hasReachedMax).toBe(false)
  expect(wrapper.state().stepValue).toEqual(1)
});
test('validate max value to be true', () => {
  const wrapper = shallow(<SimpleStepper />)
  wrapper.instance().validateValue(10, 0, 10, false, 1)
  expect(wrapper.state().value).toBe(10)
  expect(wrapper.state().hasReachedMax).toBe(true)
});
test('tintColor to be blue', () => {
  const wrapper = shallow(<SimpleStepper />)
  const tintStyle = wrapper.instance().tintStyle(true)
  expect(tintStyle).toEqual({tintColor: 'blue'})
});
test('tintColor to be null', () => {
  const wrapper = shallow(<SimpleStepper />)
  const tintStyle = wrapper.instance().tintStyle(false)
  expect(tintStyle).toEqual(null)
});
test('increment type imageSrc to be uri object', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageSrc = wrapper.instance().imageSrc("https://facebook.github.io/react/img/logo_og.png", 'increment')
  expect(imageSrc).toEqual({uri: "https://facebook.github.io/react/img/logo_og.png"})
});
test('increment type imageSrc to be local asset number', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageSrc = wrapper.instance().imageSrc('', 'increment')
  expect(imageSrc).toEqual(1)
});
test('increment type imageSrc to be null', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageSrc = wrapper.instance().imageSrc(null, 'increment')
  expect(imageSrc).toEqual(null)
});
test('decrement type imageSrc to be local asset number', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageSrc = wrapper.instance().imageSrc('', 'decrement')
  expect(imageSrc).toEqual(1)
});
test('decrement type imageSrc to be undefined', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageSrc = wrapper.instance().imageSrc(undefined, 'decrement')
  expect(imageSrc).toEqual(undefined)
});
test('unknown type imageSrc to be empty string', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageSrc = wrapper.instance().imageSrc('', 'unknown')
  expect(imageSrc).toEqual('')
});
test('imageStyle to be null', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageStyle = wrapper.instance().imageStyle(null, 36, 36)
  expect(imageStyle).toEqual(null)
});
test('imageStyle to be style object', () => {
  const wrapper = shallow(<SimpleStepper />)
  const imageStyle = wrapper.instance().imageStyle('https://facebook.github.io/react/img/logo_og.png', 69, 69)
  expect(imageStyle).toEqual({width: 69, height: 69})
});