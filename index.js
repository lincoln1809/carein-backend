const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


const SerialPort = require('serialport');

const Readline = require('@serialport/parser-readline');
const arduino = new SerialPort('COM7', { baudRate: 9600 });
const parser = arduino.pipe(new Readline({ delimiter: '\n' }));

var ArduinoData = "A"
// Read the port data
arduino.on("open", () => {
  console.log('serial port open');
  parser.on('data', data =>{
    ArduinoData = data
    console.log(ArduinoData);

  });
});

app.get("/api", (req, res) => {
  res.json({ message: ArduinoData });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

