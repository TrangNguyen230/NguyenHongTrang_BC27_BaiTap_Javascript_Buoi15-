// ========================= Bài 1 ================================
function tax() {
  // DOM các giá trị nhập
  var name = document.getElementById("name").value;
  var yearSalary = +document.getElementById("yearSalary").value;
  var dependentPerson = +document.getElementById("dependentPerson").value;

  // Tính lương chịu thuế bằng cách gọi hàm
  var taxableIncome = taxableIncomeCal (yearSalary, dependentPerson);

  // Tính thuế thu nhập bằng cách gọi hàm
  var incomeTax = incomeTaxCal(taxableIncome);

  //Hiển thị kết quả
  document.getElementById("result").innerHTML = `<p> Họ tên: ${name} </p>
  <p> Thuế thu nhập cá nhân: ${incomeTax.toLocaleString()} triệu </p> `;
}

// Hàm tính lương chịu thuế
function taxableIncomeCal (yearSalary, dependentPerson) {
  var taxableIncome = 0;
  taxableIncome += yearSalary - 4 - dependentPerson * 1.6;

  return taxableIncome
}

// Hàm tính thuế thu nhập
function incomeTaxCal(taxableIncome) {
  var incomeTax = 0;
  if (taxableIncome <= 60) {
    incomeTax = taxableIncome * 0.05;
  } else if (taxableIncome <= 120) {
    incomeTax = taxableIncome * 0.1;
  } else if (taxableIncome <= 210) {
    incomeTax = taxableIncome * 0.15;
  } else if (taxableIncome <= 384) {
    incomeTax = taxableIncome * 0.2;
  } else if (taxableIncome <= 624) {
    incomeTax = taxableIncome * 0.25;
  } else if (taxableIncome <= 960) {
    incomeTax = taxableIncome * 0.3;
  } else if (taxableIncome > 960) {
    incomeTax = taxableIncome * 0.35;
  }

  return incomeTax;
}







//==================================== Bài 2 ===================================

function cableCost() {
  // DOM các giá trị nhập
  var household = document.getElementById("household").checked;
  var company = document.getElementById("company").checked;
  var customer = document.getElementById("customer").value;
  var VIPchanelNumber = +document.getElementById("VIPchanelNumber").value;
  var connectNumber = +document.getElementById("connectNumber").value;

  // Xử lý tính toán bằng cách gọi hàm
  var householdCost = householdCase(household, VIPchanelNumber);
  var companyCost = companyCase(company, VIPchanelNumber, connectNumber);

  // Hiển thị kết quả
  if (household) {
    document.getElementById(
      "inputCost"
    ).innerHTML = `<p> Mã khách hàng: ${customer} </p>
  <p> Tiền cáp phải trả: ${householdCost.toLocaleString()}$ </p>`;
  } else if (company) {
    document.getElementById(
      "inputCost"
    ).innerHTML = `<p> Mã khách hàng: ${customer} </p>
  <p> Tiền cáp phải trả: ${companyCost.toLocaleString()}$ </p>`;
  }
}

// Hàm tính tiền cáp đối với nhà dân
function householdCase(household, VIPchanelNumber) {
  var householdCost = 0;
  householdCost = 4.5 + 20.5 + 7.5 * VIPchanelNumber;

  return householdCost;
}

// Hàm tính tiền cáp đối với doanh nghiệp
function companyCase(company, VIPchanelNumber, connectNumber) {
  var companyCost = 0;
  if (connectNumber <= 10) {
    companyCost = 15 + 50 * VIPchanelNumber + 75;
  } else {
    companyCost = 15 + 50 * VIPchanelNumber + 75 + 5 * (connectNumber - 10);
  }
  
  return companyCost;
}

// Hàm xử lý hiện mục Số kết nối khi chọn doanh nghiệp
function showUp() {
  var company = document.getElementById("company").checked;
  document.getElementById("connectShowUp").style.display = "block";
}

// Hàm xử lý ẩn mục Số kết nối khi chọn nhà dân
function showOff() {
  var household = document.getElementById("company").checked;
  document.getElementById("connectShowUp").style.display = "none";
}
