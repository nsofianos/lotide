const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("⛔⛔⛔ Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("jones", "jones");
assertEqual(3,1);
