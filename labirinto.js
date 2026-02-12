let circle = document.getElementById('circle')
let svg = document.getElementById('svg')
let teto = document.getElementById('teto')
let meio = document.getElementById('meio')
let chao = document.getElementById('meio')


alert("clique na bola pra começar!")

function jogo() {
  svg.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    circle.setAttribute("cx", x)
    circle.setAttribute("cy", y)

    //colisão topo
    if (y < 53) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }

    //colisão meio
    for (i = 272; i < 326; i++) {
      if (x < window.innerWidth * 0.75 && y === i + 35) {
        circle.setAttribute("cx", 50)
        circle.setAttribute("cy", 200)
        alert("Que pena! Você perdeu!")
        location.reload()
      }
    }

    //colisão baixo
    if (y > 697) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }

    //chegada
    if (x < 130 && y < 655 && y > 380) {
      alert("Parabéns! Você venceu!")
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      location.reload()
    }
    //barra1
    if (x > 312 && x < 418 && y > 131 && y < 273) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }
    //barra2 667 128
    if (x > 565 && x < 667 && y < 123) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }
    //barra3
    if (x > 758 && x < 849 && y > 174 && y < 361) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }
    //barra4
    if (x > 312 && x < 418 && y > 131 && y < 273) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }
    //barra5
    if (x > 224 && x < 326 && y > 472 && y < 753) {
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 200)
      alert("Que pena! Você perdeu!")
      location.reload()
    }

  });

}


