import { Login, Logout } from "./Auth";

const Navbar = (props: {isAuthenticated: boolean}) => {
  return (
    <div className="w-full py-4 px-8 flex items-center justify-between ">
      <h2 className="text-xl font-bold">App Drawer</h2>
      {props.isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
};

export default Navbar;