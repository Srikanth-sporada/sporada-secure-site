// Complete solutions data scraped from sporadasecure.com
// Each object contains: id, slug, name, icon (lucide-react), category, 
// tagline, description, howItWorks, features, platformFeatures, 
// industries, seoTitle, seoDescription

// Shared platform features present on every solution page
export const platformFeatures = [
  {
    id: "live-view",
    title: "Live View",
    description: "Get anywhere, anytime live view of any camera across all your premises worldwide.",
    icon: "MonitorPlay"
  },
  {
    id: "incident-video",
    title: "Incident Video",
    description: "Get links for downloading the video of any reported incident at any premises instantly on your mobile.",
    icon: "Video"
  },
  {
    id: "cloud-storage",
    title: "Cloud Storage",
    description: "Get cloud storage if you need to maintain archive of the video for longer duration of time.",
    icon: "Cloud"
  },
  {
    id: "health-status",
    title: "Health Status",
    description: "Get health status of all your devices across all your premises across the globe.",
    icon: "ActivitySquare"
  },
  {
    id: "alerts",
    title: "Real-Time Alerts",
    description: "Get real-time alerts about incidents as they happen.",
    icon: "BellRing"
  },
  {
    id: "ticket-status",
    title: "Ticket Status",
    description: "We follow a unique case management system for incidents and follow-ups until resolved.",
    icon: "TicketCheck"
  }
];

// Shared video analytics capabilities
export const videoAnalytics = [
  { name: "Face Recognition", icon: "ScanFace" },
  { name: "Face Detection", icon: "UserSearch" },
  { name: "Object Tracking", icon: "Crosshair" },
  { name: "Personnel Monitoring", icon: "Users" },
  { name: "People Counting", icon: "UsersRound" },
  { name: "Queue Counting", icon: "ListOrdered" },
  { name: "Abandoned Object Detection", icon: "PackageX" },
  { name: "License Plate Recognition", icon: "Car" }
];

// How It Works — 3-step process shared across all solutions
export const globalHowItWorks = [
  {
    step: 1,
    title: "We Detect Intruder or Loitering",
    description: "If an intruder or loitering is detected on your premises, Sporada's Video Analytics and Artificial Intelligence detect it and trigger an alarm in the Sporada Secure 24/7 control room.",
    icon: "Eye"
  },
  {
    step: 2,
    title: "We Remotely Issue Audio Warnings",
    description: "Operators issue audio warnings, alerting the intruders that they are being monitored. This is an extremely successful deterrent and in most cases is enough to drive offenders to leave the site.",
    icon: "Volume2"
  },
  {
    step: 3,
    title: "We Alert the Emergency Services",
    description: "If suspicious activity persists, our CCTV monitoring operators take immediate action. They notify the nearest police, emergency services, and the property owner.",
    icon: "Siren"
  }
];

export const solutions = [
  {
    id: 1,
    slug: "secure-360",
    name: "Secure 360°",
    icon: "ScanEye",
    category: "Protection",
    tagline: "Secure your perimeter effectively with 70% cost savings.",
    description: "Secure 360° is a perimeter security solution which uses the latest intrusion detection algorithm and Sporada Secure Video Analytics, which not only detects human activity but also prevents it using two-way audio warnings. The success rate of preventing a crime using Secure 360° is almost 100%.",
    targetUser: "Ideal for those responsible for the security of factories, plants, commercial buildings, educational campuses, or any large to medium premises.",
    customerExpectations: [
      "In cases like food factories, perimeter security is most critical",
      "You know the importance of SOPs and their effect on efficiency and quality",
      "You need to know when employees are not following safety protocols"
    ],
    currentReality: [
      "Tired of managing salary compliance for large guard teams",
      "Large number of guards deployed for perimeter security",
      "Managing guards on a day-to-day basis is becoming a challenge",
      "Monitoring of cameras by guards is not really efficient",
      "Frustrated due to inefficiency and unreliability of guards"
    ],
    howItSpecificallyWorks: [
      "Cameras, floodlights, and siren are installed along the building",
      "Cameras are enabled with human detection analytics",
      "If a human is detected, floodlights will be turned on",
      "A message is sent simultaneously to Sporada Secure Command Center",
      "Monitoring executives immediately perform video-verification",
      "Executives give strong deterrent voice warnings",
      "If intruder does not leave, a powerful siren is activated",
      "Incident is reported to the client or police in real-time"
    ],
    features: [
      "100% in-house human detection video analytics",
      "Instant perimeter intrusion detection",
      "Two-way audio deterrence system",
      "Floodlight activation on detection",
      "Siren activation for persistent intruders",
      "Video verification by trained operators",
      "Real-time police notification",
      "Live view from any device",
      "Cloud video storage",
      "Incident reporting with video clips"
    ],
    industries: ["atm-bfsi", "business-industries", "education", "health-care", "warehouse", "construction", "power-plants", "residential", "delivery-logistics", "qsr-fnb", "retail-outlets", "parking-lot"],
    seoTitle: "Secure 360° — AI Perimeter Security Solution | Sporada Secure",
    seoDescription: "Protect your premises with Secure 360° — Sporada Secure's AI-powered perimeter intrusion detection and deterrence system using two-way audio, floodlights, and siren. Nearly 100% crime prevention rate."
  },
  {
    id: 2,
    slug: "secure-patrol",
    name: "Secure Patrol",
    icon: "ShieldCheck",
    category: "Protection",
    tagline: "A reliable, technology-based alternative for manual guard patrol.",
    description: "Secure Patrol is a perimeter e-guarding and patrol security solution which uses the latest Video Analytics to patrol the perimeter at regular intervals. The success rate of preventing crime using Secure Patrol is almost 100%. It is proven to be more efficient than manual guard patrol.",
    targetUser: "Ideal for factories, commercial buildings, educational campuses, warehouses, and large to medium premises that rely on guard patrol.",
    customerExpectations: [
      "Need efficient perimeter patrol without relying on unreliable guards",
      "Need evidence and logs of patrol activities",
      "Need to reduce high security costs for inefficient manual patrol"
    ],
    currentReality: [
      "Guards not patrolling regularly — found sleeping at night",
      "Guards are generally inefficient in patrolling",
      "No evidence of intrusion available when incidents occur",
      "High security cost for inefficient manual patrol"
    ],
    howItSpecificallyWorks: [
      "SECURE-PATROL gets activated between 9 PM and 9 AM",
      "Alerts the guard by sounding a loud buzzer whenever someone enters the gate",
      "Patrolling is done using cameras by monitoring executives four times every night",
      "If any suspicious activities are identified, the guard is alerted immediately",
      "The area remains under video monitoring until the incident is controlled",
      "Police are called if the situation escalates"
    ],
    features: [
      "Virtual patrol by monitoring executives 4 times per night",
      "Scheduled patrol between 9 PM and 9 AM",
      "Gate alert buzzer system",
      "Real-time guard alert notifications",
      "Incident video documentation",
      "100% patrol audit trail",
      "Emergency police notification",
      "Proven to be more reliable than manual guard patrol"
    ],
    industries: ["atm-bfsi", "business-industries", "education", "health-care", "warehouse", "construction", "power-plants", "residential", "delivery-logistics", "qsr-fnb", "retail-outlets", "parking-lot"],
    seoTitle: "Secure Patrol — Virtual Guard Patrol Solution | Sporada Secure",
    seoDescription: "Replace inefficient manual guard patrol with Secure Patrol — Sporada Secure's technology-based virtual patrol solution. 4 patrols per night, real-time alerts, and nearly 100% crime prevention."
  },
  {
    id: 3,
    slug: "secure-retail",
    name: "Secure Retail",
    icon: "Store",
    category: "Protection",
    tagline: "Security and business analytics for standalone or chain retail outlets.",
    description: "Secure Retail is designed for standalone or chain of retail outlets, helping business owners identify theft, burglary, fire, and unmanned POS counters. It helps small business owners ensure the safety of their store and improve customer satisfaction.",
    targetUser: "Owners of small to medium retail outlets or chains who need business analytics in addition to security monitoring.",
    customerExpectations: [
      "Need alarm systems for stores",
      "Need professional security monitoring",
      "Need customer and operational analytics"
    ],
    currentReality: [
      "Old alarm system with no professional monitoring",
      "No way to get customer insights",
      "No way to get operational insights",
      "No way to identify unmanned POS counters"
    ],
    howItSpecificallyWorks: [
      "When burglary or theft is attempted after closing hours, Sporada Secure monitoring station is alerted",
      "Executives give a strong deterrent message and report to key holders and emergency services",
      "Sporada Secure ensures the POS is manned in the billing section at all times",
      "Analytics identifies smoke and fire using latest algorithms and notifies emergency services"
    ],
    features: [
      "After-hours burglary and theft detection",
      "Two-way audio deterrence",
      "POS counter unmanned alert",
      "Smoke and fire detection & notification",
      "Real-time alerts to key holders",
      "Emergency services notification",
      "Customer people counting",
      "Emotion detection at checkout"
    ],
    industries: ["retail-outlets", "qsr-fnb", "atm-bfsi", "business-industries", "warehouse", "delivery-logistics"],
    seoTitle: "Secure Retail — Retail Store Security & Analytics | Sporada Secure",
    seoDescription: "Protect your retail store from theft and burglary with Secure Retail. Real-time POS monitoring, smoke detection, two-way audio deterrence, and professional 24/7 surveillance for retail businesses."
  },
  {
    id: 4,
    slug: "secure-safety-analytics",
    name: "Secure Safety Analytics",
    icon: "ShieldAlert",
    category: "Analytics",
    tagline: "AI-powered worker safety and PPE compliance monitoring for industrial operations.",
    description: "Secure Safety Analytics is designed for industries and businesses that care about the safety of their workers. It not only detects non-compliance but gives real-time alerts using the latest video analytics algorithms to prevent industrial accidents.",
    targetUser: "Factory owners, plant managers, and operations leaders responsible for the safety of workers and machines.",
    customerExpectations: [
      "Need alerts if safety compliance is not met by employees",
      "Need alerts if someone is loitering in a dangerous no-go area",
      "Need to know if machinery temperature is rising beyond acceptable limits",
      "Need operational safety across the facility"
    ],
    currentReality: [
      "No way to get instant alerts for PPE violations",
      "Regular surprise audits are only snapshots — not continuous",
      "Employees are careless at times with safety equipment",
      "No way to prevent machinery damage due to high temperature",
      "No way to ensure operational safety comprehensively"
    ],
    howItSpecificallyWorks: [
      "Instant alert if someone is not wearing PPE",
      "Instant alert with deterrence if someone is loitering in a dangerous area",
      "Instant alert if machinery is getting heated up beyond safe limits",
      "Video analytics with latest algorithms to prevent industrial accidents"
    ],
    features: [
      "PPE detection and non-compliance alerts",
      "Dangerous zone loitering detection",
      "Machinery temperature monitoring",
      "Real-time safety violation alerts",
      "Deterrence for no-go zone violations",
      "Industrial accident prevention",
      "Continuous monitoring vs. snapshot audits",
      "Integration with 24/7 command center"
    ],
    industries: ["business-industries", "warehouse", "construction", "power-plants", "delivery-logistics", "health-care"],
    seoTitle: "Secure Safety Analytics — PPE & Worker Safety Monitoring | Sporada Secure",
    seoDescription: "Ensure worker safety and PPE compliance with Secure Safety Analytics. AI-powered real-time alerts for PPE violations, no-go zone loitering, and machinery temperature monitoring for industrial sites."
  },
  {
    id: 5,
    slug: "secure-clean",
    name: "Secure Clean",
    icon: "Sparkles",
    category: "Compliance",
    tagline: "Ensure hygiene, cleanliness, and timely opening of all your branches and outlets.",
    description: "Secure Clean helps business owners ensure the timely opening of branches or outlets and maintain cleanliness and hygiene. It improves brand value by ensuring consistent cleanliness standards across all locations using daily AI-powered snapshot audits.",
    targetUser: "Multi-outlet business owners — QSR chains, ATM networks, retail chains — who need to ensure consistent hygiene and timely operations.",
    customerExpectations: [
      "Stores to be opened on time every day",
      "Housekeeping to maintain hygiene & cleanliness standards",
      "Customer satisfaction & brand reputation protection"
    ],
    currentReality: [
      "Delayed opening of shops is a recurring problem",
      "Inefficient supervisors with no accountability",
      "No way to get real-time shop opening status and cleanliness status",
      "No way to do daily audits of shop status without physical visits"
    ],
    howItSpecificallyWorks: [
      "Sporada Secure performs an in-camera SOP check four times a day",
      "Monitoring team keeps an eye on all outlets pan-India",
      "Monitors the opening and closing timing of QSRs",
      "Monitors housekeeping personnel and hygiene in kitchen and dining area",
      "Monitors cleanliness in ATM rooms four times a day"
    ],
    features: [
      "4 daily snapshot audits using existing cameras",
      "Opening and closing time verification",
      "Kitchen and dining area hygiene monitoring",
      "ATM room cleanliness monitoring",
      "Housekeeping staff compliance verification",
      "Pan-India multi-outlet monitoring from one center",
      "Daily audit reports",
      "Real-time non-compliance alerts"
    ],
    industries: ["qsr-fnb", "atm-bfsi", "retail-outlets", "education", "health-care", "residential", "warehouse", "parking-lot"],
    seoTitle: "Secure Clean — AI Hygiene & Cleanliness Monitoring | Sporada Secure",
    seoDescription: "Ensure hygiene, cleanliness, and timely opening of your outlets with Secure Clean. 4 AI-powered daily snapshot audits of your QSRs, ATMs, and retail stores — no need for mystery shoppers."
  },
  {
    id: 6,
    slug: "secure-check",
    name: "Secure Check",
    icon: "ClipboardCheck",
    category: "Compliance",
    tagline: "Offline video analytics to ensure SOP compliance in operations.",
    description: "Secure Check helps all types of industries and businesses improve brand value by ensuring that SOPs are followed during operations through offline video analytics. It enables businesses to take corrective actions immediately when non-compliance is detected.",
    targetUser: "Operations managers at factories, warehouses, or any premises where SOP compliance is critical for quality and efficiency.",
    customerExpectations: [
      "Know the importance of SOPs and their effect on efficiency and quality",
      "Need to know when employees are not following operational SOPs",
      "Need to take corrective action immediately on non-compliance"
    ],
    currentReality: [
      "Responsible for efficiency but lack visibility into operations",
      "Do not want a quality disaster on your hands",
      "Need to take corrective action immediately",
      "Pilferage during loading and unloading operations"
    ],
    howItSpecificallyWorks: [
      "Production areas, loading & unloading areas are covered by cameras connected to Sporada Secure FTP",
      "Video footage of selected factory and dock cameras undergoes offline video analytics in command center",
      "Any non-compliance with SOPs is captured and short video clips are made for the client",
      "Companies have found that compliance during operations and loading/unloading drastically improved",
      "Pilferage has almost become negligible after corrective actions"
    ],
    features: [
      "Offline video analytics for SOP compliance",
      "Loading and unloading area monitoring",
      "Production area compliance checks",
      "Short video clips of non-compliance for review",
      "Daily operations audit",
      "Pilferage detection",
      "Compliance trend reporting",
      "Corrective action workflow"
    ],
    industries: ["business-industries", "warehouse", "delivery-logistics", "qsr-fnb", "construction", "atm-bfsi"],
    seoTitle: "Secure Check — SOP Compliance Monitoring | Sporada Secure",
    seoDescription: "Ensure SOP compliance across your operations with Secure Check. Offline video analytics identifies non-compliance in factories, warehouses, and loading docks, dramatically reducing pilferage."
  },
  {
    id: 7,
    slug: "retail-analytics",
    name: "Retail Analytics",
    icon: "BarChart3",
    category: "Analytics",
    tagline: "Business intelligence from your CCTV — footfall, queue length, emotion detection, and POS monitoring.",
    description: "Secure Retail Analytics is designed for standalone or chain retail outlets, helping business owners identify theft, fire, unmanned POS counters, visitor count with gender, queue length, and behavior analysis. It helps small business owners ensure store safety and improve customer satisfaction.",
    targetUser: "Retail store owners and chain managers who want to combine security with actionable customer and operational insights.",
    customerExpectations: [
      "Count people visiting retail outlet with gender for analysis",
      "Know the emotional behavior of customers",
      "Need professional security monitoring",
      "Need customer and operational analytics at fingertips"
    ],
    currentReality: [
      "Want to know open and close times of premises",
      "Want to know if queue length has exceeded",
      "Want to know if POS counter is unmanned",
      "Want retail outlet data available at fingertips"
    ],
    howItSpecificallyWorks: [
      "Camera at billing counter detects emotions of persons during billing",
      "Camera at store entrance counts people in and out along with their gender",
      "Camera at billing counter measures queue length and sends alert if exceeded",
      "Camera at billing counter alerts manager when any POS counter is unmanned"
    ],
    features: [
      "People counting with gender analytics",
      "Customer emotion detection at checkout",
      "Queue length monitoring and alerts",
      "POS counter unmanned alerts",
      "Opening and closing time verification",
      "Daily, weekly, and monthly analytics reports",
      "Mobile app data dashboard",
      "Footfall trend analysis"
    ],
    industries: ["retail-outlets", "qsr-fnb", "atm-bfsi", "health-care", "education", "parking-lot"],
    seoTitle: "Retail Analytics — Customer Insights & Store Analytics | Sporada Secure",
    seoDescription: "Transform your CCTV into a business intelligence tool with Retail Analytics. Get footfall counts, gender analytics, emotion detection, queue alerts, and POS monitoring for your retail store."
  },
  {
    id: 8,
    slug: "secure-care",
    name: "Secure Care",
    icon: "ActivitySquare",
    category: "Compliance",
    tagline: "Automated health monitoring of your CCTV surveillance equipment 24/7.",
    description: "Secure Care ensures that all surveillance cameras and equipment are connected to the monitoring station, performing health checks to ensure the system is operating properly without failures. It helps customers ensure their surveillance system is working 24/7 with automated fault tickets.",
    targetUser: "Security and IT managers at multi-site businesses who need to ensure their surveillance systems are always operational.",
    customerExpectations: [
      "Need to know the health status of security equipment across all sites",
      "Need a single service vendor for all sites across India",
      "Need incident videos immediately without delays",
      "Need reliability in the availability of CCTV footage"
    ],
    currentReality: [
      "Unreliable dependency on site managers for equipment status",
      "Managing multiple pan-India service vendors of different quality",
      "Delays in getting incident videos manually",
      "Unreliable availability of CCTV footage when needed"
    ],
    howItSpecificallyWorks: [
      "All CCTVs and DVR/NVRs are connected to Sporada Secure Central Monitoring Station",
      "Automatic health check-up is performed four times every day",
      "Checks: DVR HDD status, DVR power status, camera not working, no video signal",
      "Ticket is raised automatically to the authorized vendor",
      "Health status of all sites visible on mobile",
      "Live video of all sites accessible on mobile",
      "On failure, complaint is raised automatically and rectification is ensured"
    ],
    features: [
      "4 automatic health checks per day",
      "DVR/NVR and camera status monitoring",
      "Automated fault ticket creation",
      "Vendor notification and escalation",
      "Multi-site health dashboard on mobile",
      "Live video access from mobile",
      "Pan-India single-vendor service model",
      "Incident video availability assurance"
    ],
    industries: ["atm-bfsi", "retail-outlets", "qsr-fnb", "business-industries", "health-care", "education", "warehouse", "delivery-logistics"],
    seoTitle: "Secure Care — CCTV Health Monitoring & Maintenance | Sporada Secure",
    seoDescription: "Ensure your surveillance system never fails with Secure Care. 4 automatic health checks per day, automated fault tickets, and pan-India single-vendor management for all your CCTV equipment."
  },
  {
    id: 9,
    slug: "secure-247",
    name: "Secure 24/7",
    icon: "Clock",
    category: "Protection",
    tagline: "Live 24/7 monitoring to ensure SOPs are followed and operations run as planned.",
    description: "Secure 24/7 helps all types of industries and businesses improve brand value by ensuring that SOPs are followed during operations through live monitoring. It helps businesses identify and correct non-compliance in real-time, substantially improving operational efficiency.",
    targetUser: "Operations managers at retail outlets, plants, factories, warehouses, or any premises where operational SOP compliance is critical.",
    customerExpectations: [
      "In food factories, SOP compliance is most critical",
      "Know the importance of SOPs and their effect on efficiency and quality",
      "Need corrective action taken immediately when non-compliance is detected"
    ],
    currentReality: [
      "Responsible for efficiency but cannot monitor all areas simultaneously",
      "Do not want a quality disaster on your hands",
      "Need to take corrective action immediately",
      "Pilferage during operations affects business profitability"
    ],
    howItSpecificallyWorks: [
      "Production areas, loading & unloading areas are connected live to Sporada Secure Command Center",
      "Video footage is monitored live by trained operators",
      "Any non-compliance with SOPs is captured in real-time and short video clips are provided immediately",
      "Compliance during operations, loading and unloading drastically improves",
      "Pilferage becomes almost negligible after corrective actions"
    ],
    features: [
      "Live real-time SOP monitoring",
      "Instant non-compliance alerts",
      "Short video clips of violations provided immediately",
      "Loading and unloading area monitoring",
      "Production area live surveillance",
      "Pilferage detection and prevention",
      "Round-the-clock coverage",
      "Daily compliance reports"
    ],
    industries: ["business-industries", "warehouse", "delivery-logistics", "qsr-fnb", "construction", "atm-bfsi", "retail-outlets", "health-care"],
    seoTitle: "Secure 24/7 — Round-the-Clock Live Monitoring | Sporada Secure",
    seoDescription: "Ensure SOP compliance across all operations with Secure 24/7 live monitoring. Real-time non-compliance alerts, production monitoring, and pilferage prevention for factories, warehouses, and retailers."
  },
  {
    id: 10,
    slug: "secure-attendance",
    name: "Secure Attendance",
    icon: "UserCheck",
    category: "Analytics",
    tagline: "Contactless attendance tracking using CCTV cameras, mobile GPS, and face recognition.",
    description: "Secure Attendance is a robust attendance tracking system using CCTV, mobile, and GPS that helps industries and businesses capture attendance of their field executives on the go. It is a solution to manage human resources efficiently with real-time alerts, panic buttons, and centralized access.",
    targetUser: "HR managers, factory supervisors, and institutions managing large workforces — both on-premises and field staff.",
    customerExpectations: [
      "Save time of field executives travelling to office for attendance",
      "Ensure employees are coming on time",
      "Need scalability across multiple locations",
      "Reduce cost and save time in payroll processing"
    ],
    currentReality: [
      "Field sales executives' attendance cannot be captured and verified remotely",
      "Old method of signing register or biometrics is unreliable",
      "No evidence of authentic in & out time",
      "Spending high on payroll processing for inaccurate data"
    ],
    howItSpecificallyWorks: [
      "Field executives mark attendance using mobile app with GPS, selfie picture and OTP validation",
      "Institutions use touchless attendance via CCTV cameras with face recognition",
      "Centralized access gives real-time attendance status across multiple locations",
      "Easy intelligent search for persons entering and exiting premises",
      "Provides real-time alerts and reports",
      "Emergency Panic button in mobile app with real-time location and video for employees"
    ],
    features: [
      "Face recognition touchless attendance via CCTV",
      "Mobile GPS + selfie + OTP attendance for field staff",
      "Multi-location centralized attendance dashboard",
      "Real-time attendance status and reports",
      "Intelligent entry/exit search",
      "Emergency panic button with live location",
      "Customer/client visit validation via GPS and OTP",
      "Payroll-ready data exports"
    ],
    industries: ["business-industries", "education", "health-care", "atm-bfsi", "warehouse", "construction", "delivery-logistics", "qsr-fnb"],
    seoTitle: "Secure Attendance — AI Face Recognition Attendance System | Sporada Secure",
    seoDescription: "Modernize attendance tracking with Secure Attendance. Contactless face recognition via CCTV, mobile GPS for field staff, centralized multi-site dashboard, and emergency panic button."
  },
  {
    id: 11,
    slug: "secure-sense",
    name: "Secure Sense",
    icon: "Radar",
    category: "Protection",
    tagline: "Integrated sensor and camera-based security to prevent theft, burglary, and fire.",
    description: "Secure Sense connects all your surveillance cameras and sensors to the Sporada Secure monitoring station. When an alarm is raised by sensors, operators go live on-site using cameras, assess the level of threat, and follow the SOP. It helps ensure that valuables and assets remain secure.",
    targetUser: "Ideal for ATMs, branches, currency chests, gold loan branches, delivery outlets, and medium-size premises with valuable assets.",
    customerExpectations: [
      "Want to secure premises from burglary and fire",
      "Do not want an outdated offline system that only sends SMS",
      "Want a system that not only alerts on intrusion but takes immediate deterrence action",
      "Do not want to take chances with burglary or fire"
    ],
    currentReality: [
      "Need professional monitoring with police response capability",
      "Want police called in case of burglary attempt",
      "Want fire department called in case of fire or smoke",
      "Want staff to alert in case of armed robbery",
      "Want staff to alert in case of unruly customers"
    ],
    howItSpecificallyWorks: [
      "Branches or ATMs are installed with various sensors connected to an Intrusion Alarm panel",
      "CCTV cameras, siren and 2-way audio are installed to actively prevent crime",
      "The Intrusion Alarm panel, CCTVs and 2-way audio are connected to Sporada Secure monitoring station",
      "The panel is secured for tampering using contact sensor and vibration sensors",
      "The camera can detect if someone approaches the secured area wearing a mask",
      "Any alarm is monitored and based on threat level, the SOP is executed"
    ],
    highSecurityOptions: [
      { id: 1, title: "Smoke Device", description: "Dense smoke fills the entire vault within 3–5 seconds to disorient intruders." },
      { id: 2, title: "OTP-Based Vault Door", description: "Vault door opens only after OTP verification from the command center." },
      { id: 3, title: "Interlocking Doors", description: "Two entrance doors that work one at a time, ensuring only one person can enter." },
      { id: 4, title: "Live Monitoring", description: "All cameras connected directly to the monitoring center for suspicious activity." },
      { id: 5, title: "SPY Cameras", description: "Hidden cameras installed behind one-way mirrors for forensic recording." }
    ],
    features: [
      "Multi-sensor intrusion alarm panel integration",
      "Two-way audio deterrence",
      "Masked intruder detection",
      "Smoke and fire sensor integration",
      "OTP-based vault door opening system",
      "Interlocking door management",
      "Smoke device activation for BFSI",
      "Spy camera for forensic recording",
      "Live monitoring mode for highest security",
      "Vibration and contact sensor tamper protection"
    ],
    industries: ["atm-bfsi", "retail-outlets", "qsr-fnb", "warehouse", "residential", "delivery-logistics"],
    seoTitle: "Secure Sense — Sensor + Camera Integrated Security | Sporada Secure",
    seoDescription: "Protect ATMs, branches, and high-value premises with Secure Sense. Integrated sensor and camera security with live monitoring, OTP vault access, smoke devices, and 24/7 command center response."
  },
  {
    id: 12,
    slug: "secure-track",
    name: "Secure Track",
    icon: "MapPin",
    category: "Analytics",
    tagline: "Real-time GPS tracking for vehicles, field staff, and student safety.",
    description: "Secure Track is designed for industries, educational institutions, or any businesses to track their human resources or vehicles along with attendance, GPS coordination, date and time. It helps ensure the proper utilization of resources and the safety of employees, students, and kids.",
    targetUser: "Business owners, logistics managers, educational institutions, and parents who need to track vehicles, field staff, or students in real-time.",
    customerExpectations: [
      "Save travel time of field executives coming to office for attendance",
      "Ensure proper utilization of vehicles",
      "Ensure goods are delivered on time through logistics",
      "Ensure safety of employees, students, or children during emergencies"
    ],
    currentReality: [
      "Old biometric system or manual attendance cannot verify field staff",
      "No resources to track the movement of trucks or vehicles",
      "No way to get updates from field employees or validate their visits",
      "No way to monitor behavior or movement of kids or students",
      "No way to help employees, vehicles, or students during emergencies"
    ],
    howItSpecificallyWorks: [
      "Employee/student attendance marked using GPS and selfie photograph",
      "Field executive customer visits validated using OTP and GPS location",
      "Vehicles tracked continuously; route deviations trigger alerts",
      "Drivers can contact command center via SOS button in mobile app",
      "Parents receive alerts about kids' movement and SOS feature"
    ],
    businessAnalyticsFeatures: [
      { id: 1, title: "People Counting & Gender", description: "Counts people in and out with gender detection for footfall analytics." },
      { id: 2, title: "Emotion Detection", description: "Detects customer emotions during checkout to gauge satisfaction." },
      { id: 3, title: "Queue Length Management", description: "Instant alert to floor manager when queue length is exceeded." },
      { id: 4, title: "POS Manning", description: "Alerts floor manager when any POS counter has been unmanned." }
    ],
    features: [
      "GPS + selfie + OTP attendance for field staff",
      "Real-time vehicle route tracking and deviation alerts",
      "SOS emergency button for drivers and field staff",
      "Student and child location tracking for parents",
      "Kid and student SOS panic button",
      "Customer visit validation via GPS and OTP",
      "Multi-location tracking dashboard",
      "Centralized mobile app for all tracking data"
    ],
    industries: ["delivery-logistics", "education", "business-industries", "health-care", "construction", "atm-bfsi", "retail-outlets", "qsr-fnb"],
    seoTitle: "Secure Track — GPS Vehicle & Staff Tracking | Sporada Secure",
    seoDescription: "Track vehicles, field executives, and students in real-time with Secure Track. GPS + selfie attendance, route deviation alerts, SOS panic button, and customer visit validation."
  }
];

export const getSolutionBySlug = (slug) => solutions.find(s => s.slug === slug);
export const getSolutionsByCategory = (category) => solutions.filter(s => s.category === category);
export const getSolutionsByIndustry = (industrySlug) => solutions.filter(s => s.industries.includes(industrySlug));
export const solutionCategories = [...new Set(solutions.map(s => s.category))];

export default solutions;
