// ==================== Bài 1 ===========================
function examResult() {
  // DOM các giá trị nhập
  var benchMark = +document.getElementById("benchMark").value;
  var examScore1 = +document.getElementById("examScore1").value;
  var examScore2 = +document.getElementById("examScore2").value;
  var examScore3 = +document.getElementById("examScore3").value;
  var area = document.getElementById("area").value;
  var target = document.getElementById("target").value;

  // Xử lý tính điểm bằng cách gọi các hàm
  var areaScore = areaCal(area);
  var targetScore = targetCal(target);
  var examScore = examScoreCal(examScore1, examScore2, examScore3);
  var totalScore = areaScore + targetScore + examScore;

  // Hiển thị kết quả
  resultShow(examScore1, examScore2, examScore3, benchMark, totalScore);
}

// Hàm tính điểm ưu tiên khu vực
function areaCal(area) {
  switch (area) {
    case "A":
      return 2;
      break;
    case "B":
      return 1;
      break;
    case "C":
      return 0.5;
      break;
    default:
      return 0;
      break;
  }
}

// Hàm tính điểm đối tượng ưu tiên 
function targetCal(target) {
  switch (target) {
    case "1":
      return 2.5;
      break;
    case "2":
      return 1.5;
      break;
    case "3":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

// Hàm tính tổng điểm 3 môn
function examScoreCal(examScore1, examScore2, examScore3) {
  var examScore = 0;
  examScore = examScore1 + examScore2 + examScore3;

  return examScore;
}

// Hàm hiển thị kết quả
function resultShow(examScore1, examScore2, examScore3, benchMark, totalScore) {
  if (!examScore1 || !examScore2 || !examScore3) {
    document.getElementById("inputResult").innerHTML =
      "Bạn đã trượt do có môn 0 điểm";
  } else {
    if (totalScore >= benchMark) {
      document.getElementById("inputResult").innerHTML = `Bạn đã đỗ với tổng điểm là ${totalScore}`;
    } else {
      document.getElementById("inputResult").innerHTML = `Bạn đã trượt với tổng điểm là ${totalScore}`;
    }
  }
}




//======================= Bài 2 ==============================

function totalCost() {
  // DOM các giá trị nhập
  var name = document.getElementById("name").value;
  var Kw = +document.getElementById("Kw").value;

  // Xử lý tính toán bằng cách gọi hàm
  var Kwcost = costCalculate(Kw);

  // Hiển thị kết quả
  document.getElementById(
    "inputCost"
  ).innerHTML = `Tiền điện của ${name} là ${Kwcost.toLocaleString()} VND`;
}

// Hàm tính giá tiền theo số Kw
function costCalculate(Kw) {
  var Kwcost = 0;
  if (Kw <= 50) {
    Kwcost += Kw * 500;
  } else if (Kw <= 100) {
    Kwcost += 50 * 500 + (Kw - 50) * 650;
  } else if (Kw <= 200) {
    Kwcost += 50 * 500 + 50 * 650 + (Kw - 100) * 850;
  } else if (Kw <= 350) {
    Kwcost += 50 * 500 + 50 * 650 + 100 * 850 + (Kw - 200) * 1100;
  } else if (Kw > 350) {
    Kwcost += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Kw - 350) * 1300;
  }

  return Kwcost;
}
