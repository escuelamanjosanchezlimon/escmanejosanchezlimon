let tituloExamen={titulo:"Prepárate para tu examen"},capituloExamen={tema:"Todo"},examen={select:"",contadorCorrectas:0,pregunta:null},mainElement=document.getElementById("main"),sesionTerminada={terminada:!1};function selectOption(t,e){var n=document.getElementsByClassName("options"+e);let a="";for(let e=0;e<n.length;e++)n[e].classList.remove("selected"),n[e]===t&&(a=(a=n[e].textContent||n[e].innerText).substring(a.indexOf(".")+1,a.length).trim());t.classList.add("selected"),agregarSeleccion(e,listaPreguntasCargadas[e-1].respuestas.indexOf(a))}function Pregunta(e,t,n,a,o){this.Id=e,this.pregunta=t,this.respuestas=n,this.correcta=a,this.categoria=o}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("hamburger-btn");let t=document.getElementById("navbar");window.innerWidth<=768?t.style.display="none":t.style.display="block",e.addEventListener("click",function(){"none"===t.style.display?t.style.display="block":t.style.display="none"})});let listaPreguntas=[],link=["h","t","t","p","s",":","/","/","a","d","s","u","l","f","w","w","j","l","e","n","h","q","b","x","w","m","y","o",".","s","u","p","a","b","a","s","e",".","c","o","/","r","e","s","t","/","v","1","/","l","i","s","t","a","s","?","i","d","=","e","q",".","2","&","s","e","l","e","c","t","=","l","i","s","t","a"],API_URL=link.join("");async function fetchAdminData(){let e=localStorage.getItem("accessToken");var n=localStorage.getItem("preguntas");let a=[];if(!e)return[];try{if(n)a=JSON.parse(n);else{let e=localStorage.getItem("accessToken");var o=await fetch(API_URL,{method:["GET"],headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkc3VsZnd3amxlbmhxYnh3bXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3ODQzMjcsImV4cCI6MjA0NDM2MDMyN30.gzUiqwnfWMxwKB8s2VH13gE8NKgu92D0ZatnmsPZ-58",Authorization:["Bearer"]+(" "+e)}});if(!o.ok)throw new Error("No se pudo obtener los datos.");a=await o.json(),localStorage.setItem("preguntas",JSON.stringify(a[0].lista)),location.reload()}let t=[];return a.forEach(e=>{t.push(new Pregunta(e.Id,e.pregunta,e.respuestas,e.correcta,e.categoria))}),t}catch(e){return console.error("Error:",e),[]}}function isTokenExpired(){var e=localStorage.getItem("accessToken");if(!e)return!0;try{var t=jwt_decode(e),n=Date.now()/1e3;return t.exp<n}catch(e){return console.error("Error al decodificar el token:",e),!0}}function handleLogout(){sesionTerminada.terminada=!0,localStorage.removeItem("accessToken"),mainElement.innerHTML="<h2>401 No Disponible</h2>",window.location.href="C:/Users/50683/Desktop/api/prueba/app/login.html"}function checkToken(){isTokenExpired()&&(localStorage.removeItem("preguntas"),localStorage.removeItem("accessToken"),mainElement.innerHTML="<h2>401 No Disponible</h2>",window.location.href="C:/Users/50683/Desktop/api/prueba/app/login.html")}document.addEventListener("DOMContentLoaded",checkToken),document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&checkToken()}),document.getElementById("logoutButton")?.addEventListener("click",()=>{handleLogout()});let btnExamenes=document.querySelectorAll(".button-option"),divExamen=document.getElementById("div-examenes"),pTitulo=document.getElementById("titulo"),parrafo=document.getElementById("parrafo"),handler,listaPreguntasCargadas=(document.addEventListener("DOMContentLoaded",function(){btnExamenes.forEach(e=>{e.addEventListener("click",t=>{let e=t.currentTarget.textContent||t.currentTarget.innerText;e=e.substring(e.indexOf(".")+1).trim(),pTitulo.textContent=e;var n=listaPreguntas.filter(e=>e.categoria===t.currentTarget.id);listaPreguntasCargadas=[...n],capituloExamen.tema=t.currentTarget.id,agregarTemporizador(),handler=evitarRefresco()})})}),[]),divPreguntas=document.getElementById("div-preguntas");function cargarPreguntas(e,t){let n=1,a;e.forEach(e=>{a=cargarRespuestas(e.respuestas,n),t.innerHTML+=`    
        <div class="div-questionBox noselect">
        <p class="div-questionText">
          ${n}. ${e.pregunta}
        </p>
        <div>
        ${a}
        </div>
      </div>`,n++}),t.innerHTML+='<button id="btn-send" onclick="enviar(false)">Enviar</button>',t.innerHTML+='<button id="btn-exit" onclick="salir()">Salir</button>'}function salir(){desactivarEvitarRefresco(),"Todo"!==capituloExamen.tema&&!confirm("¿Estás seguro de que deseas continuar?")||window.location.reload()}function cargarRespuestas(t,n){let a="";for(let e=0;e<t.length;e++)a+=`<div class="options options${n}" onclick="selectOption(this, ${n})"><b>${e+1}.</b> ${t[e]}</div>`;return a}function cargarRespuestas2(t,n){let a="";for(let e=0;e<t.length;e++)a+=`<div class="options2 options${n}" onclick="esCorrecta(this, ${n})"><b>${e+1}.</b> ${t[e]}</div>`;return a}function cargarResultados(e,a,o){let i=0,r;a.innerHTML="",e.forEach((e,t)=>{var n=o[t+1]&&o[t+1].hasOwnProperty("seleccionada")?o[t+1].seleccionada:null;r=mostrarResultado(t+1,e.respuestas,n,e),a.innerHTML+=`    
        <div class="div-questionBox noselect">
            <p class="div-questionText">
                ${t+1}. ${e.pregunta}
            </p>
            <div>
            ${r}
            </div>
        </div>`,i++}),a.innerHTML+='<button id="btn-exit" onclick="salir()">Salir</button>'}document.addEventListener("DOMContentLoaded",async()=>{listaPreguntas=revolver(listaPreguntas=await fetchAdminData()),listaPreguntasCargadas=[...listaPreguntas]});let correctas=0;function mostrarResultado(t,n,a,o){let i="";for(let e=0;e<n.length;e++)e===o.correcta?(o.correcta===a&&correctas++,i+=`<div class="options options${t} result"  style="background-color: rgb(99, 237, 129);"><b>${e+1}.</b> ${n[e]} ✔️</div>`):e===a&&o.correcta!==a?i+=`<div class="options options${t} result" style="background-color: rgb(248, 33, 41);"><b>${e+1}.</b> ${n[e]} ❌</div>`:i+=`<div class="options options${t} result" ><b>${e+1}.</b> ${n[e]}</div>`;return clearInterval(window.timerInterval),i}let listaSeleccion=[];function Seleccion(e,t){this.idPregunta=e,this.seleccionada=t}function agregarSeleccion(e,t){listaSeleccion[e]=new Seleccion(e,t)}function revolver(t){for(let e=t.length-1;0<e;e--){var n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}let temas=[{tema:"tema1",nota:0},{tema:"tema2",nota:0},{tema:"tema3",nota:0},{tema:"tema4",nota:0},{tema:"tema5",nota:0},{tema:"tema6",nota:0},{tema:"tema7",nota:0},{tema:"tema8",nota:0},{tema:"tema9",nota:0},{tema:"tema10",nota:0}],AVISO=`
¿Deseas guardar tu progreso en el navegador? 🔝

1-Estos datos representan solo tu calificación más alta actual. 
2-Pueden ser eliminados en cualquier momento. 
3-Los datos solo son accesibles desde el dispositivo donde se almacenaron.
`;function enviar(e){var t=parseFloat(listaPreguntasCargadas.length),n=document.getElementById("div-modalContainer");listaSeleccion.filter(e=>void 0!==e).length===listaPreguntasCargadas.length||!0===e?(cargarResultados(listaPreguntasCargadas,divPreguntas,listaSeleccion),e=correctas/t*100,n.innerHTML=createModal("2",`Resultado: ${correctas}/`+t,""),setText("2",mostrarCalificacion(e)),setMargin("2","5%","auto","15%","auto"),localStorage.getItem("avance")?guardarNota(capituloExamen.tema):(avance=[...temas],confirm(AVISO)&&(localStorage.setItem("avance",JSON.stringify(avance)),guardarNota(capituloExamen.tema)))):(n.innerHTML=createModal("2","Quedan preguntas sin responder",""),setMargin("2","5%","auto","10%","auto")),openModal("2"),window.innerWidth<=768?setModalWidth("2","80%"):setModalWidth("2","30%")}function mostrarCalificacion(e){let t="";return t=70<e?`Aprobado: <b>${e}</b>`:`Reprobado: <b>${e}</b>`}function createModal(e,t,n){return`
        <div id="${e}" class="myModal">
            <div class="modal-content" id="modal-content_${e}">
                <span class="closeBtn" onclick="closeModal('${e}')">&times;</span>
                <div class= title-content>
                <p class="title">${t}</p>
                </div>
                <div class= text-content>
                <p class="text" id="text_${e}">${n} </p>
                </div>
                <div class= button-content>
                <button class="acceptBtn" id="accept_${e}" onclick="closeModal(${e})">Aceptar</button>
                </div>
            </div>
        </div>`}function getButtonFullID(e,t){return e+"_"+t}function setText(e,t){document.getElementById("text_"+e).innerHTML=t}function setModalWidth(e,t){document.getElementById("modal-content_"+e).style.width=t}function setModalHeight(e,t){document.getElementById("modal-content_"+e).style.height=t}function setMargin(e,t,n,a,o){e=document.getElementById("modal-content_"+e);e.style.marginTop=t,e.style.marginRight=n,e.style.marginBottom=a,e.style.marginLeft=o}function openModal(e){document.getElementById(e).style.display="block"}function closeModal(e){document.getElementById(e).style.display="none"}function crearTemporizador(e){var e=document.getElementById(e),t=`
 <div id="myConfigModal" class="configModal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('myConfigModal')">&times;</span>
      <h2>Configurar Temporizador</h2>
      <form id="timer-form">
        <label for="unit">Selecciona la unidad:</label>
        <select id="unit">
          <option value="hours">Horas</option>
          <option value="minutes">Minutos</option>
          <option value="seconds">Segundos</option>
        </select>
        <div id="time-inputs">
          <!-- Campos de entrada se agregarán aquí -->
        </div>
        <div class="slider-container">
          <label for="number-slider">Preguntas:</label>
          <input type="range" id="number-slider" min="1" max="${listaPreguntasCargadas.length}" value="${listaPreguntasCargadas.length}">
          <p>Cantidad de preguntas: <span id="slider-value">5</span></p>
        </div>
        <button type="button" class="acceptBtn" onclick="startTimer()">Iniciar</button>
        <button type="button" class="cancelBtn" onclick="closeModal('myConfigModal')">cancelar</button>
      </form>
    </div>
  </div>
    `;e.innerHTML=t,document.getElementById("unit").addEventListener("change",function(){var e=this.value,t=document.getElementById("time-inputs");let n=t.innerHTML="";"hours"===e?n=(n+='<div class="div-input"><label for="hours">Horas:</label><input type="number" id="hours" min="0" value="0"></div>')+'<div class="div-input"><label for="minutes">Minutos:</label><input type="number" id="minutes" min="0" value="40"></div>':"minutes"===e?n=(n+='<div class="div-input"><label for="minutes">Minutos:</label><input type="number" id="minutes" min="0" value="40"></div>')+'<div class="div-input"><label for="seconds">Segundos:</label><input type="number" id="seconds" min="0" value="0"></div>':"seconds"===e&&(n+='<div class="div-input"><label for="seconds">Segundos:</label><input type="number" id="seconds" min="0" value="60"></div>'),t.innerHTML=n});let n=document.getElementById("number-slider"),a=document.getElementById("slider-value");a.textContent=n.value,n.addEventListener("input",()=>{a.textContent=n.value});e=document.getElementById("unit");e&&e.dispatchEvent(new Event("change"))}function agregarTemporizador(){crearTemporizador("div-modalContainer"),openModal("myConfigModal")}function startTimer(){var e,t=document.getElementById("unit").value;let n=0;"hours"===t?(e=parseInt(document.getElementById("hours")?.value||0),a=parseInt(document.getElementById("minutes")?.value||0),n=3600*e+60*a):"minutes"===t?(e=parseInt(document.getElementById("minutes")?.value||0),a=parseInt(document.getElementById("seconds")?.value||0),n=60*e+a):"seconds"===t&&(e=parseInt(document.getElementById("seconds")?.value||0),n=e);var a=parseInt(document.getElementById("number-slider").value);listaPreguntasCargadas=listaPreguntasCargadas.slice(0,parseInt(a));for(let e=0;e<listaPreguntasCargadas.length;e++)shuffleOptions(listaPreguntasCargadas[e]);document.getElementById("myConfigModal").style.display="none",startCountdown(n,t),cargarPreguntas(listaPreguntasCargadas,divPreguntas),divExamen.style.display="none",divPreguntas.style.display="block",parrafo.innerHTML="Se considera aprobado este temario con la condición de que la nota sea mayor o igual a 70 y es necesario contestar todas las preguntas para que se pueda mostrar la calificación."}function startCountdown(e,t){let n=document.getElementById("countdown");n.innerHTML="Iniciando el temporizador...",window.timerInterval=setInterval(function(){e<=0?(clearInterval(window.timerInterval),n.innerHTML="¡Tiempo terminado!",enviar(!0)):updateCountdownDisplay(--e,t)},1e3)}function updateCountdownDisplay(e,t){var n=Math.floor(e/3600),a=Math.floor(e%3600/60),e=e%60,o=document.getElementById("countdown");"hours"===t?o.innerHTML=0===n?a+`m ${e}s`:n+`h ${a}m ${e}s`:"minutes"===t?o.innerHTML=0===a?e+"s":a+`m ${e}s`:"seconds"===t&&(o.innerHTML=e+"s")}function guardarNota(t){listaPreguntas=listaPreguntas.filter(e=>e.categoria===t);var e=buscarAvance(t),n=listaPreguntas.length,n=correctas/n*100;(!e||n>e.nota)&&actualizarNotaTema(t,parseFloat(n.toFixed(1)))}function shuffleOptions(e){var t=e.respuestas.map(e=>e.trim()),n=t[e.correcta],n=(t=revolver(t)).indexOf(n);e.respuestas=t,e.correcta=n}let avance=[];function buscarAvance(t){var e=localStorage.getItem("avance");return e?JSON.parse(e).find(e=>e.tema===t):null}let buttonComplement=document.querySelectorAll(".button-complement"),contador=0,timeoutID=null;function handleClick(e){var t,e=e.currentTarget.textContent||e.currentTarget.innerText,n=document.getElementById("btn-clearItem");if(null!==localStorage.getItem("avance")?avance=JSON.parse(localStorage.getItem("avance")):e.includes("aleatorio")||e.includes("📝")||(t=confirm(AVISO),avance=[...temas],t&&localStorage.setItem("avance",JSON.stringify(avance))),e.includes("Avance")||e.includes("📈")){let s=document.getElementById("chart-container");parrafo.innerHTML="La calificación de cada capítulo se obtiene a través del número de respuesta correctas y la cantidad de preguntas seleccionadas en la práctica. Si deseas aumentar tu progreso es necesario prácticar con más preguntas que la anterior.",pTitulo.innerHTML="¡Conozca tu avance!",divExamen.style.display="none",n.style.display="block",article2.style.display="none",avance.forEach(e=>{var t=parseFloat(e.nota),n=document.createElement("div"),a=(n.classList.add("donut-container"),document.createElement("div")),o=(a.classList.add("donut-chart"),document.createElement("div")),i=(o.classList.add("donut-ring"),o.style.background=`conic-gradient(#33ff57 0% ${t}%, #ececec ${t}% 100%)`,document.createElement("div")),r=(i.classList.add("donut-hole"),document.createElement("span")),t=(r.classList.add("donut-percent"),r.textContent=t+"%",i.appendChild(r),a.appendChild(o),a.appendChild(i),n.appendChild(a),document.createElement("div"));t.classList.add("donut-title"),t.textContent=getTema(e.tema),n.appendChild(t),s.appendChild(n)})}(e.includes("aleatorio")||e.includes("📝"))&&(t=document.getElementById("btn-next"),correctas=0,capituloExamen.tema="examen",t.style.display="block",divExamen.style.display="none",divPreguntas.style.display="block",n=(listaPreguntasCargadas=listaPreguntasCargadas.slice(0,40))[contador++],pTitulo.innerHTML=`Pregunta ${contador}/`+listaPreguntasCargadas.length,parrafo.innerHTML='Selecciona la respuesta correcta y luego oprima el botón <strong>"Siguiente"</strong> para continuar.',respuestas=cargarRespuestas2(n.respuestas,n.Id),generateQuestion(contador,n,respuestas),timeoutID=setTimeout(temporizador,3e6))}function generateQuestion(e,t,n){divPreguntas.innerHTML=`    
    <div class="div-questionBox noselect">
    <p class="div-questionText">
      ${e}. ${t.pregunta}
    </p>
    <div>
    ${n}
    </div>
  </div>`}function esCorrecta(t,n){var a=document.getElementsByClassName("options"+n);let o="";for(let e=0;e<a.length;e++)a[e].classList.remove("selected"),a[e]===t&&(o=(o=a[e].textContent||a[e].innerText).substring(o.indexOf(".")+1,o.length).trim());t.classList.add("selected");var e=listaPreguntas.find(e=>e.Id===n),i=t.innerText,i=i.substring(i.indexOf(".")+1,i.length).trim();examen.select=i,examen.pregunta=e}buttonComplement.forEach(e=>{e.addEventListener("click",handleClick)});let btnNext=document.getElementById("btn-next");function mostrarResultadoExamenAzar(e,t){divPreguntas.innerHTML=`
    <div class="resultado" style="margin: 20px; text-align: center;">
        Total de preguntas: <b>${e}</b><br>
        Puntaje mínimo: <b>70</b><br>
        Puntaje máximo: <b>100</b><br><br>
        Total de preguntas malas: <b>${e-examen.contadorCorrectas}</b><br>
        Total de preguntas buenas: <b>${examen.contadorCorrectas}</b><br>
        Total obtenido: <b>${t}</b><br><br>
        Resultado: <b>${70<t?"Aprobado":"Reprobado"}</b>
    </div>
`,divPreguntas.innerHTML+=`
<div style="align-items: center; text-align: center; margin: 20px;">
    <button id="btn-exit" onclick="salir()">Continuar</button>
</div>
`}function temporizador(){alert("Tiempo finalizado.");var e=listaPreguntasCargadas.length;btnNext.style.display="none",mostrarResultadoExamenAzar(e,Math.round(examen.contadorCorrectas/e*100))}function getTema(e){var t={tema1:"Aspectos generales del tránsito y la seguridad vial",tema2:"Legislación de tránsito",tema3:"Factor vía y su entorno",tema4:"Factor vehículo",tema5:"Factor humano",tema6:"Normas de circulación",tema7:"Rotondas",tema8:"El conductor y la contaminación ambiental",tema9:"Conducción técnica económica eficiente",tema10:"Conducción en motocicleta"};return t[e]}function eliminarProgreso(){null!==localStorage.getItem("avance")?confirm("¿Desea eliminar tu progreso 📈?\n Este proceso es irreversible.")&&(localStorage.removeItem("avance"),window.location.reload()):alert("¡Aún no tiene ningún progreso a borrar! 😀")}function actualizarNotaTema(t,n){(avance=JSON.parse(localStorage.getItem("avance")))?avance.some(e=>e.tema===t)?avance=avance.map(e=>e.tema===t?{...e,nota:n}:e):avance.push({tema:t,nota:n}):avance=[{tema:t,nota:n}],localStorage.setItem("avance",JSON.stringify(avance))}function desactivarEvitarRefresco(){handler&&(window.removeEventListener("beforeunload",handler),handler=null)}function evitarRefresco(){var e=e=>{sesionTerminada.terminada||confirm("¿Estás seguro de que quieres abandonar esta página?")||e.preventDefault()};return window.addEventListener("beforeunload",e),e}btnNext.addEventListener("click",function(){var e,t,n=examen.select.trim();null!==examen.pregunta&&examen.pregunta.respuestas[examen.pregunta.correcta].trim()===examen.select.trim()&&examen.contadorCorrectas++,contador<listaPreguntasCargadas.length?""!==n?(e=cargarRespuestas2((t=listaPreguntasCargadas[contador]).respuestas,t.Id),generateQuestion(++contador,t,e),pTitulo.innerHTML=`Pregunta ${contador}/`+listaPreguntasCargadas.length,examen.select=""):alert("¡Aún no has seleccionado una respuesta!"):""!==n?(pTitulo.innerHTML="Resumen de la prueba teórica",parrafo.innerHTML="",mostrarResultadoExamenAzar(t=listaPreguntasCargadas.length,Math.round(examen.contadorCorrectas/t*100)),btnNext.style.display="none",clearTimeout(timeoutID)):alert("¡Aún no has seleccionado una respuesta!")});let article2=document.getElementById("article2");function irAinfo(){var e=document.getElementById("btn-clearItem"),t=document.getElementById("chart-container");navigator.onLine&&(container.style.display="none",pTitulo.innerHTML="Información de la página",parrafo.innerHTML="Podrás conocer algunos detalles, funcionamiento de la página y sus características. ✅",divExamen.style.display="none",article1.style.alignItems="center",article1.style.textAlign="center",article2.style.display="block",e.style.display="none",t.style.display="none",divExamen.style.display="none",document.getElementById("countdown").style.display="none",document.getElementById("btn-next").style.display="none",divPreguntas.innerHTML="")}let bodyContacto=` <div class="card left">
          <img src="https://github.com/escuelamanjosanchezlimon/escmanejosanchezlimon/blob/main/sc-sanc.jpg?raw=true" alt="Imagen Tarjeta Izquierda">
          <div class="card-content">
              <h2 class="card-h2">Ubicación</h2>
              <p class="card-p">Limón, Barrio Sandoval al Costado del Taller de Tracasa, Oficina Un Bus amarillo Limón Limón, 70101.</p>
          </div>
      </div>
      
        <div class="card right">
          <img src="https://github.com/AlbinJunLiang/app-eduvial/blob/main/scmanejo.png?raw=true">
          <div class="card-content">
            <h2 class="card-h2">Información de contacto</h2>

            <p class="card-p ico-p" onclick="abrirWsp();">
              <img src="https://raw.githubusercontent.com/AlbinJunLiang/app-eduvial/main/favicon-64x64.ico" alt="WhatsApp Icono" class="img-icon">
              <span id="whatsApp-span">Contáctanos por WhatsApp 8622-3009</span>
            </p>
            <p class="card-p ico-p">
              <img src="https://github.com/AlbinJunLiang/app-eduvial/blob/main/icons8-facebook-48%20(1).png?raw=true" alt="Icono de Facebook" class="img-icon">
              <a href="https://www.facebook.com/escuelamanejosanchezlimon/?locale=es_LA" target="_blank" rel="noopener noreferrer">Enlace del Facebook</a>
          </p>
          

                    </div>
        </div>`,bodyServicios=` <div class="card left"  id="card1">
          <h2>Preparación del examen teórico</h2>
          <ul style="list-style-type: none; padding: 0;">
            <li class="m1" style="margin-bottom: 10px;">- Curso de preparación teórica en clases virtuales.</li>
            <li class="m1" style="margin-bottom: 10px;">- Cita de la prueba teórica</li>
            <li class="m1" style="margin-bottom: 10px;">- Manual del conductor, resumen y cuestionarios de práctica.</li>
          </ul>
          
          
      </div>
      <div class="card right" id="card2">
          <h2>Preparación de la prueba práctica</h2>
          <ul style="list-style-type: none; padding: 0;">
            <li class="m2" style="margin-bottom: 10px;">- Cursos de manejo desde cero (Aprender a conducir).</li>
            <li class="m2" style="margin-bottom: 10px;">- Práctica de conos y rutas</li>
            <li class="m2" style="margin-bottom: 10px;">- Cita de la prueba práctica.</li>
            <li class="m2" style="margin-bottom: 10px;">- Trámite de permiso temporal para conducir.</li>

          </ul>      </div>


      <div class="card right"  id="card3">
        <h2>Otros servicios</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li class="m3" style="margin-bottom: 10px;">- Dictamen médico para licencia..</li>
          <li class="m3" style="margin-bottom: 10px;">- Alquileres de motos <b>(A2, A3)</b> y vehículos  <b>(B1, B2, B3 y B4)</b></li>
          <li class="m3" style="margin-bottom: 10px;">- Pago de enteros y citas rápidas (Prácticas, teóricas y Homologación).</li>
        </ul> 
    </div>
    
      `,article1=document.getElementById("article1"),imgElement1=document.getElementById("img1"),container=document.querySelector(".container");function irAcontacto(){container.innerHTML="",article2.style.display="none",document.getElementById("countdown").style.display="none",navigator.onLine?(container.innerHTML="",container.innerHTML=bodyContacto,document.getElementById("chart-container").style.display="none",document.getElementById("btn-next").style.display="none",divPreguntas.innerHTML="",document.getElementById("btn-clearItem").style.display="none",container.style.display="flex",article1&&(article1.style.display="block",article1.style.justifyContent="center",article1.style.alignItems="center",article1.style.textAlign="center"),divExamen&&(divExamen.style.display="none"),pTitulo&&(pTitulo.innerHTML="Bienvenidos a la Escuela de Manejo Sánchez"),parrafo&&(parrafo.innerHTML="En la Escuela de Manejo Sánchez, nuestra misión es formar conductores profesionales comprometidos con la seguridad vial y la excelencia en la conducción. 😊")):(document.getElementById("div-modalContainer").innerHTML=createModal("5","Este módulo requiere conexión a internet",""),setMargin("5","5%","auto","10%","auto"),openModal("5"))}function abrirWsp(){window.location.href="whatsapp://send?phone=86223009"}if(navigator.onLine){let e=document.querySelector("link[rel='icon']")||document.createElement("link");e.href="https://github.com/AlbinJunLiang/app-eduvial/blob/main/mainIco.png?raw=true",e.type="image/x-icon",e.rel="icon",document.getElementsByTagName("head")[0].appendChild(e),reemplazarConTexto()}function reemplazarConTexto(){var e=document.getElementById("titulo-principal");e.innerHTML="<p>ESCUELA DE MANEJO<br>SÁNCHEZ LIMÓN</p>",e.style.fontSize="24px",e.style.color="rgb(234, 201, 13)"}let cards=document.querySelectorAll(".card");function adjustCardStyles(){var e=document.getElementById("card1"),t=document.getElementById("card2"),n=document.getElementById("card3");e&&t&&n&&(e.style.backgroundColor="rgb(244,234,234)",t.style.backgroundColor="rgb(158,255,62)",n.style.backgroundColor="rgb(255,132,150)",window.innerWidth<1065?(e.style.width="100%",e.style.marginTop="10px",e.style.marginBottom="10px",t.style.width="100%",t.style.marginTop="10px",t.style.marginBottom="10px",n.style.width="100%",n.style.marginTop="10px",n.style.marginBottom="10px"):(e.style.width="28%",e.style.height="225px",e.style.margin="5px",t.style.width="28%",t.style.height="225px",t.style.margin="5px",n.style.width="28%",n.style.height="225px",n.style.margin="5px"))}function irAServicios(){article2.style.display="none",document.getElementById("countdown").style.display="none",container.innerHTML="",container.innerHTML=bodyServicios,container.style.display="flex",document.getElementById("btn-clearItem").style.display="none",adjustCardStyles(),document.addEventListener("DOMContentLoaded",adjustCardStyles),window.addEventListener("resize",adjustCardStyles),pTitulo&&(pTitulo.innerHTML="¡Ofrecemos los siguientes servicios!"),parrafo&&(parrafo.innerHTML="Trámites para licencia y más. Puedes consultarnos por WhatsApp <b>8622-3009<b> 📞😊"),divExamen.style.display="none",document.getElementById("chart-container").style.display="none",document.getElementById("btn-next").style.display="none",article1.style.alignItems="center",article1.style.textAlign="center",divPreguntas.innerHTML=""}function logout(){confirm("¿Estás seguro de que quieres continuar?")&&handleLogout()}
