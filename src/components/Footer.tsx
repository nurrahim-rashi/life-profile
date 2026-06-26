import React from "react";
import logo from "../images/logo.jpeg";

type IconProps = { size?: number } & React.SVGProps<SVGSVGElement>;

const Instagram = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

const Youtube = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <polygon points="10 9 16 12 10 15 10 9" />
  </svg>
);

function Footer() {
  return (
    <footer className=" border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Life Pilates" className="h-20" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Life Pilates. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-black transition">
              <Instagram size={20} />
            </a>

            <a href="#" className="text-zinc-500 hover:text-black transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
