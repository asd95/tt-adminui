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

      let dateFormatData = convertTZ(data.date.toISOString(), "Asia/Jakarta")
        .toISOString()
        .substring(0, 10)
        .split("-")
        .reverse();
      dateFormatData = [
        ...dateFormatData.slice(0, 2),
        dateFormatData.pop().slice(-2),
      ].join("/");
      const dateFormatItem = item["last transaction"].split(" ")[1];
      return dateFormatData === dateFormatItem;
    });
  return results;
};

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

export { searchUser };
