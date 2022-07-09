import react from "react";

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
