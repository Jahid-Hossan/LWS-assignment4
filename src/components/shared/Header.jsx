import logo from "../../assets/react.svg";

export default function Header() {
  return (
    <>
      <header className="flex items-center mb-12 justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-10" />
        </div>
        <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
          <a
            href="./index.html"
            className="hover:text-zinc-200 cursor-pointer transition-all"
          >
            Create Image
          </a>
          <a
            href="./downloaded.html"
            className="hover:text-zinc-200 cursor-pointer transition-all font-medium text-zinc-200"
          >
            Downloaded
          </a>
        </ul>
      </header>
      <div className="fixed -bottom-1/4 -right-0 ">
        <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
      </div>
    </>
  );
}
