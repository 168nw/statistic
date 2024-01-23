import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';

const format = 'HH:mm';

const App = () => {
  const [previousTime, setPreviousTime] = useState(dayjs('4:00', format));

  const handleTimeChange = (newTime) => {
    setPreviousTime(newTime);
    // Другая логика обработки изменения времени
  };

  return <TimePicker value={previousTime} onChange={handleTimeChange} format={format} />;
};

export default App;
