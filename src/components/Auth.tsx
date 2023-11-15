import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<AuthButtonProps> = ({ onClick, className = '', children, ...props }) => {
  return (
      <button onClick={onClick} className={`px-2 py-1 border rounded-lg hover:bg-white hover:text-slate-600 transition duration-100 ${className}`} {...props}>
          {children}
      </button>
  );
}

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};
