function Header() {
  return (
    <>
      <div className="flex justify-between p-6 bg-orange-600 items-center">
        <div className="flex items-center justify-center gap-1">
          <div className="w-8 h-8">
            <img
              src="/src/assets/svg/pizza-white.png"
              alt="pizza-logo"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-3xl text-white">فست فود آنلاین</h1>
        </div>

        <h3 className="text-lg text-white">بهترین غذاها در سریعترین زمان</h3>
      </div>
    </>
  );
}


export default Header;
