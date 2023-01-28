import githubMark from "../assets/images/github-mark-white.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/WingHaa/Memory-Card">
        <img src={githubMark} alt="Github Link" />
      </a>
      <a href="https://www.dota2.com/">
        <p>All image assets are properties of Valve Corporation</p>
      </a>
    </div>
  );
}
