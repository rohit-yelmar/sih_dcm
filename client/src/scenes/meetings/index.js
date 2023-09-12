import React from 'react';

const Meeting = () => {
  return (
    <div className='meeting'>
      <iframe
        src="https://sihproject.whereby.com/sih33ab4cd5-cd66-4897-acd5-7315b00f74e3?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI3NzYwMDU3NSIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvc2loMzNhYjRjZDUtY2Q2Ni00ODk3LWFjZDUtNzMxNWIwMGY3NGUzIiwib3JnYW5pemF0aW9uSWQiOiIxOTI2NzYifSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zcnYud2hlcmVieS5jb20iLCJpYXQiOjE2OTQyNzQ2NDYsInJvb21LZXlUeXBlIjoibWVldGluZ0hvc3QifQ.GQJbU-TSEdhUeGhQ6CuAUgcP-RfI4CvQ23Kb5pb59Vs"
        allow="camera; microphone; fullscreen; speaker; display-capture"
        style={{ width: '100%',height: '700px' }}
      ></iframe>
    </div>
  );
};

export default Meeting; 