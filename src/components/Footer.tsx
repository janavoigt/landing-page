import logoInsta from "../assets/instagram.svg";
import logoFacebook from "../assets/facebook.svg";
import logoWhats from "../assets/whatsapp1.png";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2 md:mb-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my page"
          >
            <img src={logoInsta} width={25} height={10} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my page"
          >
            <img src={logoFacebook} width={25} height={10} alt="facebook" />
          </a>
        </div>
        <p className="text-sm text-neutral-700">
          &copy; 2025 VastuSpaze. All rights reserved.
        </p>
      </div>

      <a
        href="https://wa.me/55811069005"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-7 w-12 h-12"
      >
        <img src={logoWhats} alt="Chat with us" width={75} />
      </a>
    </footer>
  );
}
