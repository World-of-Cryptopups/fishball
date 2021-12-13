const AppFooter = () => {
  return (
    <footer className="py-6">
      <div className="mx-auto w-11/12 flex items-center justify-between">
        <h4 className="text-neutral-300">
          &copy; {new Date().getFullYear()} |{" "}
          <span className="text-white font-extrabold">fishball</span>
        </h4>

        <ul className="text-neutral-400">
          <li>
            <a
              href="https://github.com/World-of-Cryptopups/fishball"
              target="_blank"
              rel="noreferrer"
              className="hover:udnerline"
              title="Goto Github page"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default AppFooter;
