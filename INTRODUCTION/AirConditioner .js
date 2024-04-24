class AirConditioner {
    constructor() {
      this.temperature = 25.0;
      this.isOn = false;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
    }
  
    setTemperature(temperature) {
      if (temperature < 16 || temperature > 30) {
        throw new Error("Temperature must be between 16 and 30 degrees");
      }
      this.temperature = temperature;
    }
  
    getTemperature() {
      return this.temperature;
    }
  
    isOn() {
      return this.isOn;
    }
  }
  