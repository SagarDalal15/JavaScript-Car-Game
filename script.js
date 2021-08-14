function fun() {
  document.getElementById("body").innerHTML =
    "<button onclick='fun()'>Restart Game</button><br><br>";

  let totalDistance = 100;

  let currentDistance = 0;
  let currentPetrol = 50;

  let petrolPumps = [];

  document.getElementById("body").innerHTML += "Car Game Started -> <br><br>";

  for (i = 0; i < 6; i++) {
    petrolPumps.push(Math.floor(Math.random() * 100 + 1));
  }

  petrolPumps.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("body").innerHTML +=
    "Petrol Pumps generated at " + petrolPumps + " kilometers.";

  document.getElementById("body").innerHTML += "<br><br>";

  let ArrayIndex = 0;
  for (i = 1; ; i++) {
    if (currentDistance >= totalDistance || currentPetrol <= 0) {
      break;
    }

    let distanceToTravel = Math.floor(Math.random() * 6 + 1);

    currentDistance += distanceToTravel;

    if (currentDistance >= totalDistance) {
      distanceToTravel = totalDistance - (currentDistance -= distanceToTravel);
      currentDistance = 100;
    }

    currentPetrol -= distanceToTravel * 2;

    while (petrolPumps[ArrayIndex] <= currentDistance) {
      currentPetrol += 30;
      ArrayIndex++;
    }

    if (currentPetrol <= 0) {
      currentPetrol = 0;
    }

    document.getElementById("body").innerHTML +=
      "Move : " +
      i +
      " car at " +
      currentDistance +
      ", petrol remaining " +
      currentPetrol;
    document.getElementById("body").innerHTML += "<br>";
  }
}
