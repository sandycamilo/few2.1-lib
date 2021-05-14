const dateFormat = require('dateformat');
const data = require('./data.json');

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function purchasedDate() {
  const pur = data[0].purchased;
  const dateOfPurchase = dateFormat(pur, 'fullDate');
  return `Purchased: ${dateOfPurchase}`;
}

function lastPayment() {
  const time = new Date(data[0].lastpayment);
  const start = new Date();
  const payment = time.getDate() - start.getDate();
  return `Last payment: ${payment} months ago`;
}

function formatPhoneNumber(phone) {
  const phonenumber = phone.replace(/[^\d]/g, '');
  if (phonenumber.length === 10) {
    return `Phone: ${phonenumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}`;
  }
}

// console.log(`Name: ${capitalize(data[0].first_name)} ${capitalize(data[0].last_name)}`);
// console.log(purchasedDate());
// console.log(lastPayment());
// console.log(formatPhoneNumber(`Phone: ${data[0].phone}`));

module.exports.capitalize = capitalize;
module.exports.purchasedDate = purchasedDate;
module.exports.lastPayment = lastPayment;
module.exports.formatPhoneNumber = formatPhoneNumber;
