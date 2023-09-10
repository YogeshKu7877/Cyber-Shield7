import React from "react";

import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <>
      <section className="z-[-1]">
        <div className="relative h-full px-4 mx-auto w-full text-center py-24 lg:py-56 bg-gray-900">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Our Mission: Digital Privacy and Respect Online
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            To Empower and Protect: Our mission is to empower individuals and
            businesses with the knowledge and tools they need to navigate the
            digital landscape securely. We believe that everyone deserves to
            explore the internet without fear, and every organization should be
            able to operate with confidence.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/hsd"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Quick scan
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <AnchorLink
              href="#aboutUs"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </AnchorLink>
          </div>
        </div>

        <div className="flex w-full h-full" id="aboutUs">
          <div className="w-full flex items-center justify-center">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h4 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  About Us
                </span>
              </h4>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <p className="mt-6 text-xl leading-8 text-gray-700">
                        At CyberShield, we stand at the forefront of the battle
                        against cyber threats, committed to safeguarding the
                        digital realm. In an era characterized by connectivity,
                        securing your online presence is paramount.
                      </p>
                    </div>
                  </div>
                </div>
                <article className="flex max-w-xl flex-col items-start justify-between -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                  <div className="relative flex items-center bg-gray-100 mt-9">
                    <div className="p-8 sm:p-16 lg:p-24">
                      <h3 className="text-4xl font-bold sm:text-2xl">
                        Rest assured, with CyberShield, your data is in capable
                        hands. We continuously invest in cutting-edge
                        technology, training, and personnel to ensure that our
                        data security measures remain at the forefront of
                        industry standards. Your trust is our most valuable
                        asset, and we are unwavering in our commitment to
                        protect it.
                      </h3>

                      <p className="mt-4 text-gray-600">
                        Comprehensive Expertise: Our team of cybersecurity
                        experts combines years of experience with cutting-edge
                        technology to provide a comprehensive suite of
                        protection services. Innovation-Driven Solutions: We are
                        committed to staying ahead of the curve, constantly
                        innovating to anticipate and counteract emerging
                        threats.
                      </p>
                    </div>
                  </div>
                </article>

                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                  <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                      <p>
                        The internet has given rise to diverse online
                        communities where respectful discourse is essential for
                        fostering positive interactions. Hate speech on social
                        media platforms can spread rapidly, influencing public
                        opinion and inciting real-world actions.
                      </p>
                      <ul className="mt-8 space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Educate Yourself.
                            </strong>{" "}
                            Understand the impact of hate speech on individuals
                            and communities and educate yourself about the
                            consequences.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900 ">
                              Support Anti-Hate Initiatives.
                            </strong>
                            Engage with or support organizations, initiatives,
                            or campaigns that work to combat hate speech and
                            promote tolerance and understanding.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Social Responsibility:
                            </strong>
                            At CyberShield, we are deeply committed to our
                            social responsibilities. We recognize that in
                            today's interconnected world, digital safety is an
                            integral part of overall well-being. Our commitment
                            extends beyond mere protection; we actively engage
                            in initiatives that promote human rights, global
                            awareness, and a safer digital space.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Human Rights Advocacy:
                            </strong>
                            In the digital age, protecting human rights
                            transcends physical boundaries. CyberShield
                            advocates for the preservation of human rights in
                            the digital sphere. We believe that every individual
                            should be able to enjoy their online presence free
                            from discrimination, harassment, or any form of
                            harm. Through our initiatives, we work tirelessly to
                            ensure that digital spaces are inclusive,
                            respectful, and uphold the dignity and rights of all
                            individuals.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Global Awareness Campaigns:
                            </strong>
                            Education and awareness are at the heart of our
                            mission. We believe that knowledge is the most
                            powerful tool in the fight against cyber threats.
                            Our global awareness campaigns aim to inform and
                            equip individuals and organizations with the
                            knowledge they need to navigate the digital world
                            safely. Through webinars, workshops, and educational
                            resources, we empower our community to recognize and
                            mitigate risks, ensuring a secure online experience
                            for all.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Report Hate Speech:
                            </strong>
                            At CyberShield, we take a strong stand against hate
                            speech. Our Hate Speech Reporting initiative
                            provides a platform for users to report instances of
                            hate speech they encounter online. By actively
                            addressing and combatting hate speech, we aim to
                            foster a more respectful and tolerant online
                            community. Through this initiative, we encourage
                            users to stand up against hate and contribute to a
                            safer digital environment for everyone.
                          </span>
                        </li>
                      </ul>
                      <p className="mt-8">
                        In Digital literacy is a fundamental right in today's
                        interconnected world. At CyberShield, we are dedicated
                        to educating individuals and organizations about cyber
                        threats and best practices for online safety. We offer a
                        range of resources, including informative articles,
                        webinars, workshops, and seminars. Through these
                        educational initiatives, we empower our community to
                        make informed decisions and take proactive steps towards
                        enhancing their digital security.
                      </p>

                      <p className="mt-6">
                        Protecting your privacy is our top priority. Our team
                        conducts thorough assessments to identify and mitigate
                        privacy risks and threats. We take a comprehensive
                        approach, evaluating potential vulnerabilities in your
                        digital presence and recommending tailored solutions. By
                        addressing privacy risks, we ensure that your sensitive
                        information remains secure, giving you the confidence to
                        navigate the digital landscape without compromise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Cyber Education
              </span>
            </h2>
            <p className="mt-4 text-gray-900">Cyber Security</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              to="/cyberSecurity"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Strong and Unique Passwords
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Use strong, complex passwords that combine upper and lower-case
                letters, numbers, and symbols. Avoid using easily guessable
                information like birthdays or common words. Use different
                passwords for each online account to prevent a breach from
                affecting multiple ndamental values of human rights,
                inclusivity, and privacy.
              </p>
            </Link>
            <Link
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              to="/cyberSecurity"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Two-Factor Authentication (2FA)
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Enable 2FA whenever possible. It adds an extra layer of security
                by requiring you to enter a one-time code sent to your mobile
                device.
              </p>
            </Link>
            <Link
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              to="/cyberSecurity"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Regular Software Updates
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Keep your operating system, browsers, and applications up to
                date. Cybercriminals often exploit vulnerabilities in outdated
                software.
              </p>
            </Link>
          </div>
        </div>
        <section className="bg-gray-200 text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <p className="mt-4 text-gray-900">Digital Privacy content.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/digitalPrivacy"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Tailored Content for Diverse Audiences:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  We recognize that cybersecurity needs vary across different
                  sectors and user groups. Our campaigns are carefully tailored
                  to address the specific concerns and challenges faced by
                  individuals, small businesses, enterprises, and educational
                  institutions. Whether you're a tech-savvy professional or new
                  to the digital world, our content is designed to meet you
                  where you are.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/digitalPrivacy"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Interactive Learning Experience:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Our campaigns go beyond static content. We leverage multimedia
                  elements, including videos, infographics, and interactive
                  quizzes, to create an engaging learning experience. By
                  incorporating real-life scenarios and practical tips, we
                  enable users to apply their newfound knowledge in their online
                  activities
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/digitalPrivacy"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Ongoing Support and Resources:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Our digital campaigns serve as a starting point for a
                  continuous journey towards enhanced cybersecurity. We provide
                  a wealth of supplementary resources, including in-depth
                  guides, best practices, and access to our expert support team.
                  We believe that education is an ongoing process, and our
                  campaigns are just the first step in building a safer digital
                  future.
                </p>
              </Link>
            </div>

            {/* <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-400"
              >
                Learn more
              </Link>
            </div> */}
          </div>

          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <p className="mt-4 text-gray-900">Privacy Risk and Threats.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/privacyRisk"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Community Building and Collaboration:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Through our campaigns, we aim to foster a sense of community
                  among our users. We encourage discussions, knowledge-sharing,
                  and collaboration among individuals and organizations
                  committed to digital safety. By creating a supportive network,
                  we empower our community to be proactive advocates for
                  cybersecurity in their respective spheres.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/privacyRisk"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Measuring Impact and Effectiveness:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  We believe in accountability. Our campaigns are carefully
                  monitored and evaluated to measure their impact on user
                  behavior and awareness levels. This data-driven approach
                  allows us to refine our content and strategies, ensuring that
                  we deliver the most relevant and impactful information to our
                  audience.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/privacyRisk"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  By engaging with our digital campaigns, you're not only
                  enhancing your own cybersecurity but also contributing to a
                  collective effort to create a safer online environment for
                  everyone. Together, we can fortify the digital world against
                  evolving threats and build a resilient, secure digital future.
                </p>
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <p className="mt-4 text-gray-900">Data Security</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/dataSecurity"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Data Security Commitment:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  At CyberShield, safeguarding your data is our utmost priority.
                  We understand that in today's data-driven world, protecting
                  sensitive information is non-negotiable. Our comprehensive
                  data security measures are designed to ensure that your
                  valuable information remains confidential, intact, and
                  accessible only to authorized users.
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/dataSecurity"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Encryption Protocols:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  We employ industry-standard encryption protocols to shield
                  your data from unauthorized access during transmission and
                  storage. This means that even if intercepted, the data remains
                  indecipherable to any unauthorized party, providing an
                  additional layer of protection
                </p>
              </Link>

              <Link
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                to="/dataSecurity"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Access Controls and Authentication:
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Our robust access controls and authentication processes ensure
                  that only authorized individuals have access to your data.
                  Multi-factor authentication, strong password policies, and
                  role-based permissions are just some of the measures we
                  implement to fortify your data's integrity.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gray-200 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
          <div className="relative px-4 mx-auto w-full text-center py-24 lg:py-40 bg-write">
            <div className="bg-white w-50 mt-[-50px] p-4 text-centerblock rounded-xl border border-gray-400 border-s-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10">
              <h5 className="mb-7 text-3xl font-bold text-gray-900 dark:text-white">
                Regular Security Audits and Vulnerability Assessments:
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                To stay ahead of evolving threats, we conduct regular security
                audits and vulnerability assessments. This proactive approach
                allows us to identify and address potential weaknesses in our
                systems, ensuring that your data remains impervious to
                exploitation.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Despite our stringent preventive measures, we acknowledge that
                unforeseen events may occur. In such cases, our incident
                response team is equipped to swiftly address any security
                incidents. Additionally, we have robust data recovery protocols
                in place to restore any lost or compromised information to its
                original state.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                We adhere to all relevant data protection and privacy
                regulations, ensuring that your data is handled in compliance
                with legal requirements. This includes adherence to GDPR, HIPAA,
                CCPA, and any other applicable regional or industry-specific
                standards.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Our vigilant monitoring systems and utilization of threat
                intelligence allow us to stay ahead of emerging threats. By
                leveraging advanced technologies and keeping a finger on the
                pulse of the cybersecurity landscape, we can swiftly respond to
                any potential risks.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                We believe that educating our users is fundamental to data
                security. We provide resources and training to empower you with
                the knowledge and best practices needed to maintain a secure
                digital environment.
              </p>
              <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
                In the event of any security incident or breach, we commit to
                transparent communication. Our priority is to keep you informed,
                providing you with the necessary guidance and resources to
                navigate the situation with confidence.
              </p>
              <Link
                to="/reporting"
                type="button"
                className="text-red-700 mt-7 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-700"
              >
                Send report!
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4 pt-16">
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>
                    How can I stay updated on the latest cybersecurity trends
                    and news?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  CyberShield regularly publishes articles, blog posts, and
                  newsletters to keep you informed about the latest developments
                  in the cybersecurity landscape. By subscribing to our updates,
                  you'll stay ahead of emerging threats and learn about
                  effective countermeasures.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>
                    What is CyberShield and how can it help me protect myself
                    from cyber attacks?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  CyberShield is a comprehensive platform designed to empower
                  individuals with tools and techniques to secure themselves
                  from cyber threats. It provides a range of resources,
                  tutorials, and practical advice to enhance your online safety.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>
                    How does the HSDR (Hate Speech Detection and Report)
                    function work?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  The HSDR function in CyberShield is a unique tool that allows
                  you to check for abusive or hate speech within a paragraph you
                  paste into the input box. It utilizes advanced algorithms to
                  analyze the text and promptly identifies any potentially
                  harmful content.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>
                    Can I report instances of hate speech detected by HSDR?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  Yes, you can! If HSDR identifies hate speech in the content
                  you provided, you will have the option to report it. Our
                  system takes user reports seriously and investigates them
                  thoroughly to ensure a safer online environment.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>
                    What are some basic cybersecurity practices I should
                    implement?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  CyberShield offers a wealth of resources to guide you on
                  fundamental cybersecurity practices. These include creating
                  strong, unique passwords, regularly updating software, being
                  cautious of phishing attempts, and using reputable security
                  tools.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>
                    Are there specific tools and techniques recommended for
                    different types of cyber threats?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  Absolutely! CyberShield provides specialized guides for
                  various types of cyber threats, such as malware, phishing, and
                  social engineering attacks. These guides offer step-by-step
                  instructions on how to defend against specific threats.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default Home;
