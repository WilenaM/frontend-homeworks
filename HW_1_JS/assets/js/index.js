function test2() {
    prompt('test')
    return null;
}


// Max 1

function task5() {
    const r_kola = +prompt("enter radius kola");
    if (isNaN(r_kola)) {
      alert("error wrong number");
    } else if (r_kola <= 0) {
      alert("error wrong value");
    } else {
      alert(Math.PI * Math.pow(r_kola, 2));
    }
  }

  function task6() {
    const distance = +prompt("enter distance");
    if (isNaN(distance)) {
      alert("error wrong number");
    } else if (distance <= 0) {
      alert("error value");
    } else {
      const time = +prompt("enter time");
      if (isNaN(time)) {
        alert("error wrong number");
      } else if (time <= 0) {
        alert("error value");
      } else {
        alert((distance / time).toString() + ' km/h');
      }
    }
  }

  function task7() {
    const konvektor = 0.92699;
    const dollars = +prompt ('enter amount dollars')
    if (isNaN(dollars)) {
      alert('error wrong number')
    } else if (dollars<= 0) {
      alert('error amount')
    } else {
    alert((konvektor*dollars).toFixed(2))
    }


  }