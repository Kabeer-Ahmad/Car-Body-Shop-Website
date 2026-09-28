// The Maps query pairs the business name with the full address so Google
// resolves it to the Car Body Shop listing, not just a street pin.
const MAPS_QUERY = encodeURIComponent('Car Body Shop, Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN');

export const BUSINESS_DETAILS = {
  name: "Car Body Shop",
  address: "Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN",
  phone: "07471512557",
  email: "carbodyshopltd@gmail.com",
  city: "Rochdale",
  whatsapp: "447471512557", // International format without +
  mapsLink: `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`,
  mapsPlaceLink: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
  mapsDirectionLink: `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`,
};
