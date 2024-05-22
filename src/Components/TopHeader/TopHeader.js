export default function TopHeader() {
  return (
    <div className="header">
      <div className="header-child" id="left" style={{ width: "80px" }}>
        <span>ghifari</span>
        <span>arsa</span>
      </div>
      <div className="header-child" id="middle" style={{ width: "80px" }}>
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
      <div className="header-child" id="end" style={{ width: "80px" }}>
        <a
          href="mailto:ghifariarsa2048@gmail.com"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span>reach</span>
          <span>out</span>
        </a>
      </div>
    </div>
  );
}
