const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Bubber;Archit;;;',
  'FN:Archit Bubber',
  'TITLE:Cloud Developer Intern',
  'ORG:Hewlett Packard Enterprise',
  'EMAIL;type=INTERNET;type=WORK:architbubber@gmail.com',
  'TEL;type=CELL:+16236328640',
  'URL:https://architbubber.github.io',
  'X-SOCIALPROFILE;type=linkedin:https://linkedin.com/in/architbubber',
  'X-SOCIALPROFILE;type=github:https://github.com/architbubber',
  'ADR;type=WORK:;;Tempe;Arizona;;;USA',
  'END:VCARD',
].join('\n');

document.querySelector('[data-testid="save-contact-button"]')?.addEventListener('click', () => {
  const file = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Archit_Bubber.vcf';
  link.click();
  URL.revokeObjectURL(url);
});
