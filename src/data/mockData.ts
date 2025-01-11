// Mock data for FCC dockets and documents
export const mockDockets = [
  {
    name: "24-240",
    description_display: "WTB and OET Seek Comment on NextNav Petition for Rulemaking",
    date_proceeding_created: "2024-01-15T00:00:00.000Z",
    bureau: {
      name: "Wireless Telecommunications Bureau",
      code: "WTB"
    }
  },
  {
    name: "18-242",
    description_display: "ATT Lower Keys 214  final 080618",
    date_proceeding_created: "2024-01-15T00:00:00.000Z",
    bureau: {
      name: "Wireless Telecommunications Bureau",
      code: "WTB"
    }
  },
  {
    name: "17-54",
    description_display: "FCC 214 Transfer Filing 2.22.17",
    date_proceeding_created: "2024-01-15T00:00:00.000Z",
    bureau: {
      name: "Wireless Telecommunications Bureau",
      code: "WTB"
    }
  },
  {
    name: "21-390",
    description_display: "211011 L3T WA Sec 214 Application",
    date_proceeding_created: "2024-01-15T00:00:00.000Z",
    bureau: {
      name: "Wireless Telecommunications Bureau",
      code: "WTB"
    }
  },
  {
    name: "17-291",
    description_display: "GetGo - FCC VoIP Application - Public Version",
    date_proceeding_created: "2024-01-15T00:00:00.000Z",
    bureau: {
      name: "Wireless Telecommunications Bureau",
      code: "WTB"
    }
  },
  {
    name: "17-265",
    description_display: "2017 09 29 Verizon Sec 214 App (49 WCs 4 DS0s)",
    date_proceeding_created: "2024-01-15T00:00:00.000Z",
    bureau: {
      name: "Wireless Telecommunications Bureau",
      code: "WTB"
    }
  },
];

export const mockDocuments = {
  petitions: [
    {
      id: 'p1',
      title: "NextNav's Petition for Rulemaking",
      content: `<h2>NextNav's Petition for Rulemaking</h2>

<p><b><u>Executive Summary:</b></p></u>

<p>This petition, submitted by NextNav Inc. to the Federal Communications Commission (FCC), advocates for the reconfiguration of the 902-928 MHz band, known as the "Lower 900 MHz Band," to facilitate the deployment of a next-generation terrestrial Positioning, Navigation, and Timing (PNT) network. This network is intended to complement and back up the U.S. Global Positioning System (GPS), addressing its vulnerabilities and coverage limitations, particularly indoors and in urban canyons. The proposal also seeks to integrate this PNT network with 5G technologies, thereby enhancing mobile broadband capacity and ensuring national security, economic resilience, and public safety.</p>

<p><b><u>Key Issues and Positions:</p></b></u>

<p><b>1.	Need for Terrestrial PNT Network:</p></b>

<div style="margin-left:20px;">-	GPS, while essential, has vulnerabilities such as weak indoor signals, susceptibility to jamming and spoofing, and limited effectiveness in urban environments.</div>
<div style="margin-left:20px;">-	The economic impact of GPS on the U.S. economy is significant, and its potential loss could cost up to $1 billion per day.</div>

<p><b>2.	Underutilization of the Lower 900 MHz Band:</p></b>

<div style="margin-left:20px;">-	The current band plan and technical rules are outdated, limiting the band's use of modern technologies like 5G.</div>
<div style="margin-left:20px;">-	The existing spectrum is underutilized due to service-specific restrictions established decades ago.</div>

<p><b>3.	Integration with 5G:</p></b>

<div style="margin-left:20px;">-	The proposal includes using 15 megahertz of the Lower 900 MHz Band for a frequency-division-duplex (FDD) spectrum to support both terrestrial PNT and 5G broadband.</div>
<div style="margin-left:20px;">-	This integration would allow the PNT network to leverage existing 5G infrastructure, reducing costs and accelerating deployment.</div>

<p><b><u>Core Arguments:</p></b></u>

<p><b>Economic and Security Imperatives:</p></b>

<div style="margin-left:20px;">-	The terrestrial PNT network is crucial for national security and economic stability, providing a reliable backup to GPS.</div>
<div style="margin-left:20px;">-	The integration with 5G will enhance the U.S. competitiveness in global markets and support critical infrastructure sectors.</div>

<p><b>Technical Feasibility and Innovation:</p></b>

<div style="margin-left:20px;">-	NextNav's expertise in terrestrial PNT technology positions it uniquely to deploy a nationwide network that meets these needs.</div>
<div style="margin-left:20px;">-	The use of 5G standards ensures compatibility with a wide range of devices and facilitates rapid adoption.</div>

<p><b>Regulatory and Policy Alignment:</p></b>

<div style="margin-left:20px;">-	The proposed changes align with FCC's objectives to maximize spectrum efficiency and support technological innovation.</div>
<div style="margin-left:20px;">-	The petition outlines a path for the FCC to update rules without requiring taxpayer funding or new legislation.</div>

<p><b><u>Author's Position and Suggested Solutions:</p></b></u>

<p>NextNav proposes a comprehensive rebanding and rule modification strategy to create a 15-megahertz block within the Lower 900 MHz Band. This would involve:</p>
<div style="margin-left:20px;">- Updating the band plan to support a 5-megahertz uplink and a 10-megahertz downlink.</div>
<div style="margin-left:20px;">- Revising technical rules to allow flexible use at full macro power limits for PNT and mobile broadband.</div>
<div style="margin-left:20px;">- Arranging a spectrum swap to consolidate NextNav's current holdings into a nationwide license.</div>
<div style="margin-left:20px;">- Ensuring that federal operations and incumbent licensees are protected.</div>

<p><b><u>Technical Requirements:</p></b></u>

<p>The proposal highlights the technical requirements for deploying the NextGen PNT network:</p>
<div style="margin-left:20px;">-	5G PRS Utilization: Use of 5G positioning reference signals (PRS) for accurate time-of-arrival (ToA) measurements to determine location and timing.</div>
<div style="margin-left:20px;">-	Network Synchronization: Tight synchronization of base stations to ensure accurate positioning and timing.</div>
<div style="margin-left:20px;">-	Integration with Existing Infrastructure: Leveraging existing 5G networks to reduce deployment costs and enhance coverage.</div>
<div style="margin-left:20px;">-	Device Compatibility: Ensuring compatibility with standard 5G chipsets to facilitate widespread adoption.</div>

<p><b><u>Conclusion:</p></b></u>

<p>Modernizing the Lower 900 MHz Band will enable the deployment of a robust terrestrial PNT network that complements and backs up GPS, enhancing the nation's mobile broadband capacity. This proposal aligns with national security and economic goals and supports the FCC's mission to optimize spectrum use. By adopting this plan, the FCC can address urgent public safety needs and promote private-sector innovation, ensuring this valuable spectrum resource's highest and best use.</p>
`,
      originalUrl: "https://www.fcc.gov/ecfs/document/10416238018537/1",
      summaryUrl: "/docket/24-240/petition-summary"
    }
  ],
  fccDocuments: [
    {
      id: 'f1',
      title: "FCC Seeks Comment on NextNav Petition for Rulemaking",
      content: `<h2>WTB and OET Seek Comment on NextNav Petition for Rulemaking</h2>

<p><b><u>Executive Summary</p></b></u>

<p>The Federal Communications Commission (FCC) released a Public Notice on August 6, 2024, seeking comment on a Petition for Rulemaking filed by NextNav Inc. (NextNav). The petition proposes reconfiguring the 902-928 MHz band (Lower 900 MHz Band) to enable the deployment of a 5G terrestrial Positioning, Navigation, and Timing (PNT) network that complements and backs up the U.S. Global Positioning System (GPS). NextNav's proposal includes creating a new band plan, updating FCC rules, and establishing a Terrestrial Positioning, Navigation, and Timing Service (TPNT). The FCC's Wireless Telecommunications Bureau (WTB) and Office of Engineering and Technology (OET) are jointly seeking comment on the petition, including its technical, operational, and economic implications. The comment period closes on September 5, 2024, and reply comments are due by September 20, 2024.</p>
 
<p><b><u>Detailed Summary of the FCC's Position on the NPRM's Proposals</p></b></u>

<p><b>1. TPNT as a Complement to GPS</p></b>

<p>NextNav argues that GPS is vulnerable to disruptions and that its proposed terrestrial PNT system is the only viable nationwide solution to complement GPS. The FCC seeks comment on:</p>
<div style="margin-left:20px;">-	The technical characteristics and capabilities required for a terrestrial PNT system to function as a GPS complement.</div>
<div style="margin-left:20px;">-	Whether the proposed system can achieve ubiquitous nationwide coverage, including U.S. territories, similar to GPS.</div>
<div style="margin-left:20px;">-	The infrastructure and costs needed to create such coverage.</div>
<div style="margin-left:20px;">-	Whether the Lower 900 MHz Band is the most suitable spectrum for this purpose or if other bands should be considered.</div>
<div style="margin-left:20px;">-	The timing and scope of experimental testing activities, particularly in light of recent Department of Transportation (DOT) contracts awarded to PNT technology vendors, including NextNav.</div>

<p><b>2. Wireless E911 Location Accuracy</p></b>

<p>NextNav claims its NextGen network would provide 3D positioning accuracy, meeting the FCC's horizontal indoor location and 3-meter z-axis requirements. The FCC seeks comment on:</p>
<div style="margin-left:20px;">-	How NextNav's proposal would enhance wireless E911 indoor location accuracy, including the provision of dispatchable locations for Public Safety Answering Points (PSAPs) and first responders.</div>
<div style="margin-left:20px;">-	Whether the proposal would support situational awareness, navigation, and land mobile radio (LMR) base station synchronization for public safety.</div>
<div style="margin-left:20px;">-	The impact of NextNav's proposed spectrum swap on its ability to meet existing license conditions, including its obligation to provide location accuracy services until April 3, 2028.</div>
<div style="margin-left:20px;">-	Whether wireless carriers could implement PNT using 3GPP standards in other commercial bands and whether mobile handsets would support the necessary functionality.</div>

<p><b>3. Identification and Protection of Incumbents</p></b>

<p>The Lower 900 MHz Band is used by a diverse range of incumbents, including federal radiolocation systems, ISM equipment, non-M-LMS licensees, amateur radio operators, and unlicensed Part 15 devices. NextNav proposes to protect incumbents but does not provide detailed plans. The FCC seeks comment on:</p>
<div style="margin-left:20px;">-	How primary federal users would be protected under the proposal and what technical restrictions might be necessary.</div>
<div style="margin-left:20px;">-	Whether specific technical rules are needed to protect primary non-federal incumbents, including ISM devices.</div>
<div style="margin-left:20px;">-	The potential impacts on non-M-LMS incumbents, including the feasibility of relocating them to the 907-918 MHz portion of the band and the costs involved.</div>
<div style="margin-left:20px;">-	The extent of Part 15 devices and amateur operations in the band and the potential impact of reconfiguration.</div>
<div style="margin-left:20px;">-	Whether outreach with incumbents has been conducted and the status of discussions.</div>

<p><b>4. Spectrum Swap, Increased Flexibility, and Potential Windfall</p></b>

<p>NextNav proposes a spectrum swap, trading its existing M-LMS licenses for a nationwide 15-megahertz flexible use license. The FCC seeks comment on:</p>
<div style="margin-left:20px;">-	The fairness and feasibility of the swap, particularly given that NextNav would receive more spectrum in a larger geographic area than it currently holds.</div>
<div style="margin-left:20px;">-	The impact of the swap on NextNav's ability to meet license conditions, including its obligation to assist wireless carriers with E911 location accuracy.</div>
<div style="margin-left:20px;">-	The mechanics of partnerships with wireless providers to use excess spectrum for broadband, including compliance with Section 310(d) of the Communications Act.</div>
<div style="margin-left:20px;">-	Whether secondary markets (e.g., leasing or partitioning/disaggregation) would be necessary to enable carrier use of the spectrum.</div>
<div style="margin-left:20px;">-	The potential windfall to NextNav from the swap and how the FCC should address it.</div>

<p><b>5. Rule Changes and Service Obligations</p></b>

<p>NextNav proposes updating FCC rules to align with flexible-use rules (e.g., Part 27) and eliminate restrictions on real-time interconnection, services provided, and spectrum holdings. The FCC seeks comment on:</p>
<div style="margin-left:20px;">-	Whether the proposed provisional rules provide sufficient protection for incumbents while enabling PNT and broadband operations.</div>
<div style="margin-left:20px;">-	Whether additional rule changes are needed to clarify the scope of services and ensure intensive use of the spectrum.</div>
<div style="margin-left:20px;">-	Whether the FCC should impose license conditions to ensure the permanent implementation and maintenance of a nationwide terrestrial PNT system.</div>
<div style="margin-left:20px;">-	The appropriate service obligations of mobile network operator (MNO) partners, particularly in relation to public safety.</div>
 
<p><b><u>Comment and Reply Comment Periods</p></b></u>

<div style="margin-left:20px;">-	Comments are due by September 5, 2024.</div>
<div style="margin-left:20px;">-	Reply Comments are due by September 20, 2024.</div>

<p><b><u>Filing Requirements</p></b></u>

<div style="margin-left:20px;">-	Electronic Filers: Comments may be filed via the FCC's Electronic Comment Filing System (ECFS) at https://www.fcc.gov/ecfs.</div>
<div style="margin-left:20px;">-	Paper Filers: Parties must file an original and one copy of each filing. Filings can be sent by hand, messenger, commercial courier, or U.S. Postal Service to the FCC's mailing contractor at 9050 Junction Drive, Annapolis Junction, MD 20701.</div>

<p><b><u>Ex Parte Rules</p></b></u>

<p>This proceeding is treated as a "permit-but-disclose" proceeding under the FCC's ex parte rules. Written presentations or memoranda summarizing oral presentations must be filed within two business days of the presentation.</p>

<p><b><u>Accessibility</p></b></u>

<p>Requests for materials in accessible formats (e.g., braille, large print, electronic files, audio) can be made by emailing fcc504@fcc.gov or calling the Consumer and Governmental Affairs Bureau at 202-418-0530.</p>
 
<p>This Public Notice initiates a comprehensive review of NextNav's proposal, inviting stakeholders to provide detailed input on the technical, operational, and policy implications of reconfiguring the Lower 900 MHz Band for terrestrial PNT and broadband services.</p>
`,
      originalUrl: "https://docs.fcc.gov/public/attachments/DA-24-776A1.pdf",
      summaryUrl: "/docket/24-240/nprm-summary"
    }
  ],
  comments: [
    {
      id: '1',
      title: 'Aura Network Systems, Inc. Comments on NextNav Petition',
      author: 'Aura Network Systems, Inc.',
      dateSubmitted: '2024-09-01T00:00:00.000Z',
      content: '<h3>Aura Network Systems Comments on NextNav Petition</h3> <p><b><u>Key Issues Discussed:</p></b></u><p><b>1. Reconfiguration of the 902-928 MHz Band:</B> Aura Network Systems comments on NextNav\'s proposal to reconfigure this band for 5G terrestrial positioning, navigation, and timing (PNT). - Sentiment: Neutral</p><p><b>2. Potential Interference:</b> Concerns about harmful interference to existing narrowband operations, particularly those critical to utilities and public safety, due to the proposed broadband operations. - Sentiment: Negative</p><p><b><u>Author\'s Position</b></u></p><p>While Aura Network Systems acknowledges the importance of developing a terrestrial PNT network to optimize spectrum usage and address GPS vulnerabilities, it stresses that this should not compromise existing narrowband operations, especially those vital to public safety and essential services.</p><p><b><u>Suggested Solutions:</b></u><div style="margin-left:20px;">- The Federal Communications Commission (FCC) should critically assess the potential interference environment that NextNav\'s proposal might create.</div><div style="margin-left:20px;">- The FCC should consider requiring filters to limit out-of-band emissions or designate some of NextNav\'s spectrum post-swap as guard bands to protect adjacent narrowband operations from interference.</div><p>Aura Network Systems urges the FCC to address these concerns thoroughly before approving NextNav\'s proposed broadband operations.</p>',
      originalUrl: 'https://www.fcc.gov/ecfs/document/109052864313237/1',
      summaryUrl: '/docket/24-240/comment-1-summary'
    },
    {
      id: '2',
      title: 'COMMENTS OF NEXTNAV INC.',
      author: 'NextNav Inc.',
      dateSubmitted: '2024-09-02T00:00:00.000Z',
      content: '<h3>NextNav Inc. comments in response to the FCC Public Notice</h3> <p><b><u>Key Issues Discussed:</p></b></u><p><b>1. Need for Terrestrial PNT System</b> <div style="margin-left:20px;">- The document emphasizes the necessity for a terrestrial Positioning, Navigation, and Timing (PNT) system to complement and back up the Global Positioning System (GPS) in the United States. Sentiment: Positive</div><p><b>2. Proposal for Lower 900 MHz Band Reconfiguration</b><div style="margin-left:20px;">- NextNav proposes reconfiguring the 902-928 MHz band to enable a 5G terrestrial PNT network. Sentiment: Positive</div><p><b>3. Public Safety and E911 Location Accuracy</b><div style="margin-left:20px;">- The proposal aims to enhance wireless E911 location accuracy, particularly in urban and indoor environments. Sentiment: Positive</div><p><b>4. Engagement with Stakeholders</b><div style="margin-left:20px;">- NextNav is actively engaging with federal incumbents, non-M-LMS incumbents, and unlicensed and amateur operators to address potential interference and coexistence. Sentiment: Neutral</div><p><b>5. Spectrum Reconfiguration and Public Interest</b><div style="margin-left:20px;">- The proposed spectrum reconfiguration is argued to serve the public interest by providing a reliable backup to GPS and additional broadband resources. Sentiment: Positive</div><p><b>6. Challenges and Solutions for Public Safety PNT</b><div style="margin-left:20px;">- The document outlines current challenges in public safety PNT and how NextNav\'s solution addresses these issues. Sentiment: Positive</div><p><b><u>Summary of Author\'s Position and Suggested Solutions:</p></b></u><p>NextNav Inc. advocates for the reconfiguration of the Lower 900 MHz Band to establish a terrestrial PNT system that complements and backs up GPS. The proposed system would leverage 5G technology to provide accurate and reliable positioning and timing services, especially in areas where GPS is limited, such as indoors and urban canyons. NextNav emphasizes the public safety benefits of improved E911 location accuracy and situational awareness for first responders. The company is committed to engaging with stakeholders to ensure coexistence and address potential interference issues. NextNav suggests that the reconfigured spectrum would not only enhance national security and public safety but also provide additional broadband capacity without burdening taxpayers.</p>',
      originalUrl: 'https://www.fcc.gov/ecfs/document/109060100813880/1',
      summaryUrl: '/docket/24-240/comment-2-summary'
    },
    {
      id: '3',
      title: 'AT&T Comments on NextNav Petition',
      author: 'AT&T',
      dateSubmitted: '2024-09-15T00:00:00.000Z',
      content: '<h3>AT&T Comments on NextNav Petition</h3><p>[Mock Comment] AT&T supports NextNav\'s petition for the deployment of a terrestrial PNT network in the 900 MHz band, recognizing the critical need for GPS backup solutions...</p>',
      originalUrl: 'https://www.fcc.gov/ecfs/document/att-comments',
      summaryUrl: '/docket/24-240/comment-3-summary'
    }
  ],
  replies: [
    {
      id: 'r1',
      parentCommentId: '2',
      title: 'Itron Replies to Comments made by NextNav.',
      author: 'Itron, Inc.',
      dateSubmitted: '2024-09-05T00:00:00.000Z',
      content: '<h3>REPLY COMMENTS OF ITRON, INC.</h3><p><b><u>Key Issues Discussed:</p></b></u><p><b>1.  Impact on Unlicensed Devices:</b> The proposal by NextNav to reconfigure the 902-928 MHz band would disrupt billions of unlicensed devices that provide critical services, reflecting investments worth tens or hundreds of billions of dollars. (Sentiment: Negative)</p><p><b>2.  Interference and Spectrum Relocation:</b> NextNav\'s proposal would interfere with the established coexistence regime between M-LMS and Part 15 operations, and relocating these operations to alternative spectrum is not viable. (Sentiment: Negative)</p><p><b>3.  Alternative PNT Solutions:</b> There are numerous existing and developing alternatives to NextNav\'s proposed PNT system that do not require new spectrum allocations or disrupt existing uses. (Sentiment: Neutral)</p><p><b>4. NextNav\'s Track Record:</b> NextNav has a history of unfulfilled promises and failed business plans, which undercuts its credibility in implementing its proposed network. (Sentiment: Negative)</p><p><b>5.	Spectrum Windfall:</b> NextNav\'s proposal would grant it a windfall by converting low-power, limited-purpose licenses into valuable full-power, flexible-use spectrum. (Sentiment: Negative)</p><p><b><u>Summary of Author\'s Position and Suggested Solutions:</p></b></u><p>Itron, Inc. strongly opposes NextNav\'s petition to reconfigure the 902-928 MHz band, arguing that it would disrupt billions of unlicensed devices that provide essential services, with no viable alternatives for relocation. The proposal threatens the established regime that has fostered innovation and investment in the band for over thirty years. Itron highlights that numerous existing and emerging PNT solutions do not require spectrum reallocation and questions NextNav\'s credibility based on its history of unfulfilled promises. Itron suggests denying NextNav\'s petition to prevent a spectrum windfall and protect the significant investments made by existing users.</p>',
      summaryUrl: '/docket/24-240/reply-1-summary'
    },
    {
      id: 'r2',
      parentCommentId: '3',
      title: 'Nokia Reply to AT&T Comments',
      author: 'Nokia',
      dateSubmitted: '2024-09-18T00:00:00.000Z',
      content: '<h3>Nokia Reply to AT&T Comments</h3><p>[Mock Response] Nokia supports AT&T\'s position on the technical feasibility of NextNav\'s proposed network architecture...</p>',
      originalUrl: 'https://www.fcc.gov/ecfs/document/nokia-reply',
      summaryUrl: '/docket/24-240/reply-2-summary'
    }
  ]
};