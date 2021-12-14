const AppFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full z-20 bg-neutral-900">
      <hr className="border-neutral-800" />

      <div className="py-4 mx-auto w-11/12 flex items-center justify-between">
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
