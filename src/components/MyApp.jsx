import { useState, useEffect } from 'react';
import Counter from './Counter';
import TextComp from './TextComp';
import Posts from './Posts';

const bigText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo natus
laboriosam minima dicta, enim quo sapiente non blanditiis asperiores facilis
recusandae, vel quas adipisci nam incidunt sit fugit. Dolorum voluptatibus
impedit architecto velit beatae, explicabo odio tenetur delectus. Eum nulla
vitae eligendi quaerat aliquam sint et dolore voluptas quidem assumenda,
dolorem nihil blanditiis soluta architecto earum quis`;

const MyApp = () => {
  const [value1, setValue1] = useState(100);
  const [value2, setValue2] = useState(200);

  useEffect(() => {
    console.log('ANY CHANGE!!!');
  });

  const clickHandler = () => {
    setValue1((pre) => pre + 1);
  };

  const decrement = () => {
    setValue2((pre) => pre - 10);
    setValue2((pre) => pre - 10);
    setValue2((pre) => pre - 10);
  };

  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={clickHandler}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={() => setShow((pre) => !pre)}>SHOW TEXT</button>
      <div className={show ? 'flexClass' : null}>
        <Counter value={value1} name={'Counter 1'} />
        <Counter value={value2} name={'Counter 2'} />
      </div>
      <div>{JSON.stringify(show)}</div>
      {show && <TextComp text={bigText} />}
      {/* {show ? bigText : null} */}
      <Posts value={value1} />
    </div>
  );
};

export default MyApp;
