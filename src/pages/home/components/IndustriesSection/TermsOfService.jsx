import React from 'react';

const legalDisclaimerContent = {
  title: "Legal Disclaimer",
  content: [
    "Bawri Group retains copyright on all the text, graphics and trademarks displayed on this site. All the text, graphics and trademarks displayed on this site are owned by Bawri Group and used under licence by Bawri affiliates.",
    "You may print copies of the information on this site for your personal use and store the files on your computer for personal use. You may not distribute text or graphics to others without the express written consent of Bawri Group and Bawri affiliates. Also, you may not, without our permission, copy and distribute this information on any other server, or modify or reuse text or graphics on this or any another system.",
    "No reproduction of any part of the site may be sold or distributed for commercial gain, nor shall it be modified or incorporated in any other work, publication or site, whether in hard copy or electronic format, including postings to any other site. Bawri Group reserves all other rights.",
    "The information on this site has been included in good faith and is for general purposes only. It should not be relied upon for any specific purpose and no representation or warranty is given as regards its accuracy or completeness.",
    "No information on this site shall constitute an invitation to invest in Bawri or any of its affiliates. Neither Bawri Group and Bawri affiliates, nor their or their affiliates' officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to or use of this site or any site linked to it, including, without limitation, any loss of profit, indirect, incidental or consequential loss."
  ]
};

const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen mt-[10vh] bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">{legalDisclaimerContent.title}</h1>
        <div className="space-y-4 text-gray-700">
          {legalDisclaimerContent.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;
