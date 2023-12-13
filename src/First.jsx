import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Link } from 'react-router-dom';

const First = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data/huawei.json')
      .then(response => {
        setData(response.data[0].data.subjectList);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className="question">
        {data.map((item, index) => {
          const answers = item.answer.split('&');
          return (
            <div key={index} className={item.userScore === 2.00 ? 'correct' : item.userScore === 0 ? 'incorrect' : ''}>
              <p><strong>{index + 1}. {item.subjectTitle}</strong></p>
              <ul className="options">
                {item.subjectOptionVOList.map((option, optionIndex) => (
                  <li className={`option ${answers.includes(option.optionId) ? 'answer' : ''}`} key={optionIndex}>
                    {option.optionTitle}
                  </li>
                ))}
              </ul>
              {item.answer === "1" ? <b>True</b> : item.answer === "0" ? <b>False</b> : ''}
            </div>
          );
        })}
      </div>
      <Link to="/second" className='button'>Hal Kedua</Link>
    </>
  );
};

export default First;