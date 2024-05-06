export function Header() {
  return (
    <div className="h-64 bg-basePost flex flex-row justify-stretch items-center">
      <img className="h-40 hidden md:block" src="effectLeft.svg" alt="" />
      <img className="flex-1 w-36 h-24" src="logo.svg" alt="" />
      <img className="h-40 hidden md:block" src="effectRight.svg" alt="" />
    </div>
  );
}
