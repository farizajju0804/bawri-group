import React from 'react';

const privacyPolicyContent = {
  title: "Privacy Policy",
  sections: [
    {
      title: "1. Introduction",
      content: "We are committed to safeguarding the privacy of our website visitors; this policy sets out how we will treat your personal information. By using our website, you consent to the data practices described in this policy."
    },
    {
      title: "2. Collecting Personal Information",
      content: "We may collect, store, and use the following kinds of personal information:",
      list: [
        "Information about your computer including your IP address, geographical location, browser type and version, and operating system;",
        "Information about your visits to and use of this website including the referral source, length of visit, page views, and website navigation paths;",
        "Information that you provide when registering with our website, such as your email address;",
        "Information that you provide when completing your profile on our website, such as your name, profile pictures, gender, date of birth, relationship status, interests and hobbies, educational details, and employment details;",
        "Information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters;",
        "Information that you provide to us when using the services on our website, or that is generated in the course of the use of those services;",
        "Information relating to any purchases you make of our goods or services or any other transactions that you enter into through our website;",
        "Information that you post to our website for publication on the internet (including your user name, your profile pictures, and the content of your posts);",
        "Information contained in or relating to any communications that you send to us or send through our website (including the communication content and metadata associated with the communication);",
        "Any other personal information that you choose to send to us."
      ]
    },
    {
      title: "3. Using Personal Information",
      content: "Personal information submitted to us through our website will be used for the purposes specified in this policy or on the relevant pages of the website. We may use your personal information to:",
      list: [
        "Administer our website and business;",
        "Personalize our website for you;",
        "Enable your use of the services available on our website;",
        "Send you goods purchased through our website;",
        "Supply to you services purchased through our website;",
        "Send statements, invoices, and payment reminders to you, and collect payments from you;",
        "Send you non-marketing commercial communications;",
        "Send you email notifications that you have specifically requested;",
        "Send you our email newsletter, if you have requested it (you can inform us at any time if you no longer require the newsletter);",
        "Send you marketing communications relating to our business or the businesses of carefully-selected third parties which we think may be of interest to you, by post or, where you have specifically agreed to this, by email or similar technology (you can inform us at any time if you no longer require marketing communications);",
        "Provide third parties with statistical information about our users (but those third parties will not be able to identify any individual user from that information);",
        "Deal with inquiries and complaints made by or about you relating to our website;",
        "Keep our website secure and prevent fraud;",
        "Verify compliance with the terms and conditions governing the use of our website (including monitoring private messages sent through our website private messaging service); and",
        "Other uses."
      ]
    },
    {
      title: "4. Disclosing Personal Information",
      content1: "We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers, or subcontractors as reasonably necessary for the purposes set out in this policy.",
      content2: "We may disclose your personal information:",
      list: [
        "To the extent that we are required to do so by law;",
        "In connection with any ongoing or prospective legal proceedings;",
        "In order to establish, exercise, or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk);",
        "To the purchaser (or prospective purchaser) of any business or asset that we are (or are contemplating) selling; and",
        "To any person who we reasonably believe may apply to a court or other competent authority for disclosure of that personal information where, in our reasonable opinion, such court or authority would be reasonably likely to order disclosure of that personal information."
      ]
    }
  ]
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen mt-[10vh] bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">{privacyPolicyContent.title}</h1>
        <div className="space-y-4 text-gray-700">
          {privacyPolicyContent.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
              {section.list && (
                <ul className="list-disc list-inside">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {section.content1 && <p>{section.content1}</p>}
              {section.content2 && <p>{section.content2}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
