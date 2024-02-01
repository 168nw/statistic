import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker, Button } from 'antd';
import ClearIcon from '@mui/icons-material/Clear';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';


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

  const handleDeleteActivity = (index) => {
    const newActivities = activities.filter((activity, i) => index !== i);
    setActivities(newActivities);
  };

  const addActivity = () => {
    const lastActivity = activities[activities.length - 1];
    setActivities([...activities, { activity: '', startTime: lastActivity.endTime, endTime: '' }]);
  };

  return (
    <div className="activity-form-container">
      <TransitionGroup>
      {activities.map((activity, index) => (
                <CSSTransition key={index} timeout={500} classNames="fade">
                <div className="activity-item">
                {index !== 0 && (
                  <div className="delete-button-container"> {/* Контейнер для кнопки "Удалить" */}
                    <Button onClick={() => handleDeleteActivity(index)} className="delete-button">
                      <ClearIcon/>
                    </Button>
                  </div>
                  )}
          <label>Выберите вид занятости:</label>
          <select
            value={activity.activity}
            onChange={(e) => handleActivityChange(index, e.target.value)}
          >
            <option value="">Выберите занятость</option>
            <option value="Сон">Сон</option>
            <option value="Прием пищи и питья">Прием пищи и питья</option>
            <option value="Работа">Работа</option>
            <option value="Работа по дому">Работа по дому</option>
            <option value="Уход за внешними делами">Уход за внешними делами</option>
            <option value="Уход за животными">Уход за животными</option>
            <option value="Покупки">Покупки</option>
            <option value="Досуг">Досуг</option>
            <option value="Спорт">Спорт</option>
            <option value="Религия ">Религия </option>
            <option value="Волонтерство ">Волонтерство </option>
            <option value="Телефонные звонки">Телефонные звонки</option>
            <option value="Разное">Разное</option>

            {/* Другие варианты занятости здесь */}
          </select>
          <label>Время начала:</label>
          <TimePicker value={activity.startTime} onChange={(time) => handleStartTimeChange(index, time)} format={format} />
          <label>Время окончания:</label>
          <TimePicker value={activity.endTime} onChange={(time) => handleEndTimeChange(index, time)} format={format} />
          </div>
          </CSSTransition>
          ))}
          </TransitionGroup>
            <li onClick={addActivity} className='button_li add-button'>Добавить занятость</li>
          <Link to="/thank_page">
            <li className='button_li add-button'> Принять участие</li>
          </Link>
    </div>
  );
};

export default ActivityForm;
