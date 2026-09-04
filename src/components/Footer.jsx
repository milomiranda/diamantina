import Particles from "@/components/Particles";

export default function Footer({ theme }) {
  const igLink = "https://www.instagram.com/diamantina.club";
  const webshopLink = "#"; // pendiente

  // Falls back to normal static colors on every page except Home (where
  // Layout passes the live scroll-driven theme).
  const t = theme || {
    bg: "#DDEEFF",
    text: "#101522",
    text60: "rgba(16,21,34,0.6)",
    accent: "#D50000",
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: t.bg, color: t.text, transition: "background-color 0.1s linear" }}
    >
      <Particles />
      <div className="relative z-10 px-4 md:px-6 pt-32 md:pt-48 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8 md:gap-12">
            <FooterBig href={igLink} external color={t.text}>Instagram</FooterBig>
            <FooterBig href={webshopLink} color={t.text}>Webshop</FooterBig>
          </div>
          <div className="flex md:items-end md:justify-end">
            <p
              className="font-ak text-[12px] uppercase tracking-[0.06em]"
              style={{ color: t.text60, transition: "color 0.1s linear" }}
            >
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Terms of Use
              </a>
              {" · "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="mt-24 md:mt-48 pt-8 flex items-center justify-between">
          <span
            className="font-ak text-[12px] uppercase tracking-[0.06em]"
            style={{ color: t.accent, transition: "color 0.1s linear" }}
          >
            Diamantina
          </span>
          <button
            onClick={() => window.openSignUp?.()}
            className="font-ak text-[12px] uppercase tracking-[0.06em] hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
            style={{ color: t.text60 }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterBig({ href, children, external, color }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block w-fit font-gs text-[58px] md:text-[72px] leading-[0.9] tracking-[-0.02em] hover:opacity-60 transition-opacity"
      style={{ color, transition: "color 0.1s linear" }}
    >
      {children}
    </a>
  );
}
