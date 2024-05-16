export default function TopHeader() {
  return (
    <div className="header">
      <div className="header-child" id="left">
        <span>ghifari</span>
        <span>arsa</span>
      </div>
      <div className="header-child" id="middle">
        <span>
          <a
            href="https://www.linkedin.com/in/ghifari-arsa-ranandya-673637202/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </span>
        <span>
          <a
            href="https://github.com/GhifariArsa"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </span>
      </div>
      <div className="header-child" id="end">
        <span>reach</span>
        <span>out</span>
      </div>
    </div>
  );
}
