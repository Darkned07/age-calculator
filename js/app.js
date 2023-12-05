const form = document.querySelector("form");
const spyyyy = document.getElementById("spyyyy");
const spdd = document.getElementById("spdd");
const spmm = document.getElementById("spmm");
const liLabel = document.querySelector("sp");
const daysEl = document.getElementById("day");
const iXato1 = document.getElementById("i_xato1");
const mon = document.getElementById("month");
const iXato2 = document.getElementById("i_xato2");
const years = document.getElementById("years");
const iXato3 = document.getElementById("i_xato3");

const vaqt = new Date();
const year = vaqt.getFullYear();
const day = vaqt.getDate();
const oylar = vaqt.getMonth() + 1;
const oykun = new Date(year, oylar, 0).getDate();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    form.dd.value.length <= 2 &&
    form.dd.value <= oykun &&
    form.dd.value >= 0 &&
    form.dd.value.length > 0
  ) {
    if (
      form.yyyy.value == year &&
      oylar == form.mm.value &&
      form.dd.value >= day
    ) {
      spdd.textContent = "- -";
      form.dd.classList.add("xato");
      daysEl.style.color = "red";
      iXato1.classList.remove("hid");
    } else {
      if (form.mm.value == 2 && form.dd.value > 29) {
        spdd.textContent = "- -";
        form.dd.classList.add("xato");
        daysEl.style.color = "red";
        iXato1.classList.remove("hid");
      } else {
        spdd.textContent = day - form.dd.value;
        daysEl.style.color = "";
        iXato1.classList.add("hid");
        form.dd.classList.remove("xato");
      }
    }
  } else {
    form.dd.classList.add("xato");
    daysEl.style.color = "red";
    iXato1.classList.remove("hid");
    spdd.textContent = "- -";
  }
  if (
    form.mm.value.length <= 2 &&
    form.mm.value <= 12 &&
    form.mm.value >= 0 &&
    form.mm.value.length > 0
  ) {
    spmm.textContent = oylar - form.mm.value;
    mon.style.color = "";
    form.mm.classList.remove("xato");
    iXato2.classList.add("hid");
  } else {
    mon.style.color = "red";
    form.mm.classList.add("xato");
    iXato2.classList.remove("hid");
    spmm.textContent = "- -";
  }
  if (
    form.yyyy.value.length <= 4 &&
    form.yyyy.value <= year &&
    form.yyyy.value.length > 0
  ) {
    spyyyy.textContent = year - form.yyyy.value;
    years.style.color = "";
    form.yyyy.classList.remove("xato");
    iXato3.classList.add("hid");
  } else {
    years.style.color = "red";
    form.yyyy.classList.add("xato");
    iXato3.classList.remove("hid");
    spyyyy.textContent = "- -";
    spmm.textContent = "- -";
    spdd.textContent = "- -";
  }
});

function message(key) {
  console.log(key);
}
