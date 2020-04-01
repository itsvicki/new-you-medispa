export const defaultPageMetaDescription = `Based in Newcastle-upon-Tyne, New You Medispa specialise in cosmetic treatments for you including Muscle Relaxing, Dermal Fillers, Dermaroller, TCA Peels, Glycolic Skin Peels, Skin Tightening, Fractional Skin Resurfacing treatments.`;

export const fileNotFound = () => {
  const metaTag = document.createElement('meta');
  metaTag.setAttribute('http-equiv', 'status');
  metaTag.setAttribute('content', '404');
  document.head.appendChild(metaTag);
};