import React from "react";

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
            We're dedicated to educating users and eliminating hate speech,
            making the online world safer, more inclusive, and respectful.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
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
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="flex w-full h-full">
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
                        Technology has made communication more accessible and
                        widespread, reaching a global audience. Hate speech
                        online can harm individuals and communities on a massive
                        scale. The rise of online hate speech has led to
                        cyberbullying and harassment, causing emotional and
                        psychological harm to victims.
                      </p>
                    </div>
                  </div>
                </div>
                <article className="flex max-w-xl flex-col items-start justify-between -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                  <div className="relative flex items-center bg-gray-100 mt-9">
                    <div className="p-8 sm:p-16 lg:p-24">
                      <h3 className="text-4xl font-bold sm:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore, debitis.
                      </h3>

                      <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid, molestiae! Quidem est esse numquam odio
                        deleniti, beatae, magni dolores provident quaerat totam
                        eos, aperiam architecto eius quis quibusdam fugiat
                        dicta.
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
                      <ul role="list" className="mt-8 space-y-8 text-gray-600">
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
                              Social Responsibility.
                            </strong>
                            Tech companies and online platforms increasingly
                            recognize their responsibility to combat hate speech
                            and promote respectful communication.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Human Rights.
                            </strong>
                            Hate speech infringes upon the human rights and
                            dignity of individuals and groups, undermining
                            principles of equality and non-discrimination.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Global Awareness.
                            </strong>
                            Hate speech detection and prevention efforts are
                            gaining global attention as society seeks solutions
                            to address this growing issue.
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span>
                            <strong className="font-semibold text-gray-900">
                              Report Hate Speech.
                            </strong>
                            If you encounter hate speech online or offline,
                            consider reporting it to the relevant authorities or
                            platform moderators.
                          </span>
                        </li>
                      </ul>
                      <p className="mt-8">
                        In today's technological era, the need to avoid hate
                        speech is not only a matter of personal responsibility
                        but also a societal imperative. It contributes to
                        building a more harmonious and tolerant digital world
                        where individuals can interact with respect and dignity,
                        free from discrimination and harm.
                      </p>

                      <p className="mt-6">
                        Avoiding hate speech is an essential step toward
                        creating a more inclusive, respectful, and harmonious
                        society, whether in offline or online interactions. It
                        contributes to a safer and more welcoming environment
                        for all individuals and communities.
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

            <p className="mt-4 text-gray-900">Cyber Security.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-black">
                Digital campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </div>
        <section className="bg-gray-200 text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <p className="mt-4 text-gray-900">Digital Privacy content.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                href="#"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                href="#"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                href="#"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                href="#"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                href="#"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10"
                href="#"
              >
                <h2 className="mt-4 text-xl font-bold text-black">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-400"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gray-200 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
          <div className="relative px-4 mx-auto w-full text-center py-24 lg:py-40 bg-write">
            <div className="bg-white w-50 mt-[-50px] p-4 text-centerblock rounded-xl border border-gray-400 border-s-8 shadow-xl transition hover:border-gray-100 hover:shadow-purple-500/10">
              <h5 className="mb-7 text-3xl font-bold text-gray-900 dark:text-white">
                Report
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Online hate speech can have profound and far-reaching
                consequences, affecting individuals, communities, and the
                broader digital landscape. Reporting hate speech is not just a
                responsible action; it is a vital step in fostering a safer and
                more respectful online environment. Here's why it matters
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Hate speech can cause significant harm, both emotionally and
                psychologically, to those targeted. Reporting hate speech helps
                shield individuals from the adverse effects of discrimination,
                harassment, and threats. environment. Here's why it matters
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Hate speech has the potential to poison online communities and
                turn them into hostile environments. By reporting it, you
                contribute to maintaining an inclusive, respectful, and
                harmonious online space where diverse voices can thrive.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Hate speech has the potential to poison online communities and
                turn them into hostile environments. By reporting it, you
                contribute to maintaining an inclusive, respectful, and
                harmonious online space where diverse voices can thrive.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Your reports provide valuable feedback to online platforms and
                websites. They help these platforms enforce their community
                guidelines and take necessary actions against those who violate
                them, making the digital world safer for all users.
              </p>
              <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
                By reporting hate speech, you become an active participant in
                the fight against online discrimination and hostility. Your
                actions contribute to a more welcoming and respectful digital
                society, where everyone can engage without fear or prejudice.
                Thank you for taking a stand and joining us in promoting digital
                respect and safety.
              </p>
              <button
                type="button"
                className="text-red-700 mt-7 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-700"
              >
                Sand report!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
