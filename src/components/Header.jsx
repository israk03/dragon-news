import moment from "moment";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h1 className="text-gray-400">Journalism without fear or favour.</h1>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
}
