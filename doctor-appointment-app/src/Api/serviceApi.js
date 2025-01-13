

export const fetchServices = () => {
    return new Promise((resolve) => {
      const servicesData = [
        {
          id: 1,
          name: 'CT Scan',
          description: 'A diagnostic imaging technique.',
          imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2480666695/display_1500/stock-photo-patient-in-white-clothes-undergoes-magnetic-resonance-imaging-scan-laying-down-on-bed-for-ct-or-2480666695.jpg',
        },
        {
          id: 2,
          name: 'Dental Care',
          description: 'Comprehensive dental services.',
          imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2476215549/display_1500/stock-photo-face-hands-and-tools-with-woman-at-dentist-for-oral-hygiene-or-dental-care-appointment-closeup-2476215549.jpg',
        },
        {
          id: 3,
          name: 'MRI',
          description: 'Magnetic Resonance Imaging for accurate diagnostics.',
          imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2520053913/display_1500/stock-photo-the-patient-lies-inside-an-mri-or-ct-machine-where-the-scan-is-performed-this-high-tech-equipment-2520053913.jpg',
        },
        {
          id: 4,
          name: 'Lab Test',
          description: 'A variety of lab tests available.',
          imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2456036601/display_1500/stock-photo-biotechnology-research-laboratory-female-asian-doctor-working-with-test-tubes-to-study-effect-of-2456036601.jpg',
        },
      ];
  
      setTimeout(() => {
        resolve(servicesData); //to  delay 
      }, 1000); 
    });
  };
  