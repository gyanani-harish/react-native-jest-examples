/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  renderer.create(<App />);
});

test('ManageFamilyVerifyOtp isValidOTP', () => {
  //expect.assertions(1)
  const otpComponent = renderer.create(<App />).getInstance();
  //this works#1
  //otpComponent.isValidOTP = jest.fn().mockReturnValue(true);
  //expect(otpComponent.isValidOTP('')).toBe(true);
  //this works#1
  // eslint-disable-next-line no-undef
  //RNCNetInfo.fetch = jest.fn().mockResolvedValue(Promise.resolve(true));
  const netConnectedSpy = jest.spyOn(otpComponent, 'netConnected');
  const netNotConnectedSpy = jest.spyOn(otpComponent, 'netNotConnected');
  const isValidOTPSpy = jest.spyOn(otpComponent, 'isValidOTP');

  otpComponent.checkNet();
  //expect(isValidOTPSpy).toHaveBeenCalledTimes(1);

  //await expect(netConnectedSpy).toHaveBeenCalledTimes(1);
  //expect(netNotConnectedSpy).toHaveBeenCalledTimes(0);
  /*expect(otpComponent.isValidOTP('1234')).toBe(false);
  expect(otpComponent.isValidOTP('12345')).toBe(false);
  expect(otpComponent.isValidOTP('123456')).toBe(true);

  expect(otpComponent.isValidOTP('1234')).toBe(false);
  expect(otpComponent.isValidOTP('123444')).toBe(true);*/
});

it('works with async/await', async () => {
  //expect.assertions(1)
  const otpComponent = renderer.create(<App />).getInstance();
  const netConnectedSpy = jest.spyOn(otpComponent, 'netConnected');
  const isValidOTPSpy = jest.spyOn(otpComponent, 'isValidOTP');
  const netNotConnectedSpy = jest.spyOn(otpComponent, 'netNotConnected');
  await otpComponent.checkNet()
  await expect(isValidOTPSpy).toHaveBeenCalledTimes(1)
  await expect(netConnectedSpy).toHaveBeenCalledTimes(1)
  await expect(netNotConnectedSpy).toHaveBeenCalledTimes(0)
  await expect(netNotConnectedSpy).not.toHaveBeenCalled()
});
