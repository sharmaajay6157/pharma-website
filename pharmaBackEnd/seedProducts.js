const mongoose = require("mongoose");
const Product = require("./models/product");

require("dotenv").config();

// ======================================================
// RANDOM PRICE
// Generates a price between ₹200 and ₹1000
// Rounded to the nearest ₹10
// ======================================================

function randomPrice() {
  return Math.floor(Math.random() * 81) * 10 + 200;
}

// ======================================================
// PRODUCTS
// ======================================================

const products = [
  // ======================================================
  // 1. TABLETS - 7 PRODUCTS
  // ======================================================

  {
    category: "Tablets",
    therapeuticArea: "Anti Infectives",
    name: "Amoxicillin 500mg",
    description:
      "Broad-Spectrum Antibiotic Tablet (each sachet contains 10 tablets)",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Tablets",
    therapeuticArea: "Cardiovascular",
    name: "Atorvastatin 20mg",
    description:
      "Lipid-Lowering Statin Tablet (each sachet contains 10 tablets)",
    image:
      "https://images.unsplash.com/photo-1550572017-edf7b453e945?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Tablets",
    therapeuticArea: "Gastrointestinal",
    name: "Omeprazole 20mg",
    description:
      "Proton Pump Inhibitor Tablet (each sachet contains 14 tablets)",
    image:
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Tablets",
    therapeuticArea: "Pain Management",
    name: "Ibuprofen 400mg",
    description:
      "Anti-Inflammatory Pain Reliever Tablet (each sachet contains 10 tablets)",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Tablets",
    therapeuticArea: "Vitamins & Minerals",
    name: "Multivitamin Complex",
    description:
      "Daily Essential Nutrient Supplement Tablet (each sachet contains 30 tablets)",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Tablets",
    therapeuticArea: "Respiratory",
    name: "Montelukast 10mg",
    description:
      "Asthma & Allergy Relief Tablet (each sachet contains 10 tablets)",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Tablets",
    therapeuticArea: "Dermatology",
    name: "Terbinafine 250mg",
    description: "Systemic Antifungal Tablet (each sachet contains 7 tablets)",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  // ======================================================
  // 2. CAPSULES - 7 PRODUCTS
  // ======================================================

  {
    category: "Capsules",
    therapeuticArea: "Anti Infectives",
    name: "Ciprofloxacin 500mg",
    description:
      "Fluoroquinolone Antibiotic Capsule (each sachet contains 10 capsules)",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Capsules",
    therapeuticArea: "Cardiovascular",
    name: "Clopidogrel 75mg",
    description:
      "Antiplatelet Cardioprotective Capsule (each sachet contains 10 capsules)",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Capsules",
    therapeuticArea: "Gastrointestinal",
    name: "Pantoprazole 40mg",
    description:
      "Acid Reducer Delayed-Release Capsule (each sachet contains 14 capsules)",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Capsules",
    therapeuticArea: "Pain Management",
    name: "Celecoxib 200mg",
    description:
      "Targeted Joint & Pain Relief Capsule (each sachet contains 10 capsules)",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Capsules",
    therapeuticArea: "Vitamins & Minerals",
    name: "Vitamin D3 60,000 IU",
    description:
      "High-Potency Bone Health Capsule (each sachet contains 4 capsules)",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Capsules",
    therapeuticArea: "Respiratory",
    name: "Doxofylline 400mg",
    description:
      "Bronchodilator Airway Capsule (each sachet contains 10 capsules)",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Capsules",
    therapeuticArea: "Dermatology",
    name: "Isotretinoin 20mg",
    description:
      "Severe Acne Treatment Capsule (each sachet contains 10 capsules)",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  // ======================================================
  // 3. INJECTIONS - 7 PRODUCTS
  // ======================================================

  {
    category: "Injections",
    therapeuticArea: "Anti Infectives",
    name: "Ceftriaxone 1g",
    description:
      "Intravenous Antibiotic Vial (each pack contains 1 vial + sterile water)",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Injections",
    therapeuticArea: "Cardiovascular",
    name: "Heparin Sodium 5000 IU",
    description:
      "Anticoagulant Solution for Injection (each pack contains 5 ampoules)",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Injections",
    therapeuticArea: "Gastrointestinal",
    name: "Metoclopramide 10mg/2ml",
    description:
      "Anti-Emetic Injectable Solution (each pack contains 5 ampoules)",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Injections",
    therapeuticArea: "Pain Management",
    name: "Diclofenac Sodium 75mg/3ml",
    description: "Acute Pain Relief Injectable (each pack contains 5 ampoules)",
    image:
      "https://images.unsplash.com/photo-1579165466541-71e226cecf22?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Injections",
    therapeuticArea: "Vitamins & Minerals",
    name: "Methylcobalamin 1500mcg",
    description:
      "Vitamin B12 Injectable Solution (each pack contains 5 ampoules)",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Injections",
    therapeuticArea: "Respiratory",
    name: "Aminophylline 250mg/10ml",
    description:
      "Emergency Bronchodilator Injection (each pack contains 5 ampoules)",
    image:
      "https://images.unsplash.com/photo-1579165466541-71e226cecf22?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Injections",
    therapeuticArea: "Dermatology",
    name: "Triamcinolone Acetonide 40mg/ml",
    description:
      "Corticosteroid Dermatological Injectable (each pack contains 1 vial)",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  // ======================================================
  // 4. SYRUPS - 7 PRODUCTS
  // ======================================================

  {
    category: "Syrups",
    therapeuticArea: "Anti Infectives",
    name: "Metronidazole Suspension 200mg/5ml",
    description: "Antimicrobial Oral Liquid (each bottle contains 100ml syrup)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Syrups",
    therapeuticArea: "Cardiovascular",
    name: "Amlodipine Oral Solution 1mg/ml",
    description:
      "Pediatric Blood Pressure Management Solution (each bottle contains 150ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Syrups",
    therapeuticArea: "Gastrointestinal",
    name: "Lactulose Oral Solution 10g/15ml",
    description: "Osmotic Laxative Syrup (each bottle contains 200ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Syrups",
    therapeuticArea: "Pain Management",
    name: "Paracetamol Pediatric Syrup 120mg/5ml",
    description:
      "Children Pain & Fever Relief Liquid (each bottle contains 60ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Syrups",
    therapeuticArea: "Vitamins & Minerals",
    name: "Iron & Folic Acid Tonic",
    description: "Hematinic Blood Builder Syrup (each bottle contains 200ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Syrups",
    therapeuticArea: "Respiratory",
    name: "Ambroxol Cough Syrup 30mg/5ml",
    description: "Mucolytic Bronchial Expectorant (each bottle contains 100ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Syrups",
    therapeuticArea: "Dermatology",
    name: "Cetirizine Syrup 5mg/5ml",
    description:
      "Antihistamine Allergy Relief Syrup (each bottle contains 60ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  // ======================================================
  // 5. DRY SYRUPS - 7 PRODUCTS
  // ======================================================

  {
    category: "Dry Syrups",
    therapeuticArea: "Anti Infectives",
    name: "Azithromycin Dry Syrup 200mg/5ml",
    description:
      "Pediatric Antibiotic Reconstitution Suspension (each bottle contains 15ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Dry Syrups",
    therapeuticArea: "Cardiovascular",
    name: "Spironolactone Dry Syrup 10mg/5ml",
    description:
      "Pediatric Diuretic Reconstitution Formula (each bottle contains 30ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Dry Syrups",
    therapeuticArea: "Gastrointestinal",
    name: "Probiotic Reconstitution Suspension",
    description:
      "Gut Flora Restorative Dry Powder (each bottle contains 50ml prepared)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Dry Syrups",
    therapeuticArea: "Pain Management",
    name: "Mefenamic Acid Dry Syrup 100mg/5ml",
    description:
      "Pediatric Anti-Inflammatory Suspension (each bottle contains 60ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Dry Syrups",
    therapeuticArea: "Vitamins & Minerals",
    name: "Zinc Sulfate Dry Syrup 20mg/5ml",
    description: "Immune Support Pediatric Formula (each bottle contains 50ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Dry Syrups",
    therapeuticArea: "Respiratory",
    name: "Cefpodoxime Proxetil Dry Syrup 50mg/5ml",
    description:
      "Respiratory Antibiotic Powder for Oral Liquid (each bottle contains 30ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Dry Syrups",
    therapeuticArea: "Dermatology",
    name: "Griseofulvin Dry Syrup 125mg/5ml",
    description:
      "Pediatric Systemic Antifungal Suspension (each bottle contains 100ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  // ======================================================
  // 6. DROPS - 7 PRODUCTS
  // ======================================================

  {
    category: "Drops",
    therapeuticArea: "Anti Infectives",
    name: "Ofloxacin Ophthalmic Drops 0.3%",
    description: "Antibiotic Eye & Ear Drops (each bottle contains 10ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Drops",
    therapeuticArea: "Cardiovascular",
    name: "Timolol Ophthalmic Drops 0.5%",
    description: "Ocular Pressure Lowering Drops (each bottle contains 5ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Drops",
    therapeuticArea: "Gastrointestinal",
    name: "Simethicone Pediatric Drops 40mg/ml",
    description: "Infant Gas Relief Drops (each bottle contains 30ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Drops",
    therapeuticArea: "Pain Management",
    name: "Ketorolac Ophthalmic Drops 0.5%",
    description:
      "Post-Surgical Ocular Pain Relief Drops (each bottle contains 5ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Drops",
    therapeuticArea: "Vitamins & Minerals",
    name: "Vitamin D3 Infant Drops 400 IU/ml",
    description: "Pediatric Bone Health Drops (each bottle contains 15ml)",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Drops",
    therapeuticArea: "Respiratory",
    name: "Nasal Saline Decongestant Drops",
    description:
      "Soothes Mucous Membranes & Clears Nasal Passages (each bottle contains 20ml)",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Drops",
    therapeuticArea: "Dermatology",
    name: "Clotrimazole Topical Drops 1%",
    description: "Targeted Antifungal Ear Solution (each bottle contains 15ml)",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  // ======================================================
  // 7. OINTMENTS - 7 PRODUCTS
  // ======================================================

  {
    category: "Ointments",
    therapeuticArea: "Anti Infectives",
    name: "Mupirocin Ointment 2% w/w",
    description:
      "Topical Antibacterial Skin Ointment (each sachet contains 5g tube)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Ointments",
    therapeuticArea: "Cardiovascular",
    name: "Nitroglycerin Ointment 0.2%",
    description:
      "Vasodilator Topical Application (each sachet contains 30g tube)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Ointments",
    therapeuticArea: "Gastrointestinal",
    name: "Anesthetic Hemorrhoidal Ointment",
    description:
      "Targeted Soothing Anorectal Relief (each sachet contains 30g tube)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Ointments",
    therapeuticArea: "Pain Management",
    name: "Methyl Salicylate & Menthol Ointment",
    description:
      "Deep Heating Muscle & Joint Pain Relief (each sachet contains 50g tube)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Ointments",
    therapeuticArea: "Vitamins & Minerals",
    name: "Vitamin A & D Healing Ointment",
    description:
      "Skin Barrier Repair & Protective Ointment (each sachet contains 50g tube)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Ointments",
    therapeuticArea: "Respiratory",
    name: "Camphor & Eucalyptus Vapor Ointment",
    description:
      "Topical Chest Decongestant Rub (each sachet contains 50g tub)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },

  {
    category: "Ointments",
    therapeuticArea: "Dermatology",
    name: "Hydrocortisone 1% Cream/Ointment",
    description:
      "Anti-Inflammatory Anti-Itch Topical Ointment (each sachet contains 15g tube)",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: randomPrice(),
  },
];

// ======================================================
// SEED DATABASE
// ======================================================

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    // Delete existing products
    await Product.deleteMany();

    console.log("Existing products deleted");

    // Insert new products
    await Product.insertMany(products);

    console.log(`${products.length} products inserted successfully`);

    await mongoose.connection.close();

    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding products:", error.message);

    // Make sure connection is closed if an error occurs
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  }
}

seedProducts();
