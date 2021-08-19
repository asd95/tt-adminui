const searchUser = (res, data) => {
  const results = res
    .filter((item) => {
      if (data.idnp === undefined || data.idnp === "") {
        return item;
      }
      return item.idnp === data.idnp;
    })
    .filter((item) => {
      if (data.tel === undefined || data.tel === "") {
        return item;
      }
      return item.tel === data.tel;
    })
    .filter((item) => {
      if (data.date === undefined || data.date === null) {
        return item;
      }

      let dateFormatData = getStringFormatDate(data.date).split("/");
      dateFormatData = [
        ...dateFormatData.slice(0, 2),
        dateFormatData.pop().slice(-2),
      ].join("/");
      const dateFormatItem = item["last transaction"].split(" ")[1];
      return dateFormatData === dateFormatItem;
    });
  return results;
};

const filterRangeDate = (res, dateRange) => {
  // преобразую даты в нужном мне формате для дальнейшей работы
  const startDate = getStringFormatDate(dateRange[0].startDate);
  const endDate = getStringFormatDate(dateRange[0].endDate);
  const arrDateRange = filterDate(res, startDate, endDate);
  return getCommData({
    stDate: dateRange[0].startDate,
    edDate: dateRange[0].endDate,
    arr: arrDateRange,
    res,
  });
};

function defaultRangeDate(res) {
  const arrDateRange = res.filter((item, idx) => idx > res.length - 6);
  const arrays = getCommData({
    stDate: parseDate(arrDateRange[0].date),
    edDate: parseDate(arrDateRange[arrDateRange.length - 1].date),
    arr: arrDateRange,
    res,
  });

  return arrays;
}

function getCommData({ stDate, edDate, arr, res }) {
  // // получаю массив данных, который соответствует диапазону 30 дней до начальной даты введеной пользователем.
  const priorStartDate = getNeedfulDate(30, stDate);
  const arrPriorStartDate = filterDate(
    res,
    priorStartDate,
    getNeedfulDate(1, stDate)
  );
  // преобразую строковые даты в новом формате для отображения на странице
  const fsd = formattedDate(stDate);
  const fed = formattedDate(edDate);
  // получаю дни которые соответствует диапазону введеный пользователем
  const lastDays = dateDiff(edDate, stDate);
  // число установок на устройствах которые активны
  const countActiveInst = findInstActive(arr);
  const countInstPrior = findInstActive(arrPriorStartDate);
  // соотношение между установками в диапазоне между которым был введен пользователем и предыдущих 30 дней.
  const percent = findPercent(countActiveInst, countInstPrior);

  return [
    arr,
    lastDays,
    {
      startDate: fsd,
      endDate: fed,
      sd: fsd.slice(0, -4),
      ed: fed.slice(0, -4),
    },
    {
      instActive: countActiveInst,
      percent,
    },
  ];
}

function createMonitoringData(res) {
  const date = getStringFormatDate(
    getNextDay(parseDate(res[res.length - 1].date))
    );
  let totalUsers = randomInteger(10, 120);
  let uniqueUsers = randomInteger(5, totalUsers);
  totalUsers = String(totalUsers);
  uniqueUsers = String(uniqueUsers);
  return {
    date,
    totalUsers,
    uniqueUsers
  };
}

function getStringFormatDate(d) {
  return convertTZ(d.toISOString(), "Asia/Jakarta")
    .toISOString()
    .substring(0, 10)
    .split("-")
    .reverse()
    .join("/");
}
function filterDate(res, start, end) {
  let arr = [start, end];
  arr = getArrayDates(arr);

  return res.filter((item, idx) => {
    return arr.includes(item.date);
  });
}
function dateDiff(date1, date2) {
  date1.setHours(0);
  date1.setMinutes(0, 0, 0);
  date2.setHours(0);
  date2.setMinutes(0, 0, 0);
  var datediff = Math.abs(date1.getTime() - date2.getTime());
  return parseInt(datediff / (24 * 60 * 60 * 1000), 10);
}
function formattedDate(dateObj) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Juny",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
}
function findInstActive(arr) {
  const count = arr.reduce((sum, item) => {
    return (sum = sum + parseInt(item.uniqueUsers));
  }, 0);
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}
function parseDate(str) {
  let parts = str.match(/(\d+)/g);
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

function getArrayDates(arr) {
  const range_date_off = arr;
  const d1 = parseDate(range_date_off[0]);
  const d2 = parseDate(range_date_off[1]);
  let days = [];
  for (let dt = d1; dt <= d2; dt.setDate(dt.getDate() + 1)) {
    let fdt = new Date(dt);
    days.push(
      ("0" + fdt.getDate()).substr(-2) +
        "/" +
        ("0" + (fdt.getMonth() + 1)).substr(-2) +
        "/" +
        fdt.getFullYear()
    );
  }
  return days;
}
function getNeedfulDate(num, d) {
  return getStringFormatDate(new Date(new Date().setDate(d.getDate() - num)));
}
function findPercent(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num2 === 0) {
    return `+${num1}`;
  }
  if (num1 === num2) {
    return `0`;
  }
  if (num1 > num2) {
    return `+${(((num1 - num2) / num2) * 100).toFixed(2)}`;
  } else {
    return `-${(((num2 - num1) / num2) * 100).toFixed(2)}`;
  }
}
function getNextDay(date) {
  let tomorrow = date;
  tomorrow.setDate(tomorrow.getDate() + 1);
  return new Date(
    tomorrow.getMonth() +
      1 +
      "," +
      tomorrow.getDate() +
      "," +
      tomorrow.getFullYear() +
      ",00:00:00"
  );
}
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export { searchUser, filterRangeDate, defaultRangeDate, createMonitoringData };
