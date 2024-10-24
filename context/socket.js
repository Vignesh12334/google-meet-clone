import { useEffect, useState, createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};

export const SocketProvider = ({ props }) => {
  const { childern } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();

    setSocket(connection);
  }, []);

  return (
    <SocketContext.Provider value={socket}>{childern}</SocketContext.Provider>
  );
};
