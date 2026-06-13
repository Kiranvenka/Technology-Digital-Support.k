const weeklyActivities = [
  ["Week 1", "Village Survey and Community Interaction", "The project began with a comprehensive community survey to understand digital awareness levels among villagers, students, homemakers, shopkeepers, senior citizens, and local leaders.", ["Household surveys", "Community interaction", "Data collection", "Digital awareness assessment"], ["Identified literacy gaps", "Understood community needs", "Established trust with residents"]],
  ["Week 2", "Smartphone Basics and Digital Literacy", "Training introduced smartphone usage, internet connectivity, applications, communication tools, and basic online services.", ["Smartphone handling demonstrations", "Internet browsing practice", "App installation guidance", "Digital communication training"], ["Improved smartphone skills", "Increased digital awareness", "Enhanced participant confidence"]],
  ["Week 3", "UPI and Mobile Banking Awareness", "Participants learned UPI payments, mobile banking, online fund transfers, balance checking, and transaction monitoring.", ["UPI registration", "Bank account linking", "Mobile banking demonstrations", "Online transaction practice"], ["Learned transaction monitoring", "Raised cashless payment awareness", "Improved financial literacy"]],
  ["Week 4", "Digital Payment Demonstrations", "Hands-on demonstrations helped participants perform real digital transactions for everyday needs.", ["QR code scanning", "Utility bill payments", "Mobile recharge payments", "Money transfer demonstrations"], ["Reduced transaction hesitation", "Improved payment confidence", "Increased digital adoption"]],
  ["Week 5", "Cyber Security Awareness", "Participants learned safe online practices, cyber fraud prevention, OTP safety, password protection, and scam identification.", ["Fraud awareness workshops", "OTP safety education", "Password security guidance", "Scam prevention sessions"], ["Learned safe transaction methods", "Increased cyber awareness", "Reduced online fraud risk"]],
  ["Week 6", "QR Code Payment and Merchant Training", "Local shopkeepers and business owners received practical QR payment system and transaction management training.", ["QR code setup assistance", "Merchant onboarding", "Customer payment demonstrations", "Transaction verification training"], ["Increased QR adoption", "Improved business efficiency", "Greater digital payment acceptance"]],
  ["Week 7", "Government Online Services Awareness", "Participants learned to access citizen platforms and common government online services.", ["DigiLocker awareness", "UMANG demonstration", "Aadhaar guidance", "PAN information", "Scholarship portal awareness"], ["Improved service access", "Raised citizen platform awareness", "Reduced dependency on intermediaries"]],
  ["Week 8", "Review, Feedback, and Impact Assessment", "The final week evaluated project outcomes, collected feedback, documented success stories, and assessed community impact.", ["Feedback collection", "Community impact assessment", "Activity documentation", "Certificate distribution"], ["Measured effectiveness", "Recorded success stories", "Strengthened future engagement"]]
];

const services = {
  payments: [
    ["BHIM UPI", "fa-mobile-screen-button", "Official BHIM website for UPI payments, app information, and user guidance.", "Useful for learning UPI payments through a trusted Government of India supported platform.", "Open the official website, download the app from verified links, register, link bank account, and set UPI PIN privately.", "https://www.bhimupi.org.in/"],
    ["NPCI UPI", "fa-indian-rupee-sign", "Official National Payments Corporation of India page for UPI information and ecosystem details.", "Helps users understand how UPI works and why it is widely used for instant bank transfers.", "Read UPI information, understand payment identifiers, and use only verified UPI apps for transactions.", "https://www.npci.org.in/what-we-do/upi/product-overview"],
    ["PhonePe", "fa-mobile-screen", "Official PhonePe website for UPI payments, recharges, bill payments, and merchant services.", "Helpful for learning common mobile payment features used by citizens and shopkeepers.", "Visit the official website, download from trusted app stores, register mobile number, and use QR/UPI payments safely.", "https://www.phonepe.com/"],
    ["Google Pay", "fa-wallet", "Official Google Pay India website for UPI payments, money transfers, and business payment options.", "Supports learning about secure transfers, bill payments, and merchant QR payments.", "Open the official page, install only from app stores, verify bank-linked mobile number, and confirm receiver details before paying.", "https://pay.google.com/intl/en_in/about/"],
    ["Paytm", "fa-wallet", "Official Paytm website for UPI, wallet, bill payments, recharges, and merchant solutions.", "Useful for demonstrating digital payments, utility payments, and transaction receipt checking.", "Visit the official website, use verified app links, complete account setup, and save receipts after payment.", "https://paytm.com/"],
    ["Amazon Pay", "fa-cart-shopping", "Official Amazon Pay India website for UPI, bill payments, shopping payments, and rewards.", "Good example for explaining digital payments inside online shopping and service platforms.", "Use the official site/app, verify payment method, check amount, and confirm transaction status.", "https://www.amazon.in/amazonpay"],
    ["WhatsApp Payments", "fa-comments", "Official WhatsApp payments information for sending money using UPI inside WhatsApp.", "Helps explain simple contact-based UPI transfer awareness.", "Set up payments only inside the official WhatsApp app, verify bank account, and send money only to trusted contacts.", "https://www.whatsapp.com/payments/in/"],
    ["Razorpay", "fa-credit-card", "Official Razorpay website for payment gateway, UPI, cards, and business payment acceptance.", "Useful for explaining how businesses accept online payments through gateways.", "Explore business payment options, understand QR/payment links, and use official onboarding only.", "https://razorpay.com/"]
  ],
  digitalTraining: [
    ["Digital India", "fa-globe", "Official Digital India website for national digital empowerment programs and initiatives.", "Useful for introducing citizens to India’s digital services and awareness mission.", "Open the website, explore initiatives, and identify services relevant to learning and public access.", "https://www.digitalindia.gov.in/"],
    ["PMGDISHA", "fa-chalkboard-user", "Official Pradhan Mantri Gramin Digital Saksharta Abhiyan website for rural digital literacy.", "Directly related to digital literacy training and citizen empowerment.", "Visit the site, learn about eligibility, training goals, and digital literacy certification information.", "https://www.pmgdisha.in/"],
    ["DigiSaksham", "fa-laptop-code", "Digital skills initiative offering employment-focused digital learning resources.", "Supports students and citizens in building practical digital skills.", "Explore training modules, select suitable courses, and follow official enrollment instructions.", "https://digisaksham.msde.gov.in/"],
    ["Skill India Digital", "fa-screwdriver-wrench", "Official platform for skill development, digital courses, and learning pathways.", "Useful for connecting digital literacy with employability and career growth.", "Register on the official platform, browse digital courses, and complete training modules.", "https://www.skillindiadigital.gov.in/"],
    ["SWAYAM", "fa-laptop-file", "Government online learning platform with free courses from Indian institutions.", "Good for students who want structured online learning and certificates.", "Create an account, choose a course, attend lessons, complete assessments, and download certificates.", "https://swayam.gov.in/"],
    ["NPTEL", "fa-microchip", "Official platform for technical courses from IITs and IISc.", "Helpful for engineering students seeking digital and technical learning.", "Browse courses, enroll, watch lectures, submit assignments, and register for exams if needed.", "https://nptel.ac.in/"],
    ["DIKSHA", "fa-book-open-reader", "Official digital learning platform for school education resources.", "Supports basic digital learning awareness for students and teachers.", "Open the platform, select class/subject, and access learning content in supported languages.", "https://diksha.gov.in/"],
    ["National Cyber Crime Portal", "fa-shield-halved", "Official Government of India portal for reporting cyber crime complaints online.", "Useful for reporting online fraud, financial cyber crime, social media abuse, phishing, and other cyber incidents.", "Open the official portal, choose the complaint category, provide incident details, upload evidence if available, and save the acknowledgement number.", "https://cybercrime.gov.in/"],
    ["Cyber Dost", "fa-user-shield", "Official cyber safety awareness channel by the Ministry of Home Affairs.", "Useful for teaching fraud prevention along with digital payments training.", "Read safety posts, learn scam warning signs, and report cyber fraud through official channels.", "https://www.cybercrime.gov.in/"]
  ]
};

const cyberTopics = [
  ["OTP Fraud", "fa-key", ["Unexpected OTP", "Urgent pressure"], "Never share OTPs, PINs, or passwords with anyone."],
  ["QR Code Fraud", "fa-qrcode", ["Unknown QR", "Receive money claim"], "Scan QR codes only to pay verified merchants, not to receive money."],
  ["UPI Fraud", "fa-money-bill-wave", ["Collect request", "Unknown caller"], "Decline unknown payment requests and verify receiver names."],
  ["Phishing Attacks", "fa-fish", ["Fake links", "Login pages"], "Type official website addresses directly and check HTTPS."],
  ["Fake Loan Apps", "fa-hand-holding-dollar", ["Instant loan promise", "Contact access"], "Use RBI-regulated lenders and avoid suspicious app permissions."],
  ["Social Media Scams", "fa-share-nodes", ["Prize messages", "Impersonation"], "Verify accounts before sending money or information."],
  ["Fake Calls", "fa-phone-volume", ["Bank KYC threat", "Remote access"], "Banks never ask for PIN, OTP, or screen sharing."],
  ["Fake Job Offers", "fa-user-tie", ["Registration fee", "No interview"], "Do not pay for job selection and verify company details."],
  ["Online Shopping Fraud", "fa-cart-shopping", ["Too cheap", "No return details"], "Use trusted platforms and avoid advance transfers to unknown sellers."]
];

const team = [
  ["CHERUVU MANASA", "25F25A0411", "Team Leader", "Coordinated weekly planning, field interaction, activity documentation, and final presentation readiness."],
  ["KUMMETHA KIRAN KUMAR REDDY", "24F21A0474", "Digital Awareness Coordinator", "Led digital literacy sessions and practical demonstrations for online services."],
  ["CHAKALI NAVEEN", "24F21A04B3", "Community Outreach Coordinator", "Managed community interaction, surveys, feedback, and participant engagement."],
  ["PEDDANNAGARI MANIKANTESWARA", "24F21A0494", "Technical Support Coordinator", "Supported app installation, portal access, payment demos, and troubleshooting."],
  ["HARIJANA NAVEEN", "25F25A0412", "Cyber Security Awareness Coordinator", "Conducted cyber safety awareness covering OTP fraud, phishing, and safe transactions."]
];

const timeline = document.getElementById("weeklyTimeline");
timeline.innerHTML = weeklyActivities.map((item, index) => `
  <article class="timeline-item" data-aos="${index % 2 ? "fade-left" : "fade-right"}">
    <div class="timeline-card">
      <span class="week-badge">${item[0]}</span>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
      <strong>Activities</strong>
      <ul>${item[3].map(x => `<li>${x}</li>`).join("")}</ul>
      <strong>Outcomes</strong>
      <ul>${item[4].map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
  </article>
`).join("");

Object.entries(services).forEach(([group, items]) => {
  const container = document.querySelector(`[data-service-list="${group}"]`);
  container.innerHTML = items.map((item, index) => {
    const isOfficial = item[5] && item[5].startsWith("http");
    return `
      <article class="service-card searchable" data-aos="fade-up" data-aos-delay="${(index % 4) * 50}">
        <div class="service-icon"><i class="fa-solid ${item[1]}"></i></div>
        <h3>${item[0]}</h3>
        <p>${item[2]}</p>
        <details>
          <summary>Benefits, steps, and safety</summary>
          <p><strong>Benefits:</strong> ${item[3]}</p>
          <p><strong>Usage Steps:</strong> ${item[4]}</p>
          <p><strong>Safety:</strong> ${isOfficial ? "Use only official portals and verify every detail." : item[5]}</p>
        </details>
        ${isOfficial ? `<a class="btn btn-sm btn-outline-primary official-link" href="${item[5]}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Official Website</a>` : ""}
      </article>
    `;
  }).join("");
});

document.getElementById("cyberGrid").innerHTML = cyberTopics.map((item, index) => `
  <article class="cyber-card searchable" data-aos="fade-up" data-aos-delay="${(index % 3) * 60}">
    <i class="fa-solid ${item[1]}"></i>
    <h3>${item[0]}</h3>
    <p><strong>Warning signs:</strong> ${item[2].map(x => `<span class="tag">${x}</span>`).join("")}</p>
    <p><strong>Prevention:</strong> ${item[3]}</p>
  </article>
`).join("");

document.getElementById("teamGrid").innerHTML = team.map((member, index) => `
  <article class="team-card" data-aos="zoom-in" data-aos-delay="${index * 60}">
    <div class="avatar"><i class="fa-solid fa-user-graduate"></i></div>
    <h3>${member[0]}</h3>
    <strong>${member[1]}</strong>
    <p>${member[2]}</p>
    <span>${member[3]}</span>
  </article>
`).join("");

window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 450);
  AOS.init({ duration: 750, once: true, offset: 90 });
  GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    zoomable: false,
    draggable: false,
    openEffect: "fade",
    closeEffect: "fade"
  });
});

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("csp-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("csp-theme", next);
  themeToggle.innerHTML = next === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

document.querySelectorAll("#mainNav .nav-link[href^='#']").forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    const nav = document.getElementById("mainNav");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
    if (nav.classList.contains("show")) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });
      setTimeout(() => collapse.hide(), 180);
    }
  });
});

const scrollTop = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("visible", window.scrollY > 600);
  document.querySelectorAll("[data-count]").forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (counter.dataset.done || rect.top > window.innerHeight) return;
    counter.dataset.done = "true";
    const target = Number(counter.dataset.count);
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / 1200, 1);
      counter.textContent = Math.floor(progress * target) + (target >= 25 ? "+" : "");
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
});
scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("serviceSearch").addEventListener("input", event => {
  const query = event.target.value.trim().toLowerCase();
  document.querySelectorAll(".searchable").forEach(card => {
    card.classList.toggle("hidden-by-search", query && !card.textContent.toLowerCase().includes(query));
  });
});
