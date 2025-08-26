import React from "react";

const services = [
  {
    name: "Custom Embroidery Digitizing",
    description: "Converting logos, artwork into embroidery files. Compatible with all embroidery machines.",
    formats: "DST, PES, EMB, EXP, JEF, etc.",
    pricing: "Starting from $7.50 per design",
    turnaround: "6-24 hours",
    button: "Get Quote",
    features: [
      "Logos, artwork, and custom designs",
      "All machine formats",
      "Unlimited revisions"
    ]
  },
  {
    name: "Vector Art Conversion",
    description: "Raster to vector conversion. Clean, scalable graphics.",
    formats: "AI, EPS, CDR, PDF, SVG",
    pricing: "Starting from $7.50 per design",
    turnaround: "6-24 hours",
    button: "Get Quote",
    features: [
      "Perfect for screen printing",
      "Large format printing",
      "High quality vector files"
    ]
  },
  {
    name: "Custom Patches Design",
    description: "Embroidered patches for uniforms, bags, hats. Various backing options.",
    formats: "Iron-on, sew-on, velcro",
    pricing: "Contact for quote (MOQ applies)",
    turnaround: "3-7 days",
    button: "Get Quote",
    features: [
      "Custom shapes and sizes",
      "Minimum order quantities",
      "Premium quality"
    ]
  },
  {
    name: "Logo Digitizing",
    description: "Corporate logo digitizing. Brand consistency maintenance.",
    formats: "DST, PES, EMB, EXP, JEF, etc.",
    pricing: "Starting from $7.50 per logo",
    turnaround: "24-hour turnaround",
    button: "Get Quote",
    features: [
      "Multiple size variations",
      "Fast delivery",
      "Brand consistency"
    ]
  }
];

const additionalServices = [
  "Applique digitizing",
  "3D puff digitizing",
  "Jacket back digitizing",
  "Cap/hat digitizing",
  "Left chest digitizing"
];

const ServiceCard = ({ service }) => (
  <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 32 }}>
    <h2 style={{ color: '#ff6600', marginBottom: 8 }}>{service.name}</h2>
    <p style={{ marginBottom: 8 }}>{service.description}</p>
    <ul style={{ marginBottom: 8 }}>
      {service.features.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
    <table style={{ width: '100%', marginBottom: 8, borderCollapse: 'collapse' }}>
      <tbody>
        <tr><td><strong>File Formats:</strong></td><td>{service.formats}</td></tr>
        <tr><td><strong>Pricing:</strong></td><td>{service.pricing}</td></tr>
        <tr><td><strong>Turnaround:</strong></td><td>{service.turnaround}</td></tr>
      </tbody>
    </table>
    <button style={{ background: '#ff6600', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 24px', fontWeight: 'bold', cursor: 'pointer' }}>{service.button}</button>
  </div>
);

const ServicesPage = () => (
  <main style={{ fontFamily: 'Arial, sans-serif', background: '#f7f7f7', minHeight: '100vh', padding: '32px 0' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
      <h1 style={{ color: '#222', marginBottom: 32 }}>Our Services</h1>
      {services.map((service, idx) => <ServiceCard key={idx} service={service} />)}
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 32 }}>
        <h2 style={{ color: '#222', marginBottom: 8 }}>Additional Services</h2>
        <ul style={{ marginBottom: 16 }}>
          {additionalServices.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
        <table style={{ width: '100%', marginBottom: 8, borderCollapse: 'collapse' }}>
          <tbody>
            <tr><td><strong>File Formats:</strong></td><td>DST, PES, EMB, EXP, JEF, etc.</td></tr>
            <tr><td><strong>Pricing:</strong></td><td>Contact for quote</td></tr>
            <tr><td><strong>Turnaround:</strong></td><td>6-48 hours</td></tr>
          </tbody>
        </table>
        <button style={{ background: '#ff6600', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 24px', fontWeight: 'bold', cursor: 'pointer' }}>Get Quote</button>
      </div>
    </div>
  </main>
);

export default ServicesPage;
// ...existing code...
