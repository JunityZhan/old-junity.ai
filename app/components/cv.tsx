import React from 'react';

const CV = () => {
  return (
        <div className="w-3/4 space-y-8 flex-col">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col justify-center mr-4 space-y-[-1]">
              {Array.from("PERSONA").map((char, index) => (
                  <span key={index} className="text-2xl font-semibold leading-extra-tight">{char}</span>
              ))}
            </div>

            <div>
              <p>LINKANG (Junity) ZHAN</p>
              <p>📧 lz801@case.edu</p>
              <p>📞 +1 216-551-2999 / +86 15121041217</p>
              <p>🏠 North Residential Village, Cutter, 1101 Juniper Rd OH, The United States</p>
              <p>🌐 linkangzhan.com</p>
              <p>🔗 UnityZhan</p>
              <p>🆔 0009-0003-5357-1894</p>
              <p>🖼️ https://huggingface.co/Junity</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex flex-col justify-center mr-4 space-y-[-1]">
              {Array.from("EDUCATION").map((char, index) => (
                  <span key={index} className="text-2xl font-semibold leading-extra-tight">{char}</span>
              ))}
            </div>
            <div>
              <h3 className="font-bold">Undergraduate of Computer Science</h3>
              <p>Case Western Reserve University</p>
              <p>📅 August 2023 - Ongoing</p>
              <p>🏅 GPA 4.0</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex flex-col justify-center mr-4 space-y-[-1]">
              {Array.from("EXPERIENCE").map((char, index) => (
                  <span key={index} className="text-2xl font-semibold leading-extra-tight">{char}</span>
              ))}
            </div>
            <div>
              <h3 className="font-bold">Startup - tossto.ai</h3>
              <p>TossTo</p>
              <p>📅 November 2023 - Ongoing</p>
              <p>📍 Berkeley, California</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Chief Technology Officer (CTO) for the team.</li>
                <li>We receive investment from many famous company such as Zhenfund and Amazon.</li>
                <li>Spearheaded the architectural design and technology stack selection for TossTo (tossto.ai).</li>
                <li>
                  Solely responsible for coding both the front-end and back-end components of our initial product demo.
                </li>
                <li>
                  Proactively led a team of three members in evolving the product from its initial demo to subsequent
                  iterations.
                </li>
              </ul>
              <h3 className="font-bold mt-4">Lead Software Architect & Deep Learning Engineer</h3>
              <p>SolarisAI</p>
              <p>📅 Feb 2024 - Ongoing</p>
              <p>📍 Mountain View, CA & Online</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  This product focuses on delivering player NFTs and digital assets through AI-powered conversations and
                  group chat games in the web3 space.
                </li>
                <li>
                  Responsible for designing the product&apos;s core architecture, writing the backend code, and modeling and
                  utilizing neural network models such as large language models, diffusion models, and acoustic models.
                </li>
                <li>The product has secured a commitment of $1 million in investment.</li>
              </ul>
              <h3 className="font-bold">Large Language Model Algorithm/Agent Engineer</h3>
              <p>AutoGame</p>
              <p>📅 November 2023 – Ongoing * Online</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Oversaw and managed team code reviews.</li>
                <li>Led the development of Agents and the design of a multi-agent framework.</li>
                <li>Tasked with backend development and ongoing maintenance.</li>
                <li>Spearheaded the development of diffusion models and large language models.</li>
                <li>Served as a Research Fellow within the company.</li>
              </ul>
              <h3 className="font-bold mt-4">Large Language Model Algorithm Engineer (intern)</h3>
              <p>DeepWisdom</p>
              <p>📅 August 2023 – November 2023 * Online</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Initiated, developed, and maintained Standard Operating Procedures (SOPs) for creating Role-play Large Language Models (LLMs).</li>
                <li>Trained Large Language Models, encompassing pretraining, Supervised Fine-Tuning (SFT), and Reinforcement Learning from Human Feedback (RLHF).</li>
                <li>Conducted tests on various architectures of Large Language Models.</li>
                <li>Collected user feedback and systematically transformed chat histories into training data for continuous improvement.</li>
              </ul>
              <h3 className="font-bold mt-4">Machine Learning Engineer (intern)</h3>
              <p>Fintelics</p>
              <p>📅 June 2022 – Sept 2022 * Online</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Contributed to code development in AI image generation, focusing on algorithms such as Conditional Generative Adversarial Networks (CGAN) and Diffusion models.</li>
                <li>Conducted tests to compare performance metrics across different algorithms.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex flex-col justify-center mr-4 space-y-[-1]">
              {Array.from("PROJECTS").map((char, index) => (
                  <span key={index} className="text-2xl font-semibold leading-extra-tight">{char}</span>
              ))}
            </div>
            <div>
              <h3 className="font-bold">CharaCraft</h3>
              <p>DeepWisdom</p>
              <p>📅 October, 2023 - Ongoing</p>
              <p>Position: Initiator § JunityZhan/CharaCraft-AI</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>CharaCraft offers a standardized methodology for generating any character across various IPs.</li>
                <li>Capable of generating complete character sets from a single website link, encompassing entire IPs.</li>
                <li>Positioned as the ultimate tool for role-playing AI, CharaCraft integrates an open-source model with advanced technologies like ChatGPT/Claude, ChatHaruhi, and Scrapy.</li>
                <li>Provides a more user-friendly approach to role-play model generation compared to Character.AI, requiring only a link to the character’s source (e.g., novel, wiki) instead of text input.</li>
              </ul>

              <h3 className="font-bold mt-4">Roleplay Large Language Model</h3>
              <p>SolarisAI, AWS, DeepWisdom, Baichuan AI</p>
              <p>📅 April, 2023 - Ongoing</p>
              <p>Position: Project Leader</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Initiated as a completely free and volunteer-driven project.</li>
                <li>Aimed to bring anime characters to life in our world, achieving State-of-the-Art (SOTA) in character worldview representation.</li>
                <li>Collected data from over 1,000,000 dialogues with AI on our website.</li>
                <li>Developed a user-driven data annotation platform for data cleansing.</li>
                <li>Released the first stage of the pre-trained world model as open-source.</li>
              </ul>

              <h3 className="font-bold mt-4">Chat-Haruhi</h3>
              <p>SenseTime</p>
              <p>📅 May, 2023 - Ongoing</p>
              <p>Position: Member</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Participate in the &apos;Reviving Anime Characters in Reality via Large Language Models&apos; project, mainly in the data collection part.</li>
                <li>Detailed in the publication: arXiv:2308.09597.</li>
                <li>This research-based project stands out for its ability to function without the need for additional training.</li>
                <li>Capable of reviving an anime character in just one minute, provided the corresponding corpus is available.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex flex-col justify-center mr-4 space-y-[-1]">
              {Array.from("Publication").map((char, index) => (
                  <span key={index} className="text-2xl font-semibold leading-extra-tight">{char}</span>
              ))}
            </div>
            <div>
              <ul className="list-disc ml-5 space-y-1">
                <li>C. Li, Z. Leng, C. Yan, et al., “Chatharuhi:
                  Reviving anime character in reality via\n
                  large language model,” 2023. arXiv: 2308.\n
                  09597 [cs.CL]</li>
                <li>L. Zhan, D. Ye, X. Qiu, and Y. Cen, “Discovery of stable hybrid organic-inorganic
                  double perovskites for high-performance
                  solar cells via machine-learning algorithms
                  and crystal graph convolution neural network method,” 2023. arXiv: 2308.00490
                  [cond-mat.mtrl-sci].</li>
                <li>M. Yuan, Y. Zheng, C. Chen, and L. Zhan,
                  “Exploration of dataset COVID-19’s impact on airport traffic,” in International
                  Conference on High Performance Computing and Communication (HPCCE 2021), Y.
                  Wang and S. Chen, Eds., ser. Society of
                  Photo-Optical Instrumentation Engineers
                  (SPIE) Conference Series, vol. 12162,
                  Feb. 2022, 1216219, p. 1 216 219. DOI:
                  10.1117/12.2628224.
                </li>
              </ul>
            </div>
          </div>
        </div>

  );
};

export default CV;
