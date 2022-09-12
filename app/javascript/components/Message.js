import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/messageSlice";

const Message = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <h1>
      {message}
    </h1>
  )
}

export default Message