


import React from "react";
import Image from "next/image";
import Link from "next/link";

const pricingSections = [
  {
    title: "Digitizing Job up-to 3 inches",
    price: "$15",
    subtitle: "under 5000 stitches",
    bg: "#fff",
    images: [
      { src: "/portfolio-snapshot/digitization/digitize-1.jpg", alt: "Small Digitizing Sample", width: 200, height: 150 },
      { src: "/portfolio-snapshot/digitization/before15.jpg", alt: "Before Sample", width: 150, height: 150 },
    ],
    arrows: true,
  },
  {
    title: "Left Chest up-to 5 inches",
    price: "$20",
    bg: "#ff6600",
    textColor: "#fff",
    images: [
      { src: "/portfolio-snapshot/digitization/digitize-2.jpg", alt: "Left Chest Sample", width: 200, height: 150 },
      { src: "/portfolio-snapshot/digitization/before16.jpg", alt: "Shirt Sample", width: 150, height: 150 },
    ],
    arrows: true,
  },
  {
    title: "Mid-Size",
    price: "$35",
    bg: "#222",
    textColor: "#fff",
    images: [
      { src: "/portfolio-snapshot/digitization/digitize-3.jpg", alt: "Mid Size Sample", width: 200, height: 150 },
      { src: "/portfolio-snapshot/digitization/before17.jpg", alt: "Bag Sample", width: 150, height: 150 },
    ],
    arrows: true,
  },
  {
    title: "Jacket Back",
    price: "$80",
    bg: "#fff",
    images: [
      { src: "/portfolio-snapshot/digitization/before2.jpg", alt: "Jacket Back Sample", width: 200, height: 150 },
      { src: "/portfolio-snapshot/digitization/before13.jpg", alt: "Jacket Sample", width: 150, height: 150 },
    ],
    arrows: true,
  },
];

const countries = [
  "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic Of", "Iraq", "Ireland", "Isle of Man", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People'S Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People'S Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "RWANDA", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Not In List"
];

const services = [
  "Digitiziting", "Vectorization", "Patches", "Request A Qoute", "Other"
];

function Arrow() {
  return (
    <span style={{ fontSize: 48, color: "#ff6600", margin: "0 16px" }}>&#8594;</span>
  );
}

const ContactForm = () => (
  <form style={{ background: "#ff6600", padding: 32, borderRadius: 8, color: "#fff", flex: 1 }}>
    <h3 style={{ marginBottom: 24, fontSize: 24 }}>Request a Call</h3>
    <input 
      type="text" 
      placeholder="Your Name" 
      style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }} 
    />
    <input 
      type="text" 
      placeholder="Your Company Name" 
      style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }} 
    />
    <input 
      type="email" 
      placeholder="Your Email" 
      style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }} 
    />
    <input 
      type="text" 
      placeholder="Your Contact Number" 
      style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }} 
    />
    <select style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }}>
      <option>--Please Select Your Country--</option>
      {countries.map((country, index) => (
        <option key={index}>{country}</option>
      ))}
    </select>
    <select style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }}>
      <option>--About Service--</option>
      {services.map((service, index) => (
        <option key={index}>{service}</option>
      ))}
    </select>
    <textarea 
      placeholder="Would like to discuss..." 
      style={{ width: "100%", marginBottom: 12, padding: "12px", border: "none", borderRadius: 4, fontSize: 14, minHeight: 80, resize: "vertical" }} 
    />
    <input 
      type="text" 
      placeholder="Enter the Captcha" 
      style={{ width: "100%", marginBottom: 16, padding: "12px", border: "none", borderRadius: 4, fontSize: 14 }} 
    />
    <button 
      type="submit" 
      style={{ 
        background: "#222", 
        color: "#fff", 
        padding: "12px 24px", 
        border: "none", 
        borderRadius: 4, 
        fontSize: 16, 
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%"
      }}
    >
      SUBMIT
    </button>
  </form>
);

const BusinessInfo = () => (
  <div style={{ background: "#222", color: "#fff", padding: 32, borderRadius: 8, flex: 1 }}>
    <h3 style={{ marginBottom: 16, fontSize: 24 }}>Let's Talk Business</h3>
    <p style={{ fontSize: 18, marginBottom: 8 }}>Talk to a Specialist</p>
    <p style={{ marginBottom: 24, lineHeight: 1.6 }}>
      Drop us a line about your project and we will contact you within a business day. All submitted information will be kept confidential.
    </p>
    <button style={{ 
      background: "#ff6600", 
      color: "#fff", 
      padding: "12px 24px", 
      border: "none", 
      borderRadius: 4, 
      fontSize: 16,
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: 24
    }}>
      CONTACT SPECIALIST
    </button>
    <div style={{ borderTop: "1px solid #444", paddingTop: 16 }}>
      <strong style={{ color: "#ff6600" }}>Business Hours (UTC-5)</strong><br />
      <div style={{ marginTop: 8 }}>
        <strong>Monday-Friday:</strong> 9am - 5pm<br />
        <strong>Saturday-Sunday:</strong> (Closed)
      </div>
    </div>
  </div>
);

const Header = () => (
  <header style={{ background: "#fff", padding: "16px 0", borderBottom: "1px solid #eee" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src="/logo.jpg" alt="DesignRadix Logo" width={40} height={40} style={{ borderRadius: 4, marginRight: 12 }} />
        <span style={{ fontSize: 24, fontWeight: "bold", color: "#ff6600" }}>DesignRadix</span>
      </div>
      <nav style={{ display: "flex", gap: 32 }}>
        <Link href="/" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Home</Link>
        <Link href="/company" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Company</Link>
        <Link href="/services" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Services</Link>
        <Link href="/pricing" style={{ textDecoration: "none", color: "#ff6600", fontWeight: 500 }}>Pricing</Link>
        <Link href="/portfolio" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Portfolio</Link>
        <Link href="/contact" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer style={{ background: "#fff", padding: 32, borderTop: "1px solid #eee", marginTop: 32 }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.jpg" alt="DesignRadix Logo" width={32} height={32} style={{ borderRadius: 4, marginRight: 12 }} />
          <span style={{ color: "#ff6600", fontSize: 20, fontWeight: "bold" }}>DesignRadix</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <span style={{ fontSize: 14, color: "#666" }}>We Accept:</span>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ fontSize: 14, color: "#666" }}>Visa</span>
            <span style={{ fontSize: 14, color: "#666" }}>Mastercard</span>
            <span style={{ fontSize: 14, color: "#666" }}>PayPal</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #eee", paddingTop: 16, textAlign: "center" }}>
        <span style={{ fontSize: 12, color: "#888" }}>&copy; 2017 DesignRadix.com All Rights Reserved.</span>
      </div>
    </div>
  </footer>
);

const DigitizationPricingPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f7", minHeight: "100vh" }}>
      <Header />
      
      <div style={{ background: "#fff", padding: "48px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{ fontSize: 48, fontWeight: "bold", color: "#222", marginBottom: 16 }}>Digitizing Pricing</h1>
          <p style={{ fontSize: 18, color: "#666", maxWidth: 600, margin: "0 auto" }}>
            Professional embroidery digitizing services with competitive pricing
          </p>
        </div>
      </div>

      {pricingSections.map((section, idx) => (
        <section key={idx} style={{ background: section.bg, color: section.textColor || "#222", padding: "48px 0", textAlign: "center" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ 
              background: section.bg === "#fff" ? "#222" : "#fff", 
              color: section.bg === "#fff" ? "#fff" : "#222", 
              display: "inline-block", 
              padding: "16px 32px", 
              borderRadius: 8, 
              marginBottom: 32,
              fontSize: 20,
              fontWeight: "bold"
            }}>
              <div>{section.title}</div>
              <div style={{ fontSize: 32, color: "#ff6600", marginTop: 8 }}>{section.price}</div>
              {section.subtitle && <div style={{ fontSize: 16, marginTop: 8, opacity: 0.8 }}>{section.subtitle}</div>}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 32, flexWrap: "wrap" }}>
              <Image 
                src={section.images[0].src} 
                alt={section.images[0].alt} 
                width={section.images[0].width} 
                height={section.images[0].height} 
                style={{ borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
              />
              {section.arrows && <Arrow />}
              <Image 
                src={section.images[1].src} 
                alt={section.images[1].alt} 
                width={section.images[1].width} 
                height={section.images[1].height} 
                style={{ borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
              />
            </div>
          </div>
        </section>
      ))}

      <div style={{ display: "flex", gap: 32, maxWidth: 1200, margin: "48px auto", padding: "0 24px", flexWrap: "wrap" }}>
        <ContactForm />
        <BusinessInfo />
      </div>

      <Footer />
    </div>
  );
};

export default DigitizationPricingPage;
