const res = document.getElementById("res")
const decLabel = document.getElementById("decLabel")
const p = document.createElement("p")
res.appendChild(p)
p.style.marginTop = "15px"
p.style.fontWeight = "bold"

function bintodec() {

  const x = document.getElementById("bin").value

  if (x.length > 8 || x < 0 || !x) {
    p.innerHTML = `Mínimo 1 dígito, Máximo 8 dígitos.`
    p.style.color = "#ff0000"
    decLabel.style.color = "#ff0000"
    res.style.border = "#ff0000 solid"

  } else {

    var bin = 0
    for (var i = 0; i < x.length; i++) {
      if (x[i] < 0 || x[i] > 1) {

        p.innerHTML = `Número inválido, só aceitamos 1 ou 0`
        p.style.color = "#ff0000"
        decLabel.style.color = "#ff0000"
        res.style.border = "#ff0000 solid"
        return false;

      } else {

        bin += x[i] * 2 ** ((x.length - 1) - i)

        p.innerHTML = `${x} convertido em decimal é ${bin}`
        p.style.color = "var(--roxoPrincipal)"
        decLabel.style.color = "#000000"
        res.style.border = "#000 solid"

      }
      // console.log(x[i]*2**i)
      //console.log(bin)
    }

  }

}


