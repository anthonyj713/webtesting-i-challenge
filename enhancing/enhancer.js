module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function succeed(item) {
  if(item.enhancement >= 0 && item.enhancement < 20)
  return item.enhancement + 1;
  else if  (item.enhancement >= 20)
  return item.enhancement = 20;
  else if (item.enhancement < 0)
  return item.enhancement = 0
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
