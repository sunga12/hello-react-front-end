import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGreeting } from './redux/greeting/greetingSlice';

const Greeting = () => {
  const { greeting, isLoading } = useSelector((state) => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="greeting">Greeting: {greeting}</div>
  )
}

export default Greeting