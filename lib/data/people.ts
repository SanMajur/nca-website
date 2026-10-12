export type Person = {
  name: string;
  role: string;
  photo?: string; // add later, e.g. "/people/gieth-kon.jpg"
  bio?: string[]; // add later, e.g. "Eng. Gieth Kon Mathiang is the Director General of the NCA..."
};

// Source: legacy NCA site. Confirm names and titles with the NCA before launch.
export const board: Person[] = [
  {
    name: 'Tejwok Simon Ajak',
    role: 'Chairperson of the Board',
    photo: '/people/board/hon.tejwok-simon-ajak.jpg',
    bio: [
      'Hon. Eng. Tejwok Simon Ajak is currently appointed by President Salva Kiir as the Chairman of the Board of Directors of the National Communication Authority (NCA), following the expiry of the previous board\’s term.  ',
      'He holds a Bachelor\’s degree in Software Engineering and Application Development from Buganda University in Uganda, and a Master\’s degree in Information Security from Kenya Methodist University.',
      'Before taking on this leadership role at the NCA, Eng. Ajak served in several technical and managerial ICT positions: ICT Manager at Cambridge International School in Juba, IT Manager at Alpha Commercial Bank, and Head of the IT Department at Nile Commercial Bank. ',
      'He also holds roles in public service; he is Deputy Chairperson of E-Government at the Ministry of Information, Communication Technologies and Postal Service, and serves as Terminals Manager at Juba International Airport.',
      'As Chairman of the NCA Board, he provides oversight and strategic direction for national communications policy, regulatory implementation, and infrastructure development. His experience across both ICT management and public service is seen as instrumental in steering the Authority’s goals in improving connectivity, enhancing security, and ensuring reliable regulation of the telecommunications and broadcasting sectors in South Sudan.',
    ],
  },
  {
    name: 'June Malet Kuol',
    role: 'Deputy Chairperson',
    photo: '/people/board/hon-june.jpg',
    bio: [
      'Hon. June Malet Kuol serves as the Deputy Chairperson of the Board of Directors of the National Communication Authority (NCA), where she plays a key leadership role in guiding the Authority’s regulatory and policy direction. ',
      'In addition to her responsibilities at the NCA, she is also a Member of the Transitional National Legislative Assembly representing Jonglei State under the SPLM. With her combined legislative and regulatory experience, Hon. Kuol contributes to shaping national strategies for improving digital infrastructure, enhancing consumer protection, and ensuring equitable access to communications services. Her position as Deputy Chairperson strengthens the governance of the NCA by linking policymaking with oversight and by advancing the Authority’s vision of a secure, innovative, and inclusive communications sector that supports South Sudan’s development.',
      'Hon. June is a teacher by profession and a member of the SPLM Women Association. She has done work with numerous reputable local and international organizations serving refugees in camps. She has led the Economic and Gender committees respectively in the Jonglei State Assembly.',
    ],
  },
  {
    name: 'Eng. Gieth Kon Mathiang',
    role: 'Secretary to the Board',
    photo: '/people/board/eng.gieth-kon.jpg',
    bio: [
      'Eng. Gieth Kon Mathiang is the Director General of the National Communication Authority (NCA), Republic of South Sudan. Reappointed by H.E. President Salva Kiir Mayardit in September 2026, he brings leadership experience and a strong understanding of telecommunications regulation and the ICT sector, having previously served as NCA Director General and as a member of the Authority\’s Board of Directors. He provides strategic leadership in implementing the NCA\’s mandate, strengthening regulatory oversight, expanding connectivity, protecting consumers, and advancing digital transformation in South Sudan. He also serves as Chairperson of the East African Communications Organization (EACO) for the 2025–2027 term.',
    ],
  },
  {
    name: 'Hon. Ajou Luol Akuei',
    role: 'Board Member',
    photo: '/people/board/hon.ajou-luol-akuei.jpeg',
    bio: [
      'Hon. Ajou Luol Akuei is the Managing Director of the South Sudan Media Authority and a member of the Board of Directors of the National Communications Authority (NCA). With over 15 years of experience in journalism, media regulation, public administration, communication, and governance, he brings valuable expertise in regulatory oversight, institutional leadership, and public engagement.',
      'He holds a Bachelor of Arts in Mass Communication from the University of Juba and has served in editorial leadership, government communication, anti-corruption education, and international media production, including with Al Jazeera Media Network. His experience in media governance and regulation contributes to the NCA Board’s oversight, strategic direction, and commitment to transparent, accountable, and effective communications regulation in South Sudan.',
    ],
  },
  {
    name: 'Gen. Akech Tong Aleu',
    role: 'Board Member',
    photo: '/people/board/gen.akech-tong-aleu.jpg',
    bio: [
      'Gen. Akech Tong Aleu is a member of the Board of Directors of the National Communications Authority (NCA), Republic of South Sudan. He is a senior public servant with extensive experience in public administration, security, and government leadership. Throughout his career, he has held several senior positions, including Governor of the former Tonj State, Deputy Governor of Warrap State, and Undersecretary for Veterans Affairs at the Ministry of Defence and Veterans Affairs. His experience in public service and institutional leadership contributes to the NCA Board’s governance, strategic oversight, and efforts to strengthen the telecommunications regulatory sector in South Sudan.',
    ],
  },
  {
    name: 'Hon. Malual Tap Dieu',
    role: 'Board Member',
    photo: '/people/board/hon.malual-tap-dieu.jpeg',
    bio: [
      'Hon. Malual Tap Dieu is the First Undersecretary at the Ministry of Finance and Planning of the Republic of South Sudan and a member of the Board of Directors of the National Communications Authority (NCA). He brings government financial administration and public financial management experience to the Board, contributing to financial oversight, institutional accountability, and the Authority’s long-term sustainability. His appointment to the NCA Board strengthens coordination between the telecommunications regulatory sector and the national government’s financial management institutions.',
    ],
  },
  {
    name: 'Hon. Mary James Ajith',
    role: 'Board Member',
    photo: '/people/board/hon.mary-ajith.jpg',
    bio: [
      'Hon. Mary James Ajith Awuol is a distinguished South Sudanese legal expert and public servant who has recently been appointed as a Board Member of the National Communication Authority (NCA). At the same time, she continues to serve as the Undersecretary in the Ministry of Justice & Constitutional Affairs, where she brings her expertise to bear on legislative and constitutional reform.',
      "Appointed by the President to oversee communications regulation, she represents the Justice Ministry’s perspective on matters of policy, consumer protection, and media regulations as part of the NCA board's nine-member oversight team",
    ],
  },
  {
    name: 'Mr. Abraham Anyang Nyok',
    role: 'Board Member',
    photo: '/people/board/mr.abraham-anyang-nyok.jpeg',
    bio: [
      'Mr. Abraham Anyang Nyok is a distinguished South Sudanese professional recognized for his integrity, leadership, and commitment to public service. Over the years, he has played a vital role in strengthening institutional capacity and promoting development initiatives aimed at improving governance and service delivery in South Sudan.',
      'With a strong background in public administration and policy implementation, Mr. Nyok has contributed to various national development programs, focusing on enhancing transparency, accountability, and efficiency within government institutions. His expertise in strategic planning and organizational management has been instrumental in driving reforms and fostering collaboration among stakeholders.',
      'As a Board Member of the National Communication Authority (NCA), Mr. Nyok brings valuable insights and guidance to the organization, helping to shape policies that support the growth of the telecommunications sector and ensure equitable access to communication services across South Sudan.',
    ],
  },
  {
    name: 'Hon. Arok Dut Arok',
    role: 'Board Member',
    photo: '/people/board/hon.arok-dut-arok.jpg',
    bio: [
      'Hon. Arok Dut Arok serves as Undersecretary of Information at the Ministry of Information, Communication Technology and Postal Services of the Republic of South Sudan. In his role, he contributes to government information management, public communication, and coordination within the information sector. His engagement with the National Communication Authority (NCA) reflects the importance of collaboration between government institutions in advancing effective communication, strengthening public information services, and supporting South Sudan’s digital transformation agenda.',
    ],
  },
];

export const executive: Person[] = [
  {
    name: 'Eng. Gieth Kon Mathiang',
    role: 'Director General',
    photo: '/people/board/eng.gieth-kon.jpg',
    bio: [
      'He is responsible for the overall management and direction of the organization.',
      'He has extensive experience in telecommunications and information technology.',
    ],
  },
  {
    name: 'Eng. Papiti Okwaci Nyilek',
    role: 'Director, Technical Services',
    photo: '/people/executive/Papiti.jpg',
    bio: [
      'Eng. Papiti boasts an impressive career spanning almost five decades in the telecommunications sector, marked by significant academic achievements and diverse leadership roles. He laid his academic foundation by earning a Bachelor of Science (BSc) in Electrical Engineering, specializing in Telecommunications & Electronics, from the Faculty of Engineering, Shoubra, Zagazig University, Cairo, Egypt in 1986.',
      "Following this, he pursued a Master of Science (MSc) in Operational Telecommunications from Coventry University in collaboration with Cable & Wireless College, England, United Kingdom. Eng. Papiti's extensive professional experience began in March 1987 at the Sudan Sea Ports Corporation in Port Sudan, Republic of Sudan, where he held various key positions, including Project Manager for the Electrical Engineering Department, Information Systems Department and Projects Department until July 2011.",
      'During this period, he also contributed to academia, serving as a Lecturer in the Electrical Engineering Department, Faculty of Engineering, at Red Sea University, Republic of Sudan from 1999 to 2007. Concurrently, from 1999 to 2001, he lectured in the Computer Science Department at Port Sudan Ahlia College, also in the Republic of Sudan.',
      'From November 2013 to May 2017, Eng. Papiti moved to Huawei Technologies Co. Ltd (Huawei Technologies Gulf), based in their South Sudan Office in Juba where he served as a Senior Solutions Manager. His career then led him to the South Sudan International Gateway Services (SSIGS) where he held the position of Chief Technical Officer (CTO) from 2017 to 2020, followed by an appointment as Chief Executive Officer (CEO) from 2020 until 2023.',
      " In January 2023, following a presidential order that assigned the management of the South Sudan International Gateway to the National Communication Authority (NCA), he assumed the role of Acting Director, International Gateway Services, at the NCA, a position he held until October 2023. Currently, Eng. Papiti serves as the Director for Technical Services at the National Communication Authority (NCA), a role he commenced in October 2023. In this capacity, he is responsible for overseeing the organization's technical operations and service delivery, ensuring the efficient functioning of all technical processes, systems and teams.",
    ],
  },
  {
    name: 'Eng. Dut Acol de Dut',
    role: 'Director, Spectrum Management',
    photo: '/people/executive/Dut.jpg',
    bio: [
      'Eng. Dut is an accomplished professional with over 25 years of experience in the Telecommunications and ICT sector, specializing in spectrum management, regulatory policy development, and international ICT representation.',
      ' He has played a pivotal role in shaping South Sudan\’s communications landscape, combining technical expertise with strong leadership and strategic planning skills. His academic background includes a Master\’s degree in Electronics Engineering from Monmouth University, USA, and a Bachelor\’s degree in Electronics Engineering from V.R. College of Engineering, India.',
      'Currently serving as the Director of Spectrum Management at the National Communications Authority since 2020, he oversees three departments and a team of 12 engineers. In this role, he is responsible for policy formulation, licensing advisory, and spectrum regulation.',
      'He also represents South Sudan in major international forums, including the ITU World Radiocommunications Conference (WRC) and the African Telecommunications Union (ATU). Previously, from 2015 to 2020, he held the position of Spectrum Manager at NCA, where he led national efforts in frequency assignments, radio monitoring, and cross-border spectrum coordination.',
      'He was instrumental in developing South Sudan\’s National Frequency Allocation Table and trained local engineers in modern spectrum management techniques. From 2012 to 2015, he served as the Acting Director of the IT Department at the Ministry of Telecommunications and Postal Services. In this role, he coordinated key e-government projects, participated in ICT policy formulation, and facilitated international training programs for ministry engineers.',
      'He also engaged in regional ICT integration initiatives under the Northern Corridor projects. Earlier, as an ICT Engineer in the Ministry from 2008 to 2012, he designed and implemented foundational ICT infrastructure for the Government of South Sudan. His work included installing satellite and microwave Internet links, setting up video conferencing systems, MS Exchange servers, and laying plans for a fiber optic-based Metropolitan Area Network (MAN) across Juba. Before returning to South Sudan, he worked in the United States with Telcordia Technologies, where he held various Systems Engineering roles between 2001 and 2008.',
      'He contributed to telecom OSS solutions such as TIRKS and TEAMS, performing systems design, interoperability testing, and acting as a Subject Matter Expert. He also worked as Engineering Product Manager at 3COM in Salt Lake City, managing the design and testing of networking products including Ethernet LAN and Wi-Fi. His earlier experience includes working as a Telecom Transmission Engineer at USWest Communications, where he designed SONET and DWDM systems and ensured telecom network performance and reliability. He also worked as a Graduate Assistant at Monmouth University, assisting in wireless communication research and lab instruction, and as a Hardware Design Engineer at Daewoo Electronics in South Korea, where he developed television models and oversaw manufacturing and compliance testing. Technically proficient, he is skilled in tools like MATLAB, LABVIEW, PADS, MS Exchange, and Windows Server environments. He has hands-on experience with programming languages such as C, C++, FORTRAN, and UNIX, and holds certifications in networking and systems management including CCNA',
    ],
  },
  {
    name: 'Bullen Alier Ajak',
    role: 'Director, Regulations & Enforcement',
    photo: '/people/executive/Bullen.jpg',
    bio: [
      'Mr. Bullen Alier Ajak is the Director for Regulations and Enforcement at NCA, where he plays a vital role in ensuring that the organization adheres to regulatory frameworks and compliance standards. With extensive experience in regulatory affairs, law enforcement, and policy implementation, Mr. Ajak is dedicated to safeguarding the integrity of NCA’s operations by enforcing industry regulations and promoting a culture of compliance throughout the organization. As Director for Regulations and Enforcement, Mr. Ajak is responsible for overseeing the development, implementation, and enforcement of policies and procedures that ensure NCA’s activities are in full compliance with local, national, and international laws and regulations. He works closely with legal teams, regulatory bodies, and other departments within NCA to ensure that the organization’s operations remain aligned with applicable laws, industry standards, and best practices.',
    ],
  },
  {
    name: 'Biong Deng',
    role: 'Director, Finance',
    photo: '/people/executive/biong.jpg',
    bio: [
      "Mr. Biong Deng is the Director of Finance at NCA, where he plays a pivotal role in overseeing the financial health and strategic management of the organization. With a robust background in finance, accounting, and strategic financial planning, Mr. Biong brings a wealth of experience to his leadership position, guiding NCA's financial operations toward sustained growth and stability.",
    ],
  },
  {
    name: 'Daniel Deng Madut',
    role: 'Director, Human Resources',
    photo: '/people/executive/deng-daniel.jpeg',
    bio: [
      'Daniel Deng Madut is a seasoned Human Resources professional with over 15 years of experience spanning both national and international organizations. He currently serves as the Director for Human Resources at the National Communication Authority (NCA), a position he assumed on 27th April 2026. Prior to his current role, Deng served as Assistant Director for Human Resources at NCA from 1st October 2023 to 27th April 2026, where he played a key role in strengthening institutional HR systems and workforce management. Before joining NCA, he worked with World Vision International as a Human Resources Coordinator from 1st October 2021 to 30th September 2023, contributing to strategic HR planning and staff development initiatives. Earlier in his career, he served as a Human Resources & Administration Officer with the South Sudan Red Cross Society from 1st July 2018 to September 2021, and previously as a Human Resources Officer with World Vision International from 1st June 2012 to 31st August 2014. ',

      'Daniel Deng holds a Master of Business Administration (MBA) with a specialization in Human Resources Management from the University of Juba. He also earned a Bachelor\’s degree in Human Resources Management from Kampala International University in Uganda. In addition, he holds an advanced specialized certificate in Payroll and Benefits Management from the Uganda Management Institute (UMI). ',

      'With a strong academic foundation and extensive hands-on experience, Daniel Deng Madut has built a distinguished career in human resource management, marked by his commitment to organizational excellence, workforce development, and effective leadership.',
    ],
  },
  {
    name: 'Eng. Chol Joseph Mayen Dut',
    role: 'Director, Research and Planning',
    photo: '/people/executive/Chol.jpg',
    bio: [
      "Eng. Chol Joseph Mayen Dut serves as the Director of Research and Planning at the National Communication Authority (NCA), where he plays a pivotal role in shaping the nation's telecommunications landscape.",
      'With a strong background in telecommunications engineering and regulatory affairs, Eng. Chol is responsible for conducting in-depth research, analyzing industry trends, and developing strategic plans that guide the NCA\’s initiatives and policies.',

      'He collaborates closely with stakeholders, including government agencies, industry players, and international partners, to ensure that the NCA’s research and planning efforts align with national development goals and global best practices.',
    ],
  },
  {
    name: 'Mr. Dada Isaac Lemi',
    role: 'Director, Corporate Affairs',
    photo: '/people/executive/Dada.jpg',
    bio: [
      'Dada Isaac Lemi is an experienced and versatile professional with a strong background in administration, logistics, and corporate affairs. He currently serves as Director of Corporate Affairs, where he leads strategic communication, stakeholder engagement, and the promotion of the institution’s public image and corporate identity.',

      'Prior to his current role, he served as Director for Administration and Logistics, overseeing key operational functions and ensuring the effective management of resources, facilities, and institutional support services. During his tenure, he played an important role in enhancing operational efficiency and strengthening internal systems.',

      'With his transition into corporate affairs, Dada Isaac Lemi brings a unique blend of operational insight and strategic communication expertise. He is committed to fostering strong relationships with stakeholders, enhancing transparency, and positioning the institution to effectively deliver on its mandate.',
    ],
  },
  {
    name: 'Lilian Achol Aru Maan',
    role: 'Director for Administration & Logistics',
    photo: '/people/executive/Lillian.jpg',
    bio: [
      'Lilian Achol Aru Maan is a dedicated and results-driven professional with extensive experience in human resources, administration, and organizational operations. She previously served as Director for Human Resources, where she was instrumental in developing and implementing HR policies, enhancing staff performance systems, and promoting a productive work environment. ',

      'In her current role as Director for Administration and Logistics, Lilian Achol oversees the coordination of administrative functions and logistical operations, ensuring efficiency, accountability, and seamless support to institutional activities. She is responsible for managing resources, streamlining operational processes, and strengthening internal systems to align with organizational goals. ',

      'With a strong background in both HR and administration, she brings a balanced approach to leadership, combining people management with operational excellence. Her commitment to efficiency, structure, and service delivery continues to contribute to the overall performance and sustainability of the institution.',
    ],
  },
];

export const advisors: Person[] = [
  {
    name: 'Prof.Eng. Meshack Madol',
    role: 'Advisor on Technical Matters',
    photo: '/people/advisors/madol.jpeg',
    bio: [
      'A veteran electrical engineer, soldier, academic and public-sector leader with a career that spans nearly five decades.',
      'After earning a Master of Science in Electrical Engineering from the University of Odessa Ukraine in 1977, he returned to (then) Sudan and joined the Ministry of Information in 1978 as a transmitter engineer for Radio Juba. ',

      'On 22nd January 1984, Prof. Madol joined the liberation struggle where he founded Radio SPLA which provided essential frontline communications. He was also nicknamed “Vasco da Gama of the SPLA”  for his contributions during this time.',

      'For 15 years from 1993, he lectured in Electrical Engineering at Moi University, Kenya where he attained the title of Professor.',
      'After returning to South Sudan in 2009, Prof Madol was appointed Director General of Telecom and Postal Services, a post he held through 2014. During this tenure he championed the creation of the Samuel Yunis ICT Institute and working with the ITU laid the groundwork for establishing the National Communication Authority(NCA).',

      'Prof. Madol served as Technical Services Advisor at South Sudan Gateway before joining the NCA in 2023 as Advisor for Technical Services. ',
      'His blend of seasoned leadership, intellectual excellence and extensive regulatory experience continues to shape South Sudan’s communications sector.',
    ],
  },
  {
    name: 'Eng. Virginio Kenyi Lomena',
    role: 'Advisor for Admin, Finance & HR',
    photo: '/people/advisors/virginio.jpeg',
    bio: [
      'Eng. Virginio Kenyi Lomena, born in Loa Boma, Pageri Payam, Magwi County in Eastern Equatoria State, is a seasoned technocrat and veteran with over 41 years of service in telecommunications, civil administration, and public sector leadership.',

      'He earned his Diploma in Telecommunication Engineering from the Telecommunication Institute in Khartoum, Sudan in 1984. He began his career that same year as Head of the Outside Plant Section in Rumbek, later serving as Department Engineer in Wau and Khartoum until 1989.',
    ],
  },
  {
    name: 'Eng. Simon Philip Ali',
    role: 'Advisor for Research & Development',
    photo: '/people/advisors/simon.jpg',
    bio: [
      'Eng. Simon graduated in 1979 from the Telecommunications Institute in Khartoum, specializing in telephone-network engineering. ',
      'He began his career as a telecom engineer in Gedaref, eastern Sudan, where he served for four years before being transferred to Wau. He was recalled to Gedaref in 1989 to work as a network engineer and later promoted as a supervisor in the Operating Maintenance Center (OMC) now Network Operations Center (NOC) where he oversaw network performance across Sudan and Southern Sudan until 2005.',

      'Following the Comprehensive Peace Agreement, he returned home on 1 April 2006 to help build South Sudan’s fledgling telecom sector, serving as the network coordinator between the Government of South Sudan and mobile operators in the Ministry of Telecom and Postal Services. ',
      ' In 2014 he was seconded with four fellow engineers to establish the National Communication Authority (NCA) and was appointed Director of Planning and Business Development in 2017. ',

      'Among numerous regional and international engagements, Eng. Simon Philip Ali represented South Sudan in the One Network Area initiative and at ITU Telecom Day, championing the country’s rapid telecom growth. ',
      'Notably, he spoke in Sri Lanka in 2012 on the adoption of South Sudan’s country code +211, and he later played a key role in the national numbering plan selecting the 09 mobile prefix instead of the 07 mobile prefixes being used in the region. ',
      'His other achievements include the drafting and translation of the telecommunication act of South Sudan.',
      'In 2024 he was appointed Advisor for Research and Planning, continuing to guide policy and technical development within the NCA.',
    ],
  },
  {
    name: 'Eng. Awadia James Daw',
    role: 'Advisor for Spectrum Management',
    photo: '/people/advisors/awadia.jpeg',
    bio: [
      'Eng. Awadia James is an accomplished telecommunications engineer currently serving as an Advisor for telecommunications Engineering at the National Communication Authority of South Sudan. In this role, she plays a pivotal part in shaping regulatory frameworks and policy development for South Sudan’s telecommunications sector.',

      'With a career spanning both Sudan and South Sudan, Awadia brings extensive expertise in telecom operations, regulatory affairs and corporate strategy. She began her journey in Sudan before moving to Juba, where she joined Zain South Sudan in 2011 as a Wholesale Team Leader, managing key telecom partnerships and wholesale operations. She later transitioned to Gemtel Ltd, a telecommunications operator in South Sudan, where she advanced to the role of Chief Administration, Regulatory and Corporate Affairs Officer.',

      'Eng. Awadia holds a Master’s degree in Telecommunications Engineering from Sudan University of Science and Technology. Her leadership and technical expertise continue to drive progress in South Sudan’s telecommunications industry.',
    ],
  },
  {
    name: 'Othow Akol Adiang',
    role: 'Advisor for Finance',
    photo: '/people/advisors/Adiang.jpg',
    bio: [
      'Othow Akol Adiang is an accomplished finance expert with extensive experience in public sector financial management and institutional leadership. He served as the Director of Finance at the National Communications Authority (NCA), where he was responsible for overseeing financial planning, budgeting, reporting, and ensuring compliance with regulatory and accountability standards. During his tenure, he played a key role in strengthening financial controls, improving transparency, and supporting the Authority’s operational efficiency.',
      'In his current role as Advisor for Finance, Othow Akol Adiang provides high-level strategic advice on financial matters, contributing to policy formulation, fiscal planning, and sustainable resource management. He works closely with senior leadership to guide decision-making processes, enhance financial governance frameworks, and ensure alignment with national and institutional objectives. His expertise continues to be instrumental in driving financial stability and long-term growth within the organization.',
    ],
  },
  {
    name: 'Hon. Emmanual Lubari',
    role: 'Advisor for Youth & Innovation',
    photo: '/people/advisors/emma.jpeg',
    bio: [
      'Hon. Emmanual Lubari serves as an Advisor for Youth and Innovation, offering strategic guidance on youth empowerment, digital innovation, and capacity development initiatives.',
    ],
  },
];
