import { useState, useEffect } from "react";

function TermsContent() {
  return (
    <>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">1. About Diamantina</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Diamantina is a queer-centered party series, cultural platform and community born in the Netherlands, connecting audiences with underground, experimental and emerging sounds and artists."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The Website provides information about Diamantina, upcoming events, artists, projects and related activities."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">2. Website Use</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You may use this Website for personal and lawful purposes."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You agree not to:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"use the Website for unlawful or fraudulent purposes;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"interfere with the operation or security of the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"attempt to gain unauthorized access to the Website or its systems;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"copy or exploit Website content for commercial purposes without permission;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"impersonate Diamantina or falsely suggest an affiliation with us;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"use automated systems to scrape or collect information from the Website in a manner that disrupts its operation."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We reserve the right to restrict access where necessary to protect the Website, our organisation or our users."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">3. Events</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Information about events, including dates, times, venues, lineups and programming, may occasionally change."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Artists, schedules, locations or other elements of an event may be modified where reasonably necessary."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where tickets are sold through a third-party ticketing provider, additional terms and conditions from that provider may apply to the purchase."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Ticket refund, cancellation and transfer conditions will be communicated during the ticket purchasing process or through the applicable ticketing provider."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">4. Event Admission</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Possession of a valid ticket does not remove the obligation to comply with venue rules, applicable law and Diamantina's Party Rules."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Diamantina aims to create a respectful and welcoming environment."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Harassment, discrimination, violence, intimidation, unwanted sexual behaviour or behaviour that compromises the safety or wellbeing of others may result in removal from an event."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where appropriate, admission may also be refused in accordance with applicable law, venue policies and ticket conditions."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">5. Intellectual Property</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Unless otherwise indicated, the Diamantina name, visual identity, graphics, artwork, photography, videos, written material and other original content appearing on the Website are owned by or licensed to Diamantina."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"These materials may not be reproduced, distributed, modified, commercially exploited or presented as your own without prior permission."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Sharing links to our Website or sharing our publicly available promotional material for personal, editorial or non-commercial purposes is welcome."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">6. Artists and Third-Party Content</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Certain photographs, artwork, music, artist biographies, logos or other materials may belong to participating artists, photographers, designers, venues or other third parties."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Ownership of such material remains with the respective rights holders."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">7. External Websites</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The Website may contain links to ticketing platforms, artist pages, social networks, venues or other third-party services."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Diamantina does not control these external websites and is not responsible for their content, availability, privacy practices or terms."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"When you leave our Website, the policies of the relevant third party may apply."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">8. Availability of the Website</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We aim to keep the Website accessible and accurate, but we cannot guarantee uninterrupted availability."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may update, modify, suspend or remove parts of the Website when reasonably necessary."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">9. Liability</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"To the extent permitted by applicable law, Diamantina is not liable for indirect or consequential losses resulting solely from the use or temporary unavailability of this Website."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Nothing in these Terms excludes or limits liability where doing so would be prohibited under applicable Dutch or European law."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">10. Privacy and Cookies</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Your use of the Website is also subject to our Privacy Policy."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The Website may use cookies and similar technologies. Non-essential marketing and tracking technologies are used only in accordance with applicable consent requirements."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You can manage your preferences through the cookie controls available on the Website."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">11. Changes to These Terms</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may update these Terms from time to time, for example when our services, Website or legal obligations change."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The most recent version will always be published on this page together with its effective date."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">12. Governing Law</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"These Terms are governed by the laws of the Netherlands."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Any mandatory rights available to consumers under Dutch or European Union law remain unaffected."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">13. Contact</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Questions about these Terms can be sent to:"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Diamantina"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">Emilio Miranda Escamilla, operating Diamantina as an individual (not registered as a formal business)</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[EMAIL ADDRESS]</span></p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[POSTAL ADDRESS, IF APPLICABLE]</span></p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Netherlands"}</p>
        </div>    </>
  );
}

function PrivacyContent() {
  return (
    <>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">1. Who Is Responsible for Your Data?</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The data controller responsible for the processing described in this Privacy Policy is:"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">Emilio Miranda Escamilla, operating Diamantina as an individual (not registered as a formal business)</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Trading as: Diamantina"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Netherlands"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Email: "}<span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[PRIVACY EMAIL]</span></p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Address: "}<span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[BUSINESS/POSTAL ADDRESS]</span></p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">2. Information We May Collect</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Depending on how you interact with Diamantina, we may process information such as:"}</p>
          <p className="font-ak text-[#101522] text-[12.5px] font-bold mt-3 mb-1.5">Information you provide directly</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"This may include:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"your name;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"email address;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"information you send through contact forms;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"newsletter subscription information;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"communications you send to us;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"information voluntarily provided when interacting with Diamantina."}</li>
          </ul>
          <p className="font-ak text-[#101522] text-[12.5px] font-bold mt-3 mb-1.5">Website and technical information</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"When you visit our Website, certain technical information may be processed, including:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"IP address;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"browser type;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"device type;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"operating system;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"pages visited;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"approximate interaction times;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"referring website or source;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"interactions with the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"cookie and tracking identifiers, where applicable."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Some of this information is processed only after you have provided the required consent."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">3. How We Use Personal Data</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may process personal data to:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"operate and maintain the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"provide information about Diamantina and our events;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"respond to questions or communications;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"manage newsletter subscriptions where offered;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"understand how visitors interact with the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"improve our Website, communication and event promotion;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"measure the effectiveness of marketing campaigns;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"promote Diamantina events to relevant audiences;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"protect the Website against misuse or security threats;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"comply with legal obligations."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We do not sell your personal data."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">4. Cookies and Similar Technologies</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Our Website may use cookies and similar technologies."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Some technologies are necessary for the Website to function correctly. Others, particularly analytics and marketing technologies, may collect information about how visitors interact with the Website."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where required by law, non-essential cookies and tracking technologies will not be activated until you have provided your consent."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You can accept or reject marketing technologies through the cookie banner and can change or withdraw your preferences later through the cookie settings available on the Website."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">5. Meta Pixel</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"With your consent, Diamantina uses the Meta Pixel, a technology provided by Meta Platforms, to understand the effectiveness of our advertising and help us promote Diamantina events."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The Meta Pixel may allow us and Meta to understand actions taken on the Website after someone interacts with or views an advertisement."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Depending on your interaction and configuration, information processed through the Meta Pixel may include:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"pages or content viewed;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"interactions with the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"referring URLs;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"browser and device information;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"IP address;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"cookie or advertising identifiers;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"events associated with advertising campaigns."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may use this information for purposes such as:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"measuring advertising performance;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"understanding whether advertisements lead to Website visits or other relevant actions;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"creating advertising audiences;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"retargeting people who have previously interacted with Diamantina;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"improving the relevance and effectiveness of our advertising."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The Meta Pixel will only be activated where the required marketing consent has been provided."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Information processed by Meta is also subject to Meta's own privacy practices and policies."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You can withdraw your consent at any time through the cookie settings on our Website."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">6. Legal Bases for Processing</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Depending on the activity, we process personal data on one or more of the following legal bases:"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Consent, for example, where you agree to marketing cookies, the Meta Pixel or optional marketing communications."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Legitimate interests, where processing is reasonably necessary to operate, secure or improve Diamantina and does not override your rights and interests."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Contractual necessity, where processing is required to provide something you have requested or to perform an agreement with you."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Legal obligation, where we are required to process or retain information under applicable law."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where processing is based on consent, you may withdraw that consent at any time."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">7. Sharing Personal Data</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may share limited personal data with service providers that help us operate Diamantina, including providers of:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"website hosting;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"website infrastructure;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"email and communication services;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"ticketing services;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"analytics tools;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"advertising and marketing technology."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where you consent to marketing tracking, information may also be processed by Meta Platforms in connection with the Meta Pixel and related advertising services."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We only share information where necessary for the relevant purpose or where required by law."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">8. International Data Transfers</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Some technology providers used by Diamantina may process information outside the European Economic Area."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where personal data is transferred internationally, we will rely on appropriate safeguards or other lawful transfer mechanisms required under applicable data protection law."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">9. Data Retention</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We retain personal data only for as long as reasonably necessary for the purpose for which it was collected or as required by law."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Retention periods may differ depending on the type of information and the reason it is processed."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Marketing information based on consent will no longer be used for that purpose after consent is withdrawn, subject to any limited retention necessary to record or respect that withdrawal."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">10. Your Privacy Rights</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Under the GDPR, depending on the circumstances, you may have the right to:"}</p>
          <ul className="my-2 pl-4 list-disc">
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"access your personal data;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"correct inaccurate personal data;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"request deletion of your personal data;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"restrict certain processing;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"object to certain processing;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"withdraw consent;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"receive certain personal data in a portable format;"}</li>
            <li className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-0.5">{"lodge a complaint with a supervisory authority."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"To exercise your rights, contact us at "}<span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[PRIVACY EMAIL]</span>{"."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may need to verify your identity before processing certain requests."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">11. Withdrawing Cookie Consent</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You can change or withdraw your consent to optional cookies and tracking technologies at any time through the Cookie Settings available on the Website."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Rejecting or withdrawing consent to marketing cookies will not prevent you from accessing the Website."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">12. Security</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss, alteration, disclosure or misuse."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"However, no internet-based service can guarantee absolute security."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">13. Third-Party Websites</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Our Website may link to external websites, ticketing platforms, social networks, venues or artist pages."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Those services operate under their own privacy policies. Diamantina is not responsible for the privacy practices of independent third-party websites."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">14. Children</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Diamantina's events and Website are not intended to knowingly collect personal data from children for behavioural advertising purposes."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Where an event has a specific age restriction, this will be communicated separately."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">15. Changes to This Privacy Policy</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"We may update this Privacy Policy when our Website, technology providers, activities or legal obligations change."}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"The latest version will always be available on this page."}</p>
        </div>
        <div className="mt-6">
          <p className="font-ak text-[#101522] text-[13px] font-bold mb-2 border-l-[3px] border-diamantina pl-3">16. Contact</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"For questions about privacy or the processing of your personal data:"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Diamantina"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">Emilio Miranda Escamilla, operating Diamantina as an individual (not registered as a formal business)</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[PRIVACY EMAIL]</span></p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[POSTAL ADDRESS, IF APPLICABLE]</span></p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"Netherlands"}</p>
          <p className="font-ak text-[#101522]/75 text-[12.5px] leading-[1.55] mb-2">{"You also have the right to lodge a complaint with the competent data protection authority, including the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) where applicable."}</p>
        </div>    </>
  );
}

// Self-managing, mounted once in App: exposes window.openLegal("terms" | "privacy")
// so Footer and CookieBanner can open it without prop drilling — same pattern as
// window.openSignUp used to be for the old newsletter popup.
export default function LegalModal() {
  const [doc, setDoc] = useState(null); // null | "terms" | "privacy"

  useEffect(() => {
    window.openLegal = (which) => setDoc(which);
    return () => {
      delete window.openLegal;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = doc ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [doc]);

  if (!doc) return null;

  const onClose = () => setDoc(null);

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-ink-65" aria-hidden="true" onClick={onClose} />

      <div className="relative z-[96] bg-white w-full max-w-[560px] max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-[97] w-8 h-8 rounded-full bg-[#101522] text-white border-none text-sm cursor-pointer flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          ✕
        </button>
        <div className="overflow-y-auto px-6 pt-10 pb-10">
          <p className="font-ak text-[11px] uppercase tracking-[0.06em] text-[#101522]/40 mb-1.5">Legal</p>
          <h2 className="font-ak text-[26px] leading-[1.05] tracking-[-0.02em] font-bold text-[#101522]">
            {doc === "terms" ? "Terms of Use" : "Privacy Policy"}
          </h2>
          <p className="font-ak text-[11px] uppercase tracking-[0.06em] text-[#101522]/45 mt-2 mb-4">
            Last updated: 26 August 2026
          </p>
          {doc === "terms" ? <TermsContent /> : <PrivacyContent />}
        </div>
      </div>
    </div>
  );
}
