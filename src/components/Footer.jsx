export default function Footer() {
  const igLink = "https://www.instagram.com/diamantina.nl/";
  const webshopLink = "#"; // pendiente

  return (
    <footer className="bg-onyx text-paper-white">
      <div className="px-4 md:px-6 pt-32 md:pt-48 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8 md:gap-12">
            <FooterBig href={igLink} external>Instagram</FooterBig>
            <FooterBig href={webshopLink}>Webshop</FooterBig>
          </div>
          <div className="flex md:items-end md:justify-end">
            <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/60">
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper-white transition-colors"
              >
                Terms of Use
              </a>
              {" · "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper-white transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="mt-24 md:mt-48 pt-8 flex items-center justify-between">
          <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-diamantina">
            Diamantina
          </span>
          <button
            onClick={() => window.openSignUp?.()}
            className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/60 hover:text-paper-white transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            Subscribe
          </button>
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
