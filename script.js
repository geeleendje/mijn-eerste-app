function optellen() {
    let getal1 = Number(document.getElementById("getal1").value);
    let getal2 = Number(document.getElementById("getal2").value);

    let uitkomst = getal1 + getal2;

    document.getElementById("uitkomst").textContent = uitkomst;
}
function aftrekken() {
    let getal1 = Number(document.getElementById("getal1").value);
    let getal2 = Number(document.getElementById("getal2").value);

    let uitkomst = getal1 - getal2;

    document.getElementById("uitkomst").textContent = uitkomst;
}