import { useState, useEffect } from 'react';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const Posts = ({ value }) => {
  const [posts, setPosts] = useState(['text1', 'text2', 'text3']);

  const deleteHandler = (id) => {
    console.log(id, posts[id]);
    setPosts((pre) => pre.filter((el) => el.id !== id));
  };

  const fetchRunner = async () => {
    const request = await fetch(apiUrl);
    const response = await request.json();
    console.log(response);
    setPosts(response);
  };

  useEffect(() => {
    console.log('useEffect===> BURN !!!!!');
    fetchRunner();
  }, []);

  useEffect(() => {
    console.log('useEffect===> POST OR VALUE HAS CHANGED !!!');
    if (value > 110) {
      console.log('value>110 ');
    }
  }, [posts, value]);

  return (
    <div className="box">
      <h1>POSTS</h1>
      {/* <p>{JSON.stringify(posts)}</p> */}
      <ol>
        {posts.map((el) => (
          <li key={el.id}>
            <div>{el.title}</div>
            <button onClick={() => deleteHandler(el.id)}>DELETE</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
