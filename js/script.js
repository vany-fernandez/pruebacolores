const header = document.querySelector("header");
const footer = document.querySelector("footer"); 


/*  **********************   *
        ONE     HEADER
 *  **********************   */
header.innerHTML = `

<div class="logo">
<img class="img" src="assets/imgs/triquetra_64px.png" alt="triquetra">
<a href="index.html">
    <h2><span>CodeAr</span>Tech</h2>
</a>
</div>

<button class="abrir" id="abrir">
<i class="fa-solid fa-bars" style="color: #000000;"></i>
</button>

<!-- Menú -->
<nav class="nav" id="nav">
<button class="cerrar" id="cerrar">
    <i class="fa-solid fa-xmark" style="color: #e3eaf4;"></i>
</button>
<ul class="nav-list">
    <li id="myLinks"><a href="index.html"><i>CODEAR</i></a></li>
    <li id="myLinks"><a href="know_us.html"><i>CONOCENOS</i></a></li>
    <li id="myLinks"><a href="success_stories.html"><i>CASOS</i></a></li>
    <li id="myLinks"><a href="contact_us.html"><i>CONTACTANOS</i></a></li>
    <li id="myLinks"><a href="codeemos.html"><i>CODEEMOS</i></a></li>
</ul>
</nav>
<!--  BUTTON  UP  -->
<button onclick="topFunction()" id="myBtn" title="Go to top"><img src="assets/imgs/triquetra_32px.png"
alt="triquetra">
</button>
<!--  THEME  -->
<label class="switch">
<input type="checkbox" id="deslizar" checked>
<span class="deslizar"></span>
</label>
`;

/*  **********************   *
        ONE     FOOTER
 *  **********************   */
footer.innerHTML = `

<div class="footer_img">
<img src="assets/imgs/triquetra_256px.png" alt="triquetra">
</div>
<div class="copyright">
<h2><span>CodeAr</span>Tech</h2></a> <br>
<i>
    <p>Code Argentina Tech S.R.L </p> <br>
    <p> <!--  script que actualiza el año al actual  -->
        <script type="text/javascript">
            copyright = new Date();
            update = copyright.getFullYear(); document.write("© " + update + " " + "@All rights reserved");
        </script>
    </p><br>
</i>
</div>
<div class="casos">
<a href="success_stories.html">Casos de éxito</a>
</div>
<div class="valor">
<a href="codeemos.html">Codea con nosotros!</a>
</div>
<div class="conocenos">
<a href="know_us.html">Conocenos!</a>
</div>
<div class="contactanos">
<a href="contact_us.html">Contactanos</a>
</div>
<div class="redes">
<a href="https://www.linkedin.com" target="_blank">
    <i class="fa-brands fa-linkedin"></i>
</a>
<a href="https://discord.com" target="_blank">
    <i class="fa-brands fa-discord"></i>
</a>
<a href="https://github.com/Gimena-Riveros/CodeArTech" target="_blank">
<i class="fa-brands fa-github"></i>
</a><br>
<a href="">English </a>|<a href=""> Español</a>
</div>
`;