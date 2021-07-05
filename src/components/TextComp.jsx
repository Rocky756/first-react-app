import { useEffect, useState } from 'react';

const TextComp = ({ text }) => {
  
  const [time, setTime] = useState('');


  useEffect(() => {
    console.log('COMPONENT is Mounted!!!');
    const myInterval = setInterval(() => {
      console.log(new Date());
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(myInterval);
      console.log('STOPED!!!');
    };
  }, []);


  return (
    <div className="box">
      <h1>{JSON.stringify(time)}</h1>
      <p>{text}</p>
    </div>
  );
};

export default TextComp;
