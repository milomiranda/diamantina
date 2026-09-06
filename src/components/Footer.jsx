import Particles from "@/components/Particles";

export default function Footer() {
  const igLink = "https://www.instagram.com/diamantina.club";
  const webshopLink = "#"; // pendiente

  return (
    <footer className="relative overflow-hidden bg-onyx text-paper-white">
      <Particles />
      <div className="relative z-10 px-4 md:px-6 pt-32 md:pt-48 pb-16">
        <div className="flex flex-col gap-8 md:gap-12">
          <FooterBig href={igLink} external>Instagram</FooterBig>
          <FooterBig href={webshopLink}>Webshop</FooterBig>
        </div>
        <div className="mt-24 md:mt-48 pt-8 flex flex-col-reverse md:flex-row items-center md:justify-between gap-4 md:gap-0">
          <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-diamantina">
            Diamantina
          </span>
          <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60">
            <button
              onClick={() => window.openSignUp?.()}
              className="uppercase hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
              style={{ font: "inherit", color: "inherit" }}
            >
              Subscribe
            </button>
            {" · "}
            <button
              onClick={() => window.openLegal?.("terms")}
              className="uppercase hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
              style={{ font: "inherit", color: "inherit" }}
            >
              Terms of Use
            </button>
            {" · "}
            <button
              onClick={() => window.openLegal?.("privacy")}
              className="uppercase hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
              style={{ font: "inherit", color: "inherit" }}
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBig({ href, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block w-fit font-gs text-[58px] md:text-[72px] leading-[0.9] tracking-[-0.02em] text-paper-white hover:opacity-60 transition-opacity"
    >
      {children}
    </a>
  );
}
