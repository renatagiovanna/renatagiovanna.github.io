function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let änderung = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 35, 40];
let ding = ["Eine Bevölkerung", "Eine Bakterienanzahl", "Ein Kapital"];
let anfang = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 500, 600, 700, 800,
  900, 1000,
];
let zeit = ["Jahr", "Stunde", "Sekunde", "Tag"];
let zunahme = [true, false];

let aaa = document.getElementById("btn_aufgabe");
let solution_content;
aaa.addEventListener("click", function () {
  var gleichung_print = () => {
    let etwas = ding[getRandomInt(0, ding.length - 1)];
    let k = änderung[getRandomInt(0, änderung.length - 1)];
    let a = anfang[getRandomInt(0, anfang.length - 1)];
    let t = zeit[getRandomInt(0, zeit.length - 1)];
    let z = zunahme[getRandomInt(0, 1)];
    let aufgabe =
      etwas + " nimmt pro " + t + " um " + k + (z ? "% zu. " : "% ab. <br>");
    aufgabe = aufgabe + "Der Anfangswert beträgt " + a + ".";

    solution_content =
      a + "\\cdot" + (z ? (100 + k) / 100 : (100 - k) / 100) + "^t";
    solution_content = "$f(t) = " + solution_content + "$";

    let b = document.getElementById("aufgabe");
    b.style.fontFamily = "Calibri";
    b.style.fontSize = "medium";
    b.style.marginBottom = "30px";
    b.innerHTML = `
  <div>
  <p>${aufgabe}<p>
  <p></p>
  </div>
`;
    MathJax.typesetPromise();
  };

  gleichung_print();

  let d = document.getElementById("solution");
  d.textContent = "";
  d.style.fontFamily = "Calibri";
  d.style.fontSize = "medium";
  d.style.marginBottom = "30px";
  let c = document.getElementById("btn_loesung");
  c.addEventListener(
    "click",
    function () {
      d.innerHTML = `
      <div>
      <p>${solution_content}<p>
      <p></p>
      </div>
    `;
      MathJax.typesetPromise();
    },
    0
  );
});

//Asymptote-Aufgaben

let bbb = [-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //f(x) = bbbe^kkk + cccx + ddd
let kkk = [
  -0.2, -0.3, -0.45, -0.15, -0.25, -1, -1, -1, -1, 0.5, 1, 1, 1, 1, 2, 2, 2, 2,
  3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
];
let ccc = [
  -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
let ddd = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let sss = [true, false, false, false, false, false, false];

aa = document.getElementById("btn_aufgabe_e");

aa.addEventListener("click", function () {
  var gleichung_print = () => {
    let a = bbb[getRandomInt(0, bbb.length - 1)]; //f(x) = bbbe^kkkx + cccx + ddd
    let k = kkk[getRandomInt(0, kkk.length - 1)];
    let c = ccc[getRandomInt(0, ccc.length - 1)];
    let d = ddd[getRandomInt(0, ddd.length - 1)];
    let s = sss[getRandomInt(0, sss.length - 1)];
    let konst;
    do {
      konst = getRandomInt(-5, 5);
    } while (konst == 0);

    let aufgabe =
      "$f(t) = " +
      (Math.abs(a) != 1 ? a : a == 1 ? "" : "-") +
      "e^{" +
      (Math.abs(k) != 1 ? k : k == 1 ? "" : "-") +
      "x" +
      (s ? (konst > 0 ? "+" : "") + konst + "}" : "}") +
      (c != 0
        ? Math.abs(c) != 1
          ? (c > 0 ? "+" : "") + c + "x"
          : c == 1
          ? "+x"
          : "-x"
        : "") +
      (d > 0 && d != 0 ? "+" : "") +
      (d != 0 ? d : "") +
      "$";
    solution_content =
      "Asymptote:  " +
      "$\\underline{y=" +
      (c != 0 ? (Math.abs(c) != 1 ? c + "x" : c == 1 ? "x" : "-x") : "") +
      (d > 0 && c != 0 ? "+" : "") +
      (d != 0 || c == 0 ? d : "") +
      "}$";
    if (k < 0)
      solution_content =
        solution_content + "$\\quad$" + "(für $x \\rightarrow \\infty$)";
    else
      solution_content =
        solution_content + "$\\quad$" + "(für $x \\rightarrow -\\infty$)";

    let b = document.getElementById("aufgabe_e");
    b.style.fontFamily = "Calibri";
    b.style.fontSize = "medium";
    b.style.marginBottom = "30px";
    b.innerHTML = `
  <div>
  <p>${aufgabe}<p>
  <p></p>
  </div>
`;
    MathJax.typesetPromise();
  };

  gleichung_print();

  let d = document.getElementById("solution_e");
  d.textContent = "";
  d.style.fontFamily = "Calibri";
  d.style.fontSize = "medium";
  d.style.marginBottom = "30px";
  let c = document.getElementById("btn_loesung_e");
  c.addEventListener(
    "click",
    function () {
      d.innerHTML = `
      <div>
      <p>${solution_content}<p>
      <p></p>
      </div>
    `;
      MathJax.typesetPromise();
    },
    0
  );
});
