import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-[0_4px_6px_0px_rgba(0,0,0,0.1)]">
      <Logo />
      <Nav />
    </header>
  );
}