import AirConditioner from './AirConditioner';

describe('AirConditioner', () => {
  let ac;

  beforeEach(() => {
    ac = new AirConditioner();
  });

  it('turns on', () => {
    ac.turnOn();
    expect(ac.isOn()).toBe(true);
  });

  it('turns off', () => {
    ac.turnOff();
    expect(ac.isOn()).toBe(false);
  });

  it('sets temperature', () => {
    ac.setTemperature(20);
    expect(ac.getTemperature()).toBe(20);
  });

  it('throws error for out of range temperature', () => {
    expect(() => ac.setTemperature(15)).toThrowError('Temperature must be between 16 and 30 degrees');
  });
});


