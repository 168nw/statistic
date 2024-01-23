import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';

const format = 'HH:mm';

const ActivityForm = () => {
  const [activities, setActivities] = useState([
    { activity: '', startTime: dayjs('4:00', format), endTime: dayjs('10:00', format) },
  ]);

  const handleActivityChange = (index, value) => {
    const newActivities = activities.map((activity, i) => {
      if (index === i) {
        return { ...activity, activity: value };
      }
      return activity;
    });
    setActivities(newActivities);
  };

  const handleStartTimeChange = (index, newTime) => {
    const newActivities = activities.map((activity, i) => {
      if (index === i) {
        return { ...activity, startTime: newTime };
      }
      return activity;
    });
    setActivities(newActivities);
  };

  const handleEndTimeChange = (index, newTime) => {
    const newActivities = activities.map((activity, i) => {
      if (index === i) {
        return { ...activity, endTime: newTime };
      }
      return activity;
    });
    setActivities(newActivities);

    if (index < activities.length - 1) {
      const nextActivity = activities[index + 1];
      const updatedActivities = [...activities];
      updatedActivities[index + 1] = { ...nextActivity, startTime: newTime };
      setActivities(updatedActivities);
    }
  };

  const addActivity = () => {
    const lastActivity = activities[activities.length - 1];
    setActivities([...activities, { activity: '', startTime: lastActivity.endTime, endTime: lastActivity.endTime }]);
  };

  return (
    <div className="activity-form-container">
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <label>Выберите вид занятости:</label>
          <select
            value={activity.activity}
            onChange={(e) => handleActivityChange(index, e.target.value)}
          >
            <option value="">Выберите занятость</option>
            <option value="Сон">Сон</option>
            <option value="Личная гигиена">Личная гигиена</option>
            {/* Другие варианты занятости здесь */}
          </select>
          <label>Время начала:</label>
          <TimePicker value={activity.startTime} onChange={(time) => handleStartTimeChange(index, time)} format={format} />
          <label>Время окончания:</label>
          <TimePicker value={activity.endTime} onChange={(time) => handleEndTimeChange(index, time)} format={format} />
        </div>
      ))}
      <button onClick={addActivity} className="add-button">Добавить занятость</button>
    </div>
  );
};

export default ActivityForm;
