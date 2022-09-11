import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct, tryAgain }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button onClick={tryAgain}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percent = Math.floor((step / questions.length) * 100);
  console.log(percent);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>

      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, idx) => (
          <li key={item} onClick={() => onClickVariant(idx)}>
            {item}
          </li>
        ))}
        {/* <li>{question.variants}</li> */}
        {/* <li>Это функция для хранения данных компонента</li>
            <li>Это глобальный стейт</li>
            <li>Это когда на ты никому не нужен</li> */}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep((prev) => prev + 1);

    if (question.correct === index) {
      setCorrect((prev) => prev + 1);
    }
  };

  const tryAgain = () => {
    setStep(0);
    setCorrect(0);
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} tryAgain={tryAgain} />
      )}
    </div>
  );
}

export default App;
