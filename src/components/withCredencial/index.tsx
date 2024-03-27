import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import path from "../../routes/path";
import { getToken } from "../../services/api";

const withCredencial = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const nav = useNavigate();
    useEffect(() => {
      if (!getToken()) {
        nav(path.login);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withCredencial;
