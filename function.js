let s="https://escuelamanjosanchezlimon.github.io/loginescmanejosanchez/",a=[{id:259,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/prevencion1.png?raw=true"},{id:260,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/regla1.png?raw=true"},{id:261,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/regla2.png?raw=true"},{id:262,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/prioridades.png?raw=true"},{id:263,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/prevobras.png?raw=true"},{id:264,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/info2.png?raw=true"},{id:265,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/doblelinea.jpg?raw=true"},{id:266,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/curva.png?raw=true"},{id:267,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/resbaladiza.png?raw=true"},{id:268,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/transitoLento.png?raw=true"},{id:269,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/cruz.png?raw=true"},{id:270,url:"https://github.com/adminsanchez2025/ico-eduvial/blob/main/delineador.png?raw=true"}],O=40,q={titulo:"Prepárate para tu examen"},r={tema:"Todo"},l={select:"",contadorCorrectas:0,pregunta:null},c=document.getElementById("main"),D={terminada:!1};function P(t,e){var n=document.getElementsByClassName("options"+e);let a="";for(let e=0;e<n.length;e++)n[e].classList.remove("selected"),n[e]===t&&(a=n[e].className).includes("selecto_")&&(a=a.substring(a.indexOf("_")+1,a.length));t.classList.add("selected"),Q(e,parseInt(a))}function _(e,t,n,a,o){this.Id=e,this.pregunta=t,this.respuestas=n,this.correcta=a,this.categoria=o}document.getElementById("hamburger-btn").addEventListener("click",function(){var e=document.getElementById("dropdown-menu");e.style.display="block"===e.style.display?"none":"block"}),document.addEventListener("click",function(e){var t=document.getElementById("dropdown-menu"),n=document.getElementById("hamburger-btn");t.contains(e.target)||n.contains(e.target)||(t.style.display="none")});let d=[];async function j(){var e=localStorage.getItem("preguntas"),e=JSON.parse(e);let t=[];return e.forEach(e=>{t.push(new _(e.Id,e.pregunta,e.respuestas,e.correcta,e.categoria))}),t}function e(){var e=localStorage.getItem("preguntas");e&&($e((e=JSON.parse(e).find(e=>"$%TYGBHJ"===e.categoria)).pregunta),e)||(c.innerHTML="<h2>401 No Disponible</h2>",window.location.href=s,localStorage.removeItem("preguntas"))}document.addEventListener("DOMContentLoaded",e),document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&e()});let J=document.querySelectorAll(".button-option"),o=document.getElementById("div-examenes"),i=document.getElementById("titulo"),u=document.getElementById("parrafo"),m,p=(document.addEventListener("DOMContentLoaded",function(){J.forEach(e=>{e.addEventListener("click",t=>{let e=t.currentTarget.textContent||t.currentTarget.innerText;e=e.substring(e.indexOf(".")+1).trim(),i.textContent=e;var n=d.filter(e=>e.categoria===t.currentTarget.id);p=[...n],r.tema=t.currentTarget.id,ae(),m=be()})})}),[]),g=document.getElementById("div-preguntas");function y(e,t){let n="";return"tema0"===e?(e=a.filter(e=>e.id===t))&&(n=" <img src="+e[0].url+' alt="Imagen centrada" width="230" style="display: block; margin: 0 auto; padding-top:15px">'):n="",n}function F(e,t){let n=1,a;e.forEach(e=>{a=W(e.respuestas,n),t.innerHTML+=`    
        <div class="div-questionBox noselect" style='margin-top:20px;'>
        ${y(r.tema,e.Id)}
        <p class="div-questionText">
          ${n}. ${e.pregunta}
        </p>
        <div>
        ${a}
        </div>
      </div>`,n++}),t.innerHTML+='<button id="btn-send" onclick="Z(false)">Enviar</button>',t.innerHTML+='<button id="btn-exit" onclick="R()">Salir</button>'}function R(){ye(),"Todo"!==r.tema&&!confirm("¿Estás seguro de que deseas continuar?")||window.location.reload()}function W(t,n){let a="";for(let e=0;e<t.length;e++){var o=p[n-1].respuestas.indexOf(t[e]);a+=`<div class="options options${n} selecto_${o}" onclick="P(this, ${n})"><b>${e+1}.</b> ${t[e]}</div>`}return a}function b(t,n){let a="";for(let e=0;e<t.length;e++){var o=t.indexOf(t[e]);a+=`<div class="options2 options${n} selecto_${o}" onclick="de(this, ${n})"><b>${e+1}.</b> ${t[e]}</div>`}return a}function U(e,a,o){let i=0,l;a.innerHTML="",e.forEach((e,t)=>{var n=o[t+1]&&o[t+1].hasOwnProperty("seleccionada")?o[t+1].seleccionada:null;l=G(t+1,e.respuestas,n,e),a.innerHTML+=`    
        <div class="div-questionBox noselect">
                ${y(r.tema,e.Id)}
            <p class="div-questionText">
                ${t+1}. ${e.pregunta} <br><b class='showAnswer' onclick='ve();'>Click respuesta...🤔</b>

            </p>
            <div>
            ${l}
            </div>

        </div>`,i++}),a.innerHTML+='<button id="btn-exit" onclick="R()">Salir</button>'}document.addEventListener("DOMContentLoaded",async()=>{d=f(d=await j()),p=[...d]});let v=0;function G(t,n,a,o){let i="";for(let e=0;e<n.length;e++)e===a?o.correcta===a?(v++,i+=`<div class="options options${t} result"  style="background-color: rgb(99, 237, 129);"><b>${e+1}.</b> ${n[e]} ✔️</div>`):a!==o.correcta&&(i+=`<div class="options options${t} result" style="background-color: rgb(248, 33, 41);"><b>${e+1}.</b> ${n[e]} ❌</div>`):o.correcta===e?i+=`<div class="options options${t} result"  style="background-color: rgb(99, 237, 129);"><b>${e+1}.</b> ${n[e]} ✔️</div>`:i+=`<div class="options options${t} result" ><b>${e+1}.</b> ${n[e]}</div>`;return clearInterval(window.timerInterval),i}let h=[];function Y(e,t){this.idPregunta=e,this.seleccionada=t}function Q(e,t){h[e]=new Y(e,t)}function f(t){for(let e=t.length-1;0<e;e--){var n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}let I=[{tema:"tema1",nota:0},{tema:"tema2",nota:0},{tema:"tema3",nota:0},{tema:"tema4",nota:0},{tema:"tema5",nota:0},{tema:"tema6",nota:0},{tema:"tema7",nota:0},{tema:"tema8",nota:0},{tema:"tema9",nota:0},{tema:"tema10",nota:0}],E=`
¿Deseas guardar tu progreso en el navegador? 🔝

1-Estos datos representan solo tu calificación más alta actual. 
2-Pueden ser eliminados en cualquier momento. 
3-Los datos solo son accesibles desde el dispositivo donde se almacenaron.
`;function Z(e){var t=parseFloat(p.length),n=document.getElementById("div-modalContainer");h.filter(e=>void 0!==e).length===p.length||!0===e?(U(p,g,h),e=v/t*100,n.innerHTML=L("2",`Resultado: ${v}/`+t,""),X("2",K(e)),T("2","5%","auto","15%","auto"),localStorage.getItem("avance")?x(r.tema):($=[...I],confirm(E)&&(localStorage.setItem("avance",JSON.stringify($)),x(r.tema)))):(n.innerHTML=L("2","Quedan preguntas sin responder",""),T("2","5%","auto","10%","auto")),M("2"),window.innerWidth<=768?w("2","80%"):w("2","30%")}function K(e){e=He(e,2);let t="";return t=70<e?`Aprobado: <b>${e}</b>`:`Reprobado: <b>${e}</b>`}function L(e,t,n){return`
        <div id="${e}" class="myModal">
            <div class="modal-content" id="modal-content_${e}">
                <span class="closeBtn" onclick="te('${e}')">&times;</span>
                <div class= title-content>
                <p class="title">${t}</p>
                </div>
                <div class= text-content>
                <p class="text" id="text_${e}">${n} </p>
                </div>
                <div class= button-content>
                <button class="acceptBtn" id="accept_${e}" onclick="te(${e})">Aceptar</button>
                </div>
            </div>
        </div>`}function V(e,t){return e+"_"+t}function X(e,t){document.getElementById("text_"+e).innerHTML=t}function w(e,t){document.getElementById("modal-content_"+e).style.width=t}function ee(e,t){document.getElementById("modal-content_"+e).style.height=t}function T(e,t,n,a,o){e=document.getElementById("modal-content_"+e);e.style.marginTop=t,e.style.marginRight=n,e.style.marginBottom=a,e.style.marginLeft=o}function M(e){document.getElementById(e).style.display="block"}function te(e){document.getElementById(e).style.display="none"}function ne(e){var e=document.getElementById(e),t=`
 <div id="myConfigModal" class="configModal">
    <div class="modal-content">
      <span class="close" onclick="te('myConfigModal')">&times;</span>
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
          <input type="range" id="number-slider" min="1" max="${p.length}" value="${p.length}">
          <p>Cantidad de preguntas: <span id="slider-value">5</span></p>
        </div>
        <button type="button" class="acceptBtn" onclick="oe()">Iniciar</button>
        <button type="button" class="cancelBtn" onclick="te('myConfigModal')">cancelar</button>
      </form>
    </div>
  </div>
    `;e.innerHTML=t,document.getElementById("unit").addEventListener("change",function(){var e=this.value,t=document.getElementById("time-inputs");let n=t.innerHTML="";"hours"===e?n=(n+='<div class="div-input"><label for="hours">Horas:</label><input type="number" id="hours" min="0" value="0"></div>')+'<div class="div-input"><label for="minutes">Minutos:</label><input type="number" id="minutes" min="0" value="40"></div>':"minutes"===e?n=(n+='<div class="div-input"><label for="minutes">Minutos:</label><input type="number" id="minutes" min="0" value="40"></div>')+'<div class="div-input"><label for="seconds">Segundos:</label><input type="number" id="seconds" min="0" value="0"></div>':"seconds"===e&&(n+='<div class="div-input"><label for="seconds">Segundos:</label><input type="number" id="seconds" min="0" value="60"></div>'),t.innerHTML=n});let n=document.getElementById("number-slider"),a=document.getElementById("slider-value");a.textContent=n.value,n.addEventListener("input",()=>{a.textContent=n.value});e=document.getElementById("unit");e&&e.dispatchEvent(new Event("change"))}function ae(){ne("div-modalContainer"),M("myConfigModal")}{let l=localStorage.getItem("preguntas");if(l){let e=JSON.parse(l),t=e.find(e=>"$%TYGBHJ"===e.categoria),n=new Date(t),a=(isNaN(n),new Date),o=Math.abs(a-n),i=o/36e5;36<i&&(c.innerHTML="<h2>401 No Disponible</h2>",window.location.href=s,localStorage.removeItem("preguntas"))}}function oe(){var e,t=document.getElementById("unit").value;let n=0;"hours"===t?(e=parseInt(document.getElementById("hours")?.value||0),a=parseInt(document.getElementById("minutes")?.value||0),n=3600*e+60*a):"minutes"===t?(e=parseInt(document.getElementById("minutes")?.value||0),a=parseInt(document.getElementById("seconds")?.value||0),n=60*e+a):"seconds"===t&&(e=parseInt(document.getElementById("seconds")?.value||0),n=e);var a=parseInt(document.getElementById("number-slider").value);p=p.slice(0,parseInt(a));for(let e=0;e<p.length;e++)B(p[e]);document.getElementById("myConfigModal").style.display="none",ie(n,t),F(p,g),o.style.display="none",g.style.display="block",u.innerHTML="Se considera aprobado este temario con la condición de que la nota sea mayor o igual a 70 y es necesario contestar todas las preguntas para que se pueda mostrar la calificación."}function ie(e,t){let n=document.getElementById("countdown");n.innerHTML="Iniciando el temporizador...",window.timerInterval=setInterval(function(){e<=0?(clearInterval(window.timerInterval),n.innerHTML="¡Tiempo terminado!",Z(!0)):le(--e,t)},1e3)}function le(e,t){var n=Math.floor(e/3600),a=Math.floor(e%3600/60),e=e%60,o=document.getElementById("countdown");"hours"===t?o.innerHTML=0===n?a+`m ${e}s`:n+`h ${a}m ${e}s`:"minutes"===t?o.innerHTML=0===a?e+"s":a+`m ${e}s`:"seconds"===t&&(o.innerHTML=e+"s")}function x(t){d=d.filter(e=>e.categoria===t);var e=se(t),n=d.length,n=v/n*100;(!e||n>e.nota)&&ge(t,parseFloat(n.toFixed(1)))}function B(e){var t=e.respuestas.map(e=>e.trim()),n=t[e.correcta],n=(t=f(t)).indexOf(n);e.respuestas=t,e.correcta=n}let $=[];function se(t){var e=localStorage.getItem("avance");return e?JSON.parse(e).find(e=>e.tema===t):null}let re=document.querySelectorAll(".button-complement"),C=0,H=null;function ce(e){var e=e.currentTarget.textContent||e.currentTarget.innerText,t=document.getElementById("btn-clearItem");if(null!==localStorage.getItem("avance")?$=JSON.parse(localStorage.getItem("avance")):e.includes("aleatorio")||e.includes("📝")||(n=confirm(E),$=[...I],n&&localStorage.setItem("avance",JSON.stringify($))),e.includes("Avance")||e.includes("📈")){let s=document.getElementById("chart-container");u.innerHTML="La calificación de cada capítulo se obtiene a través del número de respuesta correctas y la cantidad de preguntas seleccionadas en la práctica. Si deseas aumentar tu progreso es necesario prácticar con más preguntas que la anterior.",i.innerHTML="¡Conozca tu avance!",o.style.display="none",t.style.display="block",A.style.display="none",$.forEach(e=>{var t=parseFloat(e.nota),n=document.createElement("div"),a=(n.classList.add("donut-container"),document.createElement("div")),o=(a.classList.add("donut-chart"),document.createElement("div")),i=(o.classList.add("donut-ring"),o.style.background=`conic-gradient(#33ff57 0% ${t}%, #ececec ${t}% 100%)`,document.createElement("div")),l=(i.classList.add("donut-hole"),document.createElement("span")),t=(l.classList.add("donut-percent"),l.textContent=t+"%",i.appendChild(l),a.appendChild(o),a.appendChild(i),n.appendChild(a),document.createElement("div"));t.classList.add("donut-title"),t.textContent=me(e.tema),n.appendChild(t),s.appendChild(n)})}if(e.includes("aleatorio")||e.includes("📝")){var n=document.getElementById("btn-next");v=0,r.tema="examen",n.style.display="block",o.style.display="none",g.style.display="block",(p=p.slice(0,O)).filter(e=>"tema0"!==e.categoria);for(let e=0;e<p.length;e++)B(p[e]);t=p[C++];i.innerHTML=`Pregunta ${C}/`+p.length,u.innerHTML='Selecciona la respuesta correcta y luego oprima el botón <strong>"Siguiente"</strong> para continuar.',respuestas=b(t.respuestas,t.Id),S(C,t,respuestas),H=setTimeout(ue,3e6)}}function S(e,t,n){g.innerHTML=`    
    <div class="div-questionBox noselect">
    <p class="div-questionText">
      ${e}. ${t.pregunta}
    </p>
    <div>
    ${n}
    </div>
  </div>`}function de(e,t){var n=document.getElementsByClassName("options"+t);for(let e=0;e<n.length;e++)n[e].classList.remove("selected");e.classList.add("selected");var a=d.find(e=>e.Id===t);let o=e.className;var e=(o=o.substring(o.indexOf("_")+1,o.length)).replace("selected","").trim(),i=p.find(e=>e.Id===t);l.select=i.respuestas[parseInt(e)],l.pregunta=a}re.forEach(e=>{e.addEventListener("click",ce)});let k=document.getElementById("btn-next");function z(e,t){g.innerHTML=`
    <div class="resultado" style="margin: 20px; text-align: center;">
        Total de preguntas: <b>${e}</b><br>
        Puntaje mínimo: <b>70</b><br>
        Puntaje máximo: <b>100</b><br><br>
        Total de preguntas malas: <b>${e-l.contadorCorrectas}</b><br>
        Total de preguntas buenas: <b>${l.contadorCorrectas}</b><br>
        Total obtenido: <b>${t}</b><br><br>
        Resultado: <b>${70<t?"Aprobado":"Reprobado"}</b>
    </div>
`,g.innerHTML+=`
<div style="align-items: center; text-align: center; margin: 20px;">
    <button id="btn-exit" onclick="R()">Continuar</button>
</div>
`}function ue(){alert("Tiempo finalizado.");var e=p.length;k.style.display="none",z(e,Math.round(l.contadorCorrectas/e*100))}function me(e){var t={tema0:"Señalizaciones",tema1:"Aspectos generales del tránsito y la seguridad vial",tema2:"Legislación de tránsito",tema3:"Factor vía y su entorno",tema4:"Factor vehículo",tema5:"Factor humano",tema6:"Normas de circulación",tema7:"Rotondas",tema8:"El conductor y la contaminación ambiental",tema9:"Conducción técnica económica eficiente",tema10:"Conducción en motocicleta"};return t[e]}function pe(){null!==localStorage.getItem("avance")?confirm("¿Desea eliminar tu progreso 📈?\n Este proceso es irreversible.")&&(localStorage.removeItem("avance"),window.location.reload()):alert("¡Aún no tiene ningún progreso a borrar! 😀")}function ge(t,n){($=JSON.parse(localStorage.getItem("avance")))?$.some(e=>e.tema===t)?$=$.map(e=>e.tema===t?{...e,nota:n}:e):$.push({tema:t,nota:n}):$=[{tema:t,nota:n}],localStorage.setItem("avance",JSON.stringify($))}function ye(){m&&(window.removeEventListener("beforeunload",m),m=null)}function be(){var e=e=>{D.terminada||confirm("¿Estás seguro de que quieres abandonar esta página?")||e.preventDefault()};return window.addEventListener("beforeunload",e),e}function ve(){Swal.fire({title:"Opción en desarrollo",text:"No disponible y se encuentra en proceso",showClass:{popup:""},hideClass:{popup:""}})}k.addEventListener("click",function(){var e,t,n=l.select.trim();null!==l.pregunta&&l.pregunta.respuestas[l.pregunta.correcta].trim()===l.select.trim()&&l.contadorCorrectas++,C<p.length?""!==n?(e=b((t=p[C]).respuestas,t.Id),S(++C,t,e),i.innerHTML=`Pregunta ${C}/`+p.length,l.select=""):alert("¡Aún no has seleccionado una respuesta!"):""!==n?(i.innerHTML="Resumen de la prueba teórica",u.innerHTML="",z(t=p.length,Math.round(l.contadorCorrectas/t*100)),k.style.display="none",clearTimeout(H)):alert("¡Aún no has seleccionado una respuesta!")});let A=document.getElementById("article2");function he(){var e=document.getElementById("btn-clearItem"),t=document.getElementById("chart-container");navigator.onLine&&(N.style.display="none",i.innerHTML="Información de la página",u.innerHTML="Podrás conocer algunos detalles, funcionamiento de la página y sus características. ✅",o.style.display="none",n.style.alignItems="center",n.style.textAlign="center",A.style.display="block",e.style.display="none",t.style.display="none",o.style.display="none",document.getElementById("countdown").style.display="none",document.getElementById("btn-next").style.display="none",g.innerHTML="")}let fe=` <div class="card left">
          <img src="https://github.com/escuelamanjosanchezlimon/escmanejosanchezlimon/blob/main/sc-sanc.jpg?raw=true" alt="Imagen Tarjeta Izquierda">
          <div class="card-content">
              <h2 class="card-h2">Ubicación</h2>
              <p class="card-p">Limón, Barrio Sandoval al Costado del Taller de Tracasa, Oficina Un Bus amarillo Limón Limón, 70101.</p>
          </div>
      </div>
      
        <div class="card right">
          <img src="https://github.com/adminsanchez2025/ico-eduvial/blob/main/scmanejo.png?raw=true">
          <div class="card-content">
            <h2 class="card-h2">Información de contacto</h2>

            <p class="card-p ico-p" onclick="we();">
              <img src="https://github.com/adminsanchez2025/ico-eduvial/blob/main/whatsapp.png?raw=true" alt="WhatsApp Icono" class="img-icon">
              <span id="whatsApp-span">Contáctanos por WhatsApp 8622-3009</span>
            </p>
            <p class="card-p ico-p">
              <img src="https://github.com/adminsanchez2025/ico-eduvial/blob/main/facebooico.png?raw=true" alt="Icono de Facebook" class="img-icon">
              <a href="https://www.facebook.com/escuelamanejosanchezlimon/?locale=es_LA" target="_blank" rel="noopener noreferrer">Enlace del Facebook</a>
          </p>
          

                    </div>
        </div>`,Ie=` <div class="card left"  id="card1">
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
    
      `,n=document.getElementById("article1"),Ee=document.getElementById("img1"),N=document.querySelector(".container");function Le(){N.innerHTML="",A.style.display="none",document.getElementById("countdown").style.display="none",navigator.onLine?(N.innerHTML="",N.innerHTML=fe,document.getElementById("chart-container").style.display="none",document.getElementById("btn-next").style.display="none",g.innerHTML="",document.getElementById("btn-clearItem").style.display="none",N.style.display="flex",n&&(n.style.display="block",n.style.justifyContent="center",n.style.alignItems="center",n.style.textAlign="center"),o&&(o.style.display="none"),i&&(i.innerHTML="Bienvenidos a la Escuela de Manejo Sánchez"),u&&(u.innerHTML="En la Escuela de Manejo Sánchez, nuestra misión es formar conductores profesionales comprometidos con la seguridad vial y la excelencia en la conducción. 😊")):(document.getElementById("div-modalContainer").innerHTML=L("5","Este módulo requiere conexión a internet",""),T("5","5%","auto","10%","auto"),M("5"))}function we(){window.location.href="whatsapp://send?phone=86223009"}function Te(){var e=document.getElementById("titulo-principal");e.innerHTML="<p>ESCUELA DE MANEJO<br>SÁNCHEZ LIMÓN</p>",e.style.fontSize="24px",e.style.color="rgb(234, 201, 13)"}navigator.onLine&&Te();let Me=document.querySelectorAll(".card");function t(){var e=document.getElementById("card1"),t=document.getElementById("card2"),n=document.getElementById("card3");e&&t&&n&&(e.style.backgroundColor="rgb(244,234,234)",t.style.backgroundColor="rgb(158,255,62)",n.style.backgroundColor="rgb(255,132,150)",window.innerWidth<1065?(e.style.width="100%",e.style.marginTop="10px",e.style.marginBottom="10px",t.style.width="100%",t.style.marginTop="10px",t.style.marginBottom="10px",n.style.width="100%",n.style.marginTop="10px",n.style.marginBottom="10px"):(e.style.width="28%",e.style.height="225px",e.style.margin="5px",t.style.width="28%",t.style.height="225px",t.style.margin="5px",n.style.width="28%",n.style.height="225px",n.style.margin="5px"))}function xe(){A.style.display="none",document.getElementById("countdown").style.display="none",N.innerHTML="",N.innerHTML=Ie,N.style.display="flex",document.getElementById("btn-clearItem").style.display="none",t(),document.addEventListener("DOMContentLoaded",t),window.addEventListener("resize",t),i&&(i.innerHTML="¡Ofrecemos los siguientes servicios!"),u&&(u.innerHTML="Trámites para licencia y más. Puedes consultarnos por WhatsApp <b>8622-3009<b> 📞😊"),o.style.display="none",document.getElementById("chart-container").style.display="none",document.getElementById("btn-next").style.display="none",n.style.alignItems="center",n.style.textAlign="center",g.innerHTML=""}function Be(){confirm("¿Estás seguro de que quieres continuar?")&&(localStorage.removeItem("preguntas"),c.innerHTML="<h2>401 No Disponible</h2>",window.location.href=s)}function $e(e){Ce(e);var t=new Date,e=new Date(e);!(e<t)&&t<e||(c.innerHTML="<h2>401 No Disponible</h2>",window.location.href=s,localStorage.removeItem("preguntas"))}function Ce(e){var e=new Date(e),t=new Date,t=Math.abs(t-e)/36e5;return 36<t?(c.innerHTML="<h2>401 No Disponible</h2>",window.location.href=s,localStorage.removeItem("preguntas"),36):t}function He(e,t){return Number(e.toFixed(t))}
