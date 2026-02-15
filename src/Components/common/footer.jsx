import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 w-full">
      {/* Main footer */}
      <div className="bg-base-100 text-base-content border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-primary">SkillSwap</h2>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              SkillSwap connects learners and mentors to exchange skills, grow
              together, and build a stronger community.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                Email:{" "}
                <a
                  className="link link-hover"
                  href="mailto:support@skillswap.com"
                >
                  support@skillswap.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a className="link link-hover" href="tel:+8801234567890">
                  +880 1234 567890
                </a>
              </li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social + Privacy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-primary"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-primary"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-primary"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            <a className="link link-hover text-sm mr-2">Privacy Policy</a>

            {/* Accent highlight (optional) */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1 text-xs font-semibold">
              <span className="text-primary">Trusted</span>
              <span className="opacity-80">• Community-driven learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-base-200 text-base-content">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm opacity-90">
          © {new Date().getFullYear()} SkillSwap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
