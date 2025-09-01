import Menu from "./Menu";

function Header() {
  return (
    <div className="header h-[20vh] flex flex-col justify-between">
      <div className="menu-container flex justify-between items-center">
        <img src="" alt="" className="w-8 h-8" />
        <Menu />
        <a
          href="https://t.me/Katolyk_Olga"
          target="_blank"
          title="link to my telegram"
        >
          Write to me
        </a>
      </div>
      <div className="temporary-greeting h-64">
        <h2 className="text-lg text-lime-600 font-bold">
          I'm in development right now, will be ready soon... <br></br>I'll be
          glad to see you again.
        </h2>
        <h3 className="text-base font-normal">
          My technology stack: &ensp;
          <span className="italic text-green-600 ">
            HTML, CSS, Saas, Tailwind, JavaScript, React, Redux, React-Router,
            Vite, some libraries
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Header;
