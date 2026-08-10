import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const translations = {
  en: {
    // Brand
    brandName: 'ZIVORA',
    brandSub: 'SPECIALITY DENTAL CLINIC',
    tagline: 'Zivora Speciality Dental Clinic provides world-class, comprehensive dental care with modern technology, experienced specialists, and personalized treatment plans.',

    // Nav
    navAbout: 'About Us',
    navServices: 'Services',
    navWhyUs: 'Why Choose Us',
    navProcess: 'Patient Experience',
    navFaq: 'FAQ & Reviews',
    navContact: 'Contact Us',
    navPortal: 'Patient Portal',
    navBook: 'Book Appointment',

    // Hero
    heroTitle: 'Every Smile Tells a Story. Let Yours Shine with Confidence.',
    heroSub: 'Where Advanced Dentistry Meets Genuine Care.',
    heroBody1: "Your smile is more than just teeth—it's the confidence you carry into every conversation, every photograph, and every opportunity. At Zivora Speciality Dental Clinic, we combine modern dental technology, specialized expertise, and compassionate care to create healthy, beautiful smiles that last a lifetime.",
    heroBody2: "Whether you're visiting for preventive care, cosmetic dentistry, orthodontics, dental implants, or a complete smile transformation, we're committed to delivering exceptional results in a comfortable and welcoming environment.",
    heroBody3: "Because every confident smile begins with exceptional care.",
    btnBookAppt: 'Book an Appointment',
    btnExploreServices: 'Explore Our Services',

    // About Us
    aboutTag: 'About Us',
    aboutTitle: 'Welcome to Zivora Speciality Dental Clinic',
    aboutBody1: 'At Zivora Speciality Dental Clinic, we provide comprehensive, patient-centered dental care for all ages using modern technology and evidence-based treatments.',
    aboutBody2: 'We listen carefully to your goals and create personalized care plans that prioritize comfort, gentle treatment, and long-term oral health.',
    aboutBody3: 'From preventive care and cosmetic enhancements to specialized dentistry, our experienced team is dedicated to giving you a healthy, confident smile.',
    aboutBody4: '',

    // Mission & Vision
    missionTag: 'Our Mission',
    missionTitle: 'Dedicated to Better Oral Health',
    missionBody1: 'Our mission is to provide exceptional dental care that combines advanced technology, professional expertise, and genuine compassion. We strive to create positive dental experiences while improving the health, comfort, and confidence of every patient who visits our clinic.',
    missionBody2: 'We believe dentistry should not only solve problems but also educate, prevent future complications, and empower patients to maintain lifelong oral health.',

    visionTag: 'Our Vision',
    visionTitle: 'Inspiring Healthier Smiles for Every Generation',
    visionBody: 'We envision becoming one of the most trusted specialty dental clinics by continuously delivering innovative dental solutions, maintaining the highest standards of clinical excellence, and building lasting relationships with our patients based on trust, integrity, and outstanding results.',

    // Why Choose Us
    whyTag: 'Why Choose Us',
    whyTitle: 'Experience Dentistry Designed Around You',
    whySub: 'Choosing the right dental clinic is an important decision. At Zivora, we combine expertise, technology, and personalized attention to ensure every patient receives exceptional care from the moment they walk through our doors.',
    why1Title: 'Personalized Care',
    why1Desc: 'Every patient receives a customized treatment plan tailored to their oral health, lifestyle, and goals.',
    why2Title: 'Experienced Professionals',
    why2Desc: 'Our dental professionals stay updated with modern techniques and international best practices to provide outstanding clinical care.',
    why3Title: 'Modern Dental Technology',
    why3Desc: 'We invest in advanced equipment that improves diagnostic accuracy, treatment efficiency, patient comfort, and long-term outcomes.',
    why4Title: 'Comfortable Environment',
    why4Desc: 'Our clinic has been designed to provide a calm, welcoming atmosphere where patients feel relaxed throughout every stage of their treatment.',
    why5Title: 'Comprehensive Services',
    why5Desc: 'From routine check-ups to complex restorative and cosmetic procedures, we provide complete dental care under one roof.',
    why6Title: 'Focus on Prevention',
    why6Desc: 'Preventive dentistry is at the heart of everything we do. We believe early detection and regular care are the keys to maintaining healthy smiles.',

    // Services
    servTag: 'Our Services',
    servTitle: 'Complete Dental Solutions for Every Smile',
    
    s1Title: 'General Dentistry',
    s1Desc: 'Regular dental examinations are essential for maintaining healthy teeth and gums. Our comprehensive dental check-ups allow us to identify potential concerns early, helping prevent more complex problems in the future.',
    s1Item1: 'Routine Dental Exams',
    s1Item2: 'Oral Health Assessments',
    s1Item3: 'Dental Fillings',
    s1Item4: 'Preventive Treatments',
    s1Item5: 'Tooth Extractions',
    s1Item6: 'Gum Health Evaluations',

    s2Title: 'Professional Dental Cleaning',
    s2Desc: 'Plaque and tartar can build up even with excellent brushing habits. Professional dental cleaning removes harmful deposits, reduces the risk of gum disease, eliminates surface stains, and leaves your smile feeling fresh and healthy.',
    s2Item1: 'Fresher Breath',
    s2Item2: 'Healthier Gums',
    s2Item3: 'Reduced Risk of Gum Disease',
    s2Item4: 'Brighter Smile',
    s2Item5: 'Improved Oral Hygiene',

    s3Title: 'Cosmetic Dentistry',
    s3Desc: 'Your smile is one of your greatest assets. Our cosmetic treatments are designed to enhance appearance while preserving the health and function of your natural teeth.',
    s3Item1: 'Teeth Whitening',
    s3Item2: 'Dental Veneers',
    s3Item3: 'Smile Makeovers',
    s3Item4: 'Cosmetic Bonding',
    s3Item5: 'Tooth Contouring',
    s3Item6: 'Aesthetic Restorations',

    s4Title: 'Orthodontics',
    s4Desc: 'Properly aligned teeth improve both appearance and oral health. We offer orthodontic solutions that help correct bite problems, crowded teeth, spacing issues, and alignment concerns.',
    s4Item1: 'Straighter Teeth',
    s4Item2: 'Improved Bite',
    s4Item3: 'Easier Cleaning',
    s4Item4: 'Better Confidence',
    s4Item5: 'Enhanced Oral Health',

    s5Title: 'Dental Implants',
    s5Desc: 'Missing teeth affect both confidence and functionality. Dental implants provide a durable, natural-looking replacement that restores your smile while preserving jawbone health.',
    s5Item1: 'Permanent Tooth Replacement',
    s5Item2: 'Natural Appearance',
    s5Item3: 'Improved Speech',
    s5Item4: 'Better Chewing Ability',
    s5Item5: 'Long-Term Durability',

    s6Title: 'Root Canal Therapy',
    s6Desc: 'Modern root canal treatment is safe, effective, and designed to relieve pain while preserving your natural tooth whenever possible. Our specialists use advanced techniques that maximize comfort and improve long-term success.',

    s7Title: 'Pediatric Dentistry',
    s7Desc: "Children deserve specialized dental care in a positive and friendly environment. We help young patients develop healthy oral habits while making dental visits enjoyable and educational.",

    s8Title: 'Oral Surgery',
    s8Desc: 'When surgical treatment is necessary, our experienced team performs procedures with precision, safety, and patient comfort as the highest priorities.',
    s8Item1: 'Wisdom Tooth Removal',
    s8Item2: 'Surgical Extractions',
    s8Item3: 'Minor Oral Surgery',
    s8Item4: 'Infection Management',

    // Patient Experience
    expTag: 'Our Patient Experience',
    expTitle: 'Your Comfort Matters',
    expBody1: "We understand that many patients feel anxious about visiting the dentist. That's why we've created an environment focused on comfort, trust, and compassionate care.",
    expBody2: 'From your first consultation until your final follow-up appointment, our team is committed to ensuring you feel informed, supported, and confident throughout every step of your treatment.',

    // Treatment Process
    procTag: 'Our Treatment Process',
    procTitle: 'Simple, Transparent, and Personalized',
    step1Title: 'Step One: Consultation',
    step1Desc: 'We begin by listening carefully to your concerns, reviewing your dental history, and understanding your treatment goals.',
    step2Title: 'Step Two: Comprehensive Examination',
    step2Desc: 'Our specialists perform detailed examinations using modern diagnostic technology to accurately assess your oral health.',
    step3Title: 'Step Three: Personalized Treatment Plan',
    step3Desc: 'We explain every available treatment option and work with you to create a customized care plan that fits your needs and budget.',
    step4Title: 'Step Four: Expert Treatment',
    step4Desc: 'Our experienced professionals perform every procedure with precision, attention to detail, and patient comfort as top priorities.',
    step5Title: 'Step Five: Ongoing Care',
    step5Desc: 'We provide follow-up care, preventive guidance, and routine maintenance to help you enjoy lasting oral health.',

    // Commitment & Education
    commitTag: 'Our Commitment',
    commitTitle: 'Excellence You Can Trust',
    commitBody1: 'Every patient deserves honest advice, exceptional care, and treatments that prioritize long-term oral health.',
    commitBody2: 'At Zivora Speciality Dental Clinic, we are committed to building lifelong relationships by delivering consistent quality, compassionate service, and outstanding clinical results.',

    eduTag: 'Patient Education',
    eduTitle: 'Healthy Habits Create Healthy Smiles',
    eduBody: "Maintaining excellent oral health doesn't stop when you leave the clinic. We believe education is one of the most powerful tools in preventive dentistry.",
    eduGuideLabel: 'Our team provides practical guidance on:',
    edu1: 'Proper brushing techniques',
    edu2: 'Correct flossing methods',
    edu3: 'Nutrition for healthy teeth',
    edu4: 'Preventing gum disease',
    edu5: "Protecting children's oral health",
    edu6: 'Maintaining dental restorations',

    // Testimonials
    testTag: 'Testimonials',
    testTitle: 'What Our Patients Say',
    test1Name: 'Samantha Ross',
    test1Treatment: 'Smile Restoration',
    test1: 'The staff made me feel comfortable from the moment I arrived. My treatment was painless, and I couldn\'t be happier with my new smile.',
    test2Name: 'Marcus Vance',
    test2Treatment: 'Family Dental Care',
    test2: 'Professional, caring, and highly skilled. I finally found a dental clinic I can trust for my whole family.',
    test3Name: 'Elena Rostova',
    test3Treatment: 'Routine & Preventive Care',
    test3: 'The clinic is modern, clean, and welcoming. Every step of my treatment was explained clearly, making the experience stress-free.',

    // FAQ
    faqTag: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'How often should I visit the dentist?',
    faq1A: 'Regular dental check-ups every six months help detect problems early and maintain optimal oral health.',
    faq2Q: 'Do you provide emergency dental care?',
    faq2A: 'Yes. We strive to accommodate emergency cases as quickly as possible to relieve pain and address urgent dental issues.',
    faq3Q: 'Do you treat children?',
    faq3A: 'Absolutely. We provide gentle, age-appropriate dental care for children in a friendly and supportive environment.',
    faq4Q: 'Is cosmetic dentistry right for me?',
    faq4A: "During your consultation, we'll assess your goals and recommend treatments that best enhance your smile while maintaining healthy teeth.",

    // Final CTA
    ctaTitle: 'Your Smile Is Worth Investing In',
    ctaBody1: "A healthy smile improves confidence, supports overall well-being, and leaves a lasting impression. Whether you're due for a routine check-up or considering advanced dental treatment, our team is ready to help you achieve the smile you deserve.",
    ctaBody2: 'Take the first step toward healthier teeth and greater confidence by scheduling your appointment with Zivora Speciality Dental Clinic today.',
    btnScheduleAppt: 'Schedule Your Appointment',
    btnContactTeam: 'Contact Our Team',

    // Contact / Location info
    locHeaderTag: 'OUR LOCATION',
    locHeaderTitle: 'Visit Our Speciality Clinic',
    locHeaderDesc: 'Conveniently located with dedicated parking, state-of-the-art facilities, and compassionate care.',
    contactTitle: 'Contact Us & Clinic Info',
    addressTitle: 'Clinic Address',
    addressVal: '500 Park Avenue, Medical Arts Quad, Suite 500',
    hoursTitle: 'Operating Hours',
    hoursMonFri: 'Mon - Fri: 8:00 AM - 7:00 PM',
    hoursSat: 'Saturday: 9:00 AM - 5:00 PM',
    hoursSun: 'Sunday: Emergency Care Only',
    phoneTitle: 'Direct Lines',
    phoneVal: '(800) 555-ZIVORA',
    emergencyTitle: 'Emergency Line',
    emergencyVal: '(800) 555-9486',
    emailVal: 'care@zivoradental.com',
    valetParking: '• Complimentary Valet Parking at Entrance B',
    walkinTriage: '• Walk-in Triage Slots Reserved Daily',
    emergencyProtocol: '24/7 Dental Emergency Protocol:',
    directEmergencyLine: 'Direct Emergency Line:',

    // Footer
    footerDesc: 'World-class dental care through modern technology, experienced specialists, and personalized treatment plans.',
    copyright: '© 2026 Zivora Speciality Dental Clinic. All rights reserved.',
    quickNav: 'Quick Navigation',
    patientAccess: 'Patient Access',
    addisAbaba: 'Addis Ababa, Ethiopia',
    phoneLabel: 'Phone:',
    emailLabel: 'Email:',
    radiographyText: 'Clinical Precision & Digital Radiography',
    footerCare: 'Compassionate & Dedicated Care',

    // Modal - Booking
    bookingTitle: 'Schedule Your Appointment',
    stepServiceDoctor: '1. Service Selection',
    stepDateTime: '2. Date & Time',
    stepPatientInfo: '3. Patient Details',
    selectService: 'Select Dental Service',
    selectDoctor: 'Select Preferred Specialist',
    selectDate: 'Select Appointment Date',
    selectTimeSlot: 'Available Time Slots',
    fullName: 'Full Patient Name',
    emailAddress: 'Email Address',
    phoneNum: 'Phone Number',
    dob: 'Date of Birth',
    mrnOptional: 'Existing Medical Record Number (Optional)',
    visitReason: 'Reason for Visit / Special Needs',
    btnConfirmBooking: 'Confirm & Schedule Appointment',
    bookingSuccessTitle: 'Appointment Scheduled Successfully!',
    bookingSuccessMrn: 'Your Assigned Patient Record Number (MRN):',

    // Modal - Portal
    portalTitle: 'Patient Records Portal',
    mrnLabel: 'Patient Record Number (MRN)',
    passcodeLabel: '4-Digit Passcode',
    btnLoginPortal: 'Login to Portal',
    portalDemoNotice: 'Demo MRN: ZIV-1001 • Passcode: 1234',
    patientOverview: 'Patient Clinical Overview',
  },

  am: {
    // Brand
    brandName: 'ዚቮራ',
    brandSub: 'ልዩ የጥርስ ሕክምና ክሊኒክ',
    tagline: 'ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ በዘመናዊ ቴክኖሎጂ፣ በተመሰከረላቸው ስፔሻሊስቶች እና ለያንዳንዱ ታካሚ በተዘጋጀ የሕክምና እቅድ ዓለም አቀፍ ደረጃውን የጠበቀ አገልግሎት ይሰጣል።',

    // Nav
    navAbout: 'ስለ እኛ',
    navServices: 'አገልግሎቶች',
    navWhyUs: 'ለምን እኛን ይመርጣሉ',
    navProcess: 'የሕክምና ሂደት',
    navFaq: 'ጥያቄዎች እና አስተያየቶች',
    navContact: 'አድራሻችን',
    navPortal: 'የታካሚ ፖርታል',
    navBook: 'ቀጠሮ ይያዙ',

    // Hero
    heroTitle: 'እያንዳንዱ ፈገግታ ታሪክ አለው። የእርስዎ በበራስ መተማመን እንዲበራ ያድርጉ።',
    heroSub: 'የላቀ የጥርስ ሕክምና ከእውነተኛ እንክብካቤ ጋር የሚገናኝበት።',
    heroBody1: 'ፈገግታዎ ከጥርስ በላይ ነው—በእያንዳንዱ ውይይት፣ ፎቶግራፍ እና ዕድል ውስጥ ይዘውት የሚሄዱት በራስ መተማመን ነው። በዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ዘመናዊ የጥርስ ቴክኖሎጂን፣ የልዩ ባለሙያዎችን ልምድ እና ቅን እንክብካቤን በማጣመር ዕድሜ ልክ የሚቆይ ጤናማ እና ውብ ፈገግታ እንፈጥራለን።',
    heroBody2: 'ለቀድሞ ጥንቃቄ እንክብካቤ፣ የውበት ህክምና፣ ኦርቶዶንቲክስ፣ የጥርስ ተከላ ወይም ለተሟላ ፈገግታ ለውጥ ቢመጡ፣ በምቹ እና እንግዳ ተቀባይ አካባቢ ውስጥ ልዩ ውጤቶችን ለማስገኘት ቁርጠኞች ነን።',
    heroBody3: 'ምክንያቱም እያንዳንዱ በራስ መተማመንን የሚጨምር ፈገግታ በልዩ እንክብካቤ ይጀምራል።',
    btnBookAppt: 'ቀጠሮ ይያዙ',
    btnExploreServices: 'አገልግሎቶቻችንን ይመልከቱ',

    // About Us
    aboutTag: 'ስለ እኛ',
    aboutTitle: 'እንኳን ወደ ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ በደህና መጡ',
    aboutBody1: 'በዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ፣ ዘመናዊ ቴክኖሎጂንና በማስረጃ ላይ የተመሰረቱ ዘዴዎችን በመጠቀም ለሁሉም ዕድሜዎች አጠቃላይ የጥርስ ሕክምና እንሰጣለን።',
    aboutBody2: 'የእርስዎን ፍላጎት በጥንቃቄ በማዳመጥ፣ ግልጽ መረጃ፣ ከፍተኛ ምቾትና ቅን አገልግሎት የሚሰጥ ግላዊ የሕክምና እቅድ እናዘጋጃለን።',
    aboutBody3: 'የቀድሞ ጥንቃቄ፣ የውበት ማሻሻያ ወይም የላቁ የጥርስ ሕክምና ሂደቶች ካስፈልጉዎት፣ ልምድ ያለው ቡድናችን ዘላቂና በራስ መተማመንን የሚጨምር ፈገግታ እንዲኖርዎት ያገለግልዎታል።',
    aboutBody4: '',

    // Mission & Vision
    missionTag: 'ተልእኳችን',
    missionTitle: 'ለተሻለ የአፍ እና የጥርስ ጤና',
    missionBody1: 'ተልእኳችን የላቀ ቴክኖሎጂን፣ የሙያ ብቃትን እና እውነተኛ ቅንነትን ያጣመረ ልዩ የጥርስ ሕክምና መስጠት ነው። ክሊኒካችንን የሚጎበኙ እያንዳንዱን ታካሚ ጤና፣ ምቾት እና በራስ መተማመን እያሻሻልን አዎንታዊ የጥርስ ሕክምና ተሞክሮዎችን ለመፍጠር እንጥራለን።',
    missionBody2: 'የጥርስ ሕክምና ችግሮችን መፍታት ብቻ ሳይሆን ማስተማር፣ የወደፊት ችግሮችን መከላከል እና ታካሚዎች እድሜ ልክ የሚዘልቅ የአፍ እና የጥርስ ጤና እንዲኖራቸው ማስቻል አለበት ብለን እናምናለን።',

    visionTag: 'ራዕያችን',
    visionTitle: 'ለእያንዳንዱ ትውልድ ጤናማ ፈገግታን መፍጠር',
    visionBody: 'በልምድ የታገዙ የጥርስ ሕክምና መፍትሄዎችን በማቅረብ ከፍተኛ የክሊኒካዊ ደረጃዎችን ጥራት በመጠበቅ በታማኝነት እና በአስደናቂ ውጤቶች ላይ የተመሰረተ ክሊኒካችን ከታካሚዎቻችን ጋር ዘላቂ ግንኙነት በመገንባት ታማኝ ከሆኑ ልዩ የጥርስ ሕክምና ክሊኒኮች አንዱ ለመሆን እንሰራለን።',

    // Why Choose Us
    whyTag: 'ለምን እኛን ይመርጣሉ',
    whyTitle: 'ለእርስዎ የተዘጋጀ የጥርስ ሕክምናን ይለማመዱ',
    whySub: 'ትክክለኛውን የጥርስ ሕክምና ክሊኒክ መምረጥ አስፈላጊ ውሳኔ ነው። በዚቮራ፣ እያንዳንዱ ታካሚ በደጃችን ከገባበት ቅጽበት ጀምሮ ልዩ እንክብካቤ ማግኘቱን ለማረጋገጥ ሙያዊ ብቃትን፣ ቴክኖሎጂን እና ግላዊ ትኩረትን እናበረክታለን።',
    why1Title: 'ግላዊ እንክብካቤ',
    why1Desc: 'እያንዳንዱ ታካሚ ለአፍ እና የጥርስ ጤንነቱ፣ ለአኗኗሩ እና ለግቦቹ የተዘጋጀ የሕክምና እቅድ ያገኛል።',
    why2Title: 'ልምድ ያላቸው ባለሙያዎች',
    why2Desc: 'የጥርስ ሕክምና ባለሙያዎቻችን ከፍተኛ ክሊኒካዊ እንክብካቤ ለመስጠት ከዘመናዊ ቴክኒኮች እና ከአለም አቀፍ ምርጥ ተሞክሮዎች ጋር የተገናኙ ናቸው።',
    why3Title: 'ዘመናዊ የጥርስ ሕክምና ቴክኖሎጂ',
    why3Desc: 'የምርመራ ትክክለኛነትን፣ የሕክምና ውጤታማነትን፣ የታካሚ ምቾትን እና የረጅም ጊዜ ውጤቶችን የሚያሻሽሉ ዘመናዊ መሣሪያዎች ላይ ኢንቨስት እናደርጋለን።',
    why4Title: 'ምቹ አካባቢ',
    why4Desc: 'ክሊኒካችን ታካሚዎች በሁሉም የሕክምና ደረጃዎች ዘና እያሉ እንዲታከሙ፣ ሰላማዊ እና ተቀባይነት እንዲኖራቸው ተደርጎ የተዘጋጀ ነው።',
    why5Title: 'አጠቃላይ አገልግሎቶች',
    why5Desc: 'ከመደበኛ ምርመራ እስከ ውስብስብ የእድሳት እና የውበት ሂደቶች፣ አጠቃላይ የጥርስ ሕክምናን በአንድ ጣሪያ ስር እንሰጣለን።',
    why6Title: 'በቀድሞ ጥንቃቄ ላይ ትኩረት ማድረግ',
    why6Desc: 'የቀድሞ ጥንቃቄ ጥርስ ሕክምና ለምናደርገው ነገር ሁሉ መሠረት ነው። ቀድሞ ማወቅ እና መደበኛ እንክብካቤ ጤናማ ፈገግታን ለመጠበቅ ቁልፍ ናቸው ብለን እናምናለን።',

    // Services
    servTag: 'አገልግሎቶቻችን',
    servTitle: 'ለእያንዳንዱ ፈገግታ አጠቃላይ የጥርስ ሕክምና መፍትሄዎች',

    s1Title: 'መደበኛ የጥርስ ሕክምና (General Dentistry)',
    s1Desc: 'መደበኛ የጥርስ ምርመራዎች ጤናማ ጥርስ እና ድድን ለመጠበቅ አስፈላጊ ናቸው። አጠቃላይ የጥርስ ምርመራዎቻችን ሊከሰቱ የሚችሉ ስጋቶችን ቀድመን እንድንለይ ይረዱናል፣ ይህም ለወደፊቱ ውስብስብ ችግሮችን ለመከላከል ይረዳል።',
    s1Item1: 'መደበኛ የጥርስ ምርመራዎች',
    s1Item2: 'የአፍ እና የጥርስ ጤና ምዘና',
    s1Item3: 'የጥርስ ሙሌት (Fillings)',
    s1Item4: 'የቀድሞ ጥንቃቄ ህክምናዎች',
    s1Item5: 'ጥርስ መንቀል',
    s1Item6: 'የድድ ጤና ምዘና',

    s2Title: 'ሙያዊ የጥርስ ማጽዳት (Dental Cleaning)',
    s2Desc: 'ጥሩ የመቦረሽ ልምድ ቢኖርዎትም ፕላክ እና ታርታር ሊከማቹ ይችላሉ። ሙያዊ የጥርስ ማጽዳት ጎጂ ነገሮችን ያስወግዳል፣ የድድ በሽታ ስጋትን ይቀንሳል፣ እና ፈገግታዎ ፍሬሽ እንዲሆን ያደርጋል።',
    s2Item1: 'ፍሬሽ አየር መተንፈስ',
    s2Item2: 'ጤናማ ድድ',
    s2Item3: 'የድድ በሽታ ስጋትን መቀነስ',
    s2Item4: 'ብሩህ ፈገግታ',
    s2Item5: 'የተሻለ የአፍ ንጽህና',

    s3Title: 'የውበት ጥርስ ሕክምና (Cosmetic Dentistry)',
    s3Desc: 'ፈገግታዎ ትልቅ ሀብትዎ ነው። የውበት ህክምናዎቻችን የተፈጥሮ ጥርስዎን ጤና እና ተግባር ሳይነኩ መልክዎን ለማሻሻል የተዘጋጁ ናቸው።',
    s3Item1: 'ጥርስ ማንጣጣት (Whitening)',
    s3Item2: 'ዴንታል ቬኒርስ (Veneers)',
    s3Item3: 'የፈገግታ እድሳት (Smile Makeovers)',
    s3Item4: 'ኮስሞቲክ ቦንዲንግ',
    s3Item5: 'የጥርስ ቅርጽ ማስተካከያ',
    s3Item6: 'የውበት ህክምና እድሳት',

    s4Title: 'የጥርስ ማስተካከያ (Orthodontics)',
    s4Desc: 'ትክክለኛ መስመር ያላቸው ጥርሶች መልክን እና የቃል ጤናን ያሻሽላሉ። የጥርስ መደራረብ፣ የቦታ እና የመስመር ችግሮችን የሚያስተካክሉ የኦርቶዶንቲክስ መፍትሄዎችን እንሰጣለን።',
    s4Item1: 'ቀጥ ያሉ ጥርሶች',
    s4Item2: 'የተሻሻለ ንክሻ',
    s4Item3: 'ቀላል የማጽዳት ሂደት',
    s4Item4: 'የተሻለ በራስ መተማመን',
    s4Item5: 'የተሻሻለ የቃል ጤና',

    s5Title: 'የጥርስ ተክሎች (Dental Implants)',
    s5Desc: 'የጎደሉ ጥርሶች በራስ መተማመንን እና የመብላት ችሎታን ይነካሉ። የጥርስ ተክሎች የታገዘ ቋሚ እና የተፈጥሮ መልክ ያለው ጥርስ ተክለው መንጋጋን ይጠብቃሉ።',
    s5Item1: 'ቋሚ የጥርስ ምትክ',
    s5Item2: 'የተፈጥሮ መልክ',
    s5Item3: 'የተሻሻለ አነጋገር',
    s5Item4: 'የተሻለ የመብላት ችሎታ',
    s5Item5: 'የረጅም ጊዜ ዘላቂነት',

    s6Title: 'የስር ህክምና (Root Canal Therapy)',
    s6Desc: 'ዘመናዊ የስር ህክምና ደህንነቱ የተጠበቀ፣ ውጤታማ እና ህመምን በማስታገስ የተፈጥሮ ጥርስዎን የሚጠብቅ ነው። ስፔሻሊስቶቻችን ምቾትን እና የረጅም ጊዜ ስኬትን የሚጨምሩ ዘመናዊ ቴክኒኮችን ይጠቀማሉ።',

    s7Title: 'የህጻናት ጥርስ ሕክምና (Pediatric Dentistry)',
    s7Desc: 'ህጻናት በሚያበረታታ እና ወዳጃዊ በሆነ አካባቢ ውስጥ ልዩ የጥርስ እንክብካቤ ይገባቸዋል። ታናናሽ ታካሚዎች ጤናማ የቃል ልምዶችን እንዲያዳብሩ እንረዳቸዋለን።',

    s8Title: 'የቃል ቀዶ ሕክምና (Oral Surgery)',
    s8Desc: 'የቀዶ ሕክምና አስፈላጊ በሚሆንበት ጊዜ፣ ልምድ ያለው ቡድናችን ሂደቶችን በጥንቃቄ፣ በደህንነት እና በታካሚ ምቾት ቅድሚያ በመስጠት ያከናውናል።',
    s8Item1: 'የጥበብ ጥርስ ማውጣት (Wisdom Teeth)',
    s8Item2: 'የቀዶ ሕክምና ጥርስ ማውጣት',
    s8Item3: 'አነስተኛ የቃል ቀዶ ሕክምና',
    s8Item4: 'የኢንፌክሽን ቁጥጥር',

    // Patient Experience
    expTag: 'የታካሚዎቻችን ተሞክሮ',
    expTitle: 'ምቾትዎ ያሳስበናል',
    expBody1: 'ብዙ ታካሚዎች ወደ ጥርስ ሐኪም ሲመጡ ጭንቀት እንደሚሰማቸው እንረዳለን። ለዚህ ነው በምቾት፣ በእምነት እና በቅንነትን ላይ ያተኮረ አካባቢ የፈጠርነው።',
    expBody2: 'ከሚጀመርበት ምክክር ጀምሮ እስከ መጨረሻው ክትትል ድረስ፣ ቡድናችን በህክምናዎ ውስጥ ሙሉ መረጃ እንዲኖርዎት፣ ድጋፍ እንዲያገኙ እና በራስ መተማመን እንዲሰማዎት ለማድረግ ቁርጠኛ ነው።',

    // Treatment Process
    procTag: 'የሕክምና ሂደታችን',
    procTitle: 'ቀላል፣ ግልጽ እና ለእርስዎ የተዘጋጀ',
    step1Title: 'ደረጃ አንድ: ምክክር',
    step1Desc: 'የእርስዎን ስጋቶች በጥንቃቄ በመስማት፣ የጥርስ ሕክምና ታሪክዎን በመገምገም እና የሕክምና ግቦችዎን በመረዳት እንጀምራለን።',
    step2Title: 'ደረጃ ሁለት: አጠቃላይ ምርመራ',
    step2Desc: 'ስፔሻሊስቶቻችን የቃል ጤናዎን በትክክል ለመገምገም ዘመናዊ የምርመራ ቴክኖሎጂን በመጠቀም ዝርዝር ምርመራዎችን ያደርጋሉ።',
    step3Title: 'ደረጃ ሦስት: ግላዊ የሕክምና እቅድ',
    step3Desc: 'እያንዳንዱን የሕክምና አማራጭ በመግለጽ ከእርስዎ ፍላጎት እና በጀት ጋር የሚስማማ የሕክምና እቅድ አብረን እናዘጋጃለን።',
    step4Title: 'ደረጃ አራት: ባለሙያ ሕክምና',
    step4Desc: 'ልምድ ያላቸው ባለሙያዎቻችን እያንዳንዱን ሂደት በጥንቃቄ፣ በትኩረት እና በታካሚ ምቾት ቅድሚያ በመስጠት ያከናውናሉ።',
    step5Title: 'ደረጃ አምስት: निरंतर እንክብካቤ',
    step5Desc: 'ዘላቂ የቃል ጤና እንዲኖርዎት የክትትል እንክብካቤ፣ የመከላከያ መመሪያ እና መደበኛ ጥገና እንሰጣለን።',

    // Commitment & Education
    commitTag: 'ቁርጠኝነታችን',
    commitTitle: 'የሚያምኑበት የላቀ ጥራት',
    commitBody1: 'እያንዳንዱ ታካሚ ታማኝ ምክር፣ ልዩ እንክብካቤ እና ለረጅም ጊዜ የቃል ጤና ቅድሚያ የሚሰጡ ህክምናዎች ይገባዋል።',
    commitBody2: 'በዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ፣ የተረጋጋ ጥራትን፣ ሩህሩህ አገልግሎትን እና አስደናቂ ክሊኒካዊ ውጤቶችን በማቅረብ ዘላቂ ግንኙነቶችን ለመገንባት እንሰራለን።',

    eduTag: 'የታካሚ ትምህርት',
    eduTitle: 'ጤናማ ልምዶች ጤናማ ፈገግታን ይፈጥራሉ',
    eduBody: 'ጥሩ የቃል ጤናን መጠበቅ ከክሊኒኩ ሲወጡ አያቆምም። ትምህርት በመከላከያ ጥርስ ሕክምና ውስጥ ካሉ በጣም शक्तिशाली መሣሪያዎች አንዱ እንደሆነ እናምናለን።',
    eduGuideLabel: 'ቡድናችን በሚከተሉት ላይ ተግባራዊ መመሪያ ይሰጣል:',
    edu1: 'ትክክለኛ የጥርስ መቦረሽ ቴክኒኮች',
    edu2: 'ትክክለኛ የፍሎስ አጠቃቀም',
    edu3: 'ለጤናማ ጥርስ የሚጠቅም አመጋገብ',
    edu4: 'የድድ በሽታን መከላከል',
    edu5: 'የህጻናትን የቃል ጤና መጠበቅ',
    edu6: 'የጥርስ ህክምናዎችን መጠበቅ',

    // Testimonials
    testTag: 'የታካሚዎች አስተያየት',
    testTitle: 'ታካሚዎቻችን ምን ይላሉ',
    test1Name: 'ሳምራዊት ረጋሳ',
    test1Treatment: 'የፈገግታ እድሳት',
    test1: 'ከደረስኩበት ቅጽበት ጀምሮ ሰራተኞቹ ምቾት እንዲሰማኝ አድርገውኛል። ሕክምናዬ ህመም የሌለው ነበር፣ እና በአዲሱ ፈገግታዬ እጅግ ደስተኛ ነኝ።',
    test2Name: 'ሚካኤል ተስፋዬ',
    test2Treatment: 'የቤተሰብ ጥርስ ሕክምና',
    test2: 'ሙያዊ፣ እንከባካቢ እና ከፍተኛ ችሎታ አላቸው። በመጨረሻ ለሙሉ ቤተሰቤ የማምነውን የጥርስ ክሊኒክ አግኝቻለሁ።',
    test3Name: 'ኤፍራታ ዮናስ',
    test3Treatment: 'መደበኛ እና መከላከያ እንክብካቤ',
    test3: 'ክሊኒኩ ዘመናዊ፣ ንጹህ እና ተቀባይ ነው። እያንዳንዱ የሕክምናዬ ደረጃ በግልጽ ተብራርቷል፣ ይህም ተሞክሮውን ከጭንቀት ነፃ አድርጎታል።',

    // FAQ
    faqTag: 'ተደጋጋሚ ጥያቄዎች',
    faqTitle: 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
    faq1Q: 'ምን ያህል ጊዜ ወደ ጥርስ ሐኪም መሄድ አለብኝ?',
    faq1A: 'በየስድስት ወሩ መደበኛ የጥርስ ምርመራ ማድረግ ችግሮችን ቀድሞ ለመለየት እና ጥሩ የአፍ እና የጥርስ ጤናን ለመጠበቅ ይረዳል።',
    faq2Q: 'የአደጋ ጊዜ የጥርስ ሕክምና ይሰጣሉ?',
    faq2A: 'አዎ። ህመምን ለማስታገስ እና አስቸኳይ የጥርስ ችግሮችን ለመፍታት የአደጋ ጊዜ ጉዳዮችን በተቻለ ፍጥነት እናስተናግዳለን።',
    faq3Q: 'ህጻናትን ታከማላችሁ?',
    faq3A: 'አዎን ለህጻናት በሚያበረታታ እና ወዳጃዊ በሆነ አካባቢ ውስጥ ረጋ ያለ፣ ለዕድሜያቸው ተስማሚ የሆነ የጥርስ እንክብካቤ እንሰጣለን።',
    faq4Q: 'የውበት ጥርስ ሕክምና ለእኔ ትክክለኛ ነው?',
    faq4A: 'በምክክርዎ ወቅት ግቦችዎን በመገምገም ጤናማ ጥርስዎን ሳይነኩ ፈገግታዎን የሚጨምሩ ህክምናዎችን እንመክራለን።',

    // Final CTA
    ctaTitle: 'ለፈገግታዎ ኢንቨስት ያድርጉ',
    ctaBody1: 'ማመንን ያሻሽላል፣ አጠቃላይ ጤንነትንም ያሳድጋል ።የመደበኛ ምርመራ ጊዜዎ ደርሶ ቢሆንም ወይም የላቀ የጥርስ ሕክምና እያሰቡ ከሆነ፣ ቡድናችን የሚገባዎትን ፈገግታ እንዲያገኙ ለመርዳት ዝግጁ ነው።',
    ctaBody2: 'ዛሬውኑ ከዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ጋር ቀጠሮ በመያዝ ወደ ተሻለ ጤናማ ጥርስ እና በራስ መተማመን ለማሳደግ የመጀመሪያውን እርምጃ ይውሰዱ።',
    btnScheduleAppt: 'ቀጠሮ ይያዙ',
    btnContactTeam: 'ቡድናችንን ያነጋግሩ',

    // Contact / Location info
    locHeaderTag: 'አድራሻችን',
    locHeaderTitle: 'ክሊኒካችንን ይጎብኙ',
    locHeaderDesc: 'በማዕከላዊ ስፍራ የሚገኝ፣ ለአጠቃቀም ምቹ፣ ዘመናዊ መሣሪያዎችና ቅን አስተናጋጆች ያሉት ልዩ የጥርስ ክሊኒክ።',
    contactTitle: 'አድራሻችን እና የክሊኒክ መረጃ',
    addressTitle: 'የክሊኒኩ አድራሻ',
    addressVal: '500 ፓርክ አቬኑ፣ ሜዲካል አርትስ ኳድ፣ ቢሮ 500',
    hoursTitle: 'የስራ ሰዓት',
    hoursMonFri: 'ሰኞ - አርብ: ከጠዋቱ 2:00 - 1:00 ምሽት',
    hoursSat: 'ቅዳሜ: ከጠዋቱ 3:00 - 11:00 ምሽት',
    hoursSun: 'እሁድ: ለአስቸኳይ ጊዜ ብቻ',
    phoneTitle: 'ቀጥታ ስልክ',
    phoneVal: '(800) 555-ZIVORA',
    emergencyTitle: 'የአደጋ ጊዜ ስልክ',
    emergencyVal: '(800) 555-9486',
    emailVal: 'care@zivoradental.com',
    valetParking: '• ነፃ የቫሌት ፓርኪንግ በበራፍ ቢ ይገኛል',
    walkinTriage: '• በየቀኑ ለአስቸኳይ ጊዜ የተያዙ ቦታዎች አሉ',
    emergencyProtocol: 'የ24/7 አደጋ ጊዜ ህክምና ፕሮቶኮል:',
    directEmergencyLine: 'የቀጥታ አደጋ ጊዜ ስልክ:',

    // Footer
    footerDesc: 'በዘመናዊ ቴክኖሎጂ፣ በተመሰከረላቸው ስፔሻሊስቶች እና ለያንዳንዱ ታካሚ በተዘጋጀ የሕክምና እቅድ ዓለም አቀፍ ደረጃውን የጠበቀ የጥርስ ሕክምና።',
    copyright: '© 2026 ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ። መብቱ በሕግ የተጠበቀ ነው።',
    quickNav: 'ፈጣን አሰሳ',
    patientAccess: 'የታካሚ መገልገያዎች',
    addisAbaba: 'አዲስ አበባ፣ ኢትዮጵያ',
    phoneLabel: 'ስልክ:',
    emailLabel: 'ኢሜይል:',
    radiographyText: 'ክሊኒካዊ ትክክለኛነት እና ዲጂታል ራዲዮግራፊ',
    footerCare: 'ቅን እና ተንከባካቢ አገልግሎት',

    // Modal - Booking
    bookingTitle: 'ቀጠሮዎን ይያዙ',
    stepServiceDoctor: '1. አገልግሎት መምረጥ',
    stepDateTime: '2. ቀን እና ሰዓት',
    stepPatientInfo: '3. የታካሚ መረጃ',
    selectService: 'የጥርስ ሕክምና አገልግሎት ይምረጡ',
    selectDoctor: 'የሚፈልጉትን ስፔሻሊስት ይምረጡ',
    selectDate: 'የቀጠሮ ቀን ይምረጡ',
    selectTimeSlot: 'የተመቹ ሰዓቶች',
    fullName: 'ሙሉ የታካሚ ስም',
    emailAddress: 'ኢሜይል አድራሻ',
    phoneNum: 'ስልክ ቁጥር',
    dob: 'የትውልድ ቀን',
    mrnOptional: 'የነበረ የታካሚ መለያ (MRN) - ካለ',
    visitReason: 'የመጡበት ምክንያት',
    btnConfirmBooking: 'ቀጠሮውን ያረጋግጡ',
    bookingSuccessTitle: 'ቀጠሮዎ በተሳካ ሁኔታ ተይዟል!',
    bookingSuccessMrn: 'የተመደበልዎ የታካሚ መለያ ቁጥር (MRN):',

    // Modal - Portal
    portalTitle: 'የታካሚ መዝገብ ፖርታል',
    mrnLabel: 'የታካሚ መለያ ቁጥር (MRN)',
    passcodeLabel: '4-አሃዝ ሚስጥር ቁጥር (Passcode)',
    btnLoginPortal: 'ወደ ፖርታል ግባ',
    portalDemoNotice: 'የሙከራ መለያ: ZIV-1001 • ሚስጥር ቁጥር: 1234',
    patientOverview: 'የታካሚ ሕክምና አጠቃላይ መረጃ',
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('am');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    if (lang === 'am') {
      document.documentElement.classList.add('amharic-font');
    } else {
      document.documentElement.classList.remove('amharic-font');
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
