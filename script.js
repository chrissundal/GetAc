
function showHead1() {
    document.getElementById('dropTag5').innerHTML = /*HTML*/`
        <button onclick="showHead4()">
            ◀
        </button>
        <div>
            <img src="IMG/head1.png" />
        </div>
        <button onclick="showHead2()">▶</button>
    `;
}


function showHead2() {

    document.getElementById('dropTag5').innerHTML = /*HTML*/`
        <button onclick="showHead1()">
            ◀
        </button>
        <div>
        <img src="IMG/head2.png" />
        </div>
        <button onclick="showHead3()">▶</button>
    `;
}


function showHead3() {

    document.getElementById('dropTag5').innerHTML = /*HTML*/`
    <button onclick="showHead2()">
        ◀
        </button>
        <div>
        <img src="IMG/head3.png" />
        </div>
        <button onclick="showHead4()">▶</button>
    `;
}


function showHead4() {

    document.getElementById('dropTag5').innerHTML = /*HTML*/`
    <button onclick="showHead3()">
        ◀
        </button>
        <div>
        <img src="IMG/head4.png" />
        </div>
        <button onclick="showHead1()">▶</button>
    `;
}


function showBody1() {

    document.getElementById('dropTag6').innerHTML = /*HTML*/`
    <button onclick="showBody4()">
        ◀
        </button>
        <div>
        <img src="IMG/body1.png" />
        </div>
        <button onclick="showBody2()">▶</button>
    `;
}


function showBody2() {

    document.getElementById('dropTag6').innerHTML = /*HTML*/`
    <button onclick="showBody1()">
        ◀
        </button>
        <div>
        <img src="IMG/body2.png" />
        </div>
        <button onclick="showBody3()">▶</button>
    `;
}


function showBody3() {

    document.getElementById('dropTag6').innerHTML = /*HTML*/`
    <button onclick="showBody2()">
        ◀
        </button>
        <div>
        <img src="IMG/body3.png" />
        </div>
        <button onclick="showBody4()">▶</button>
    `;
}


function showBody4() {

    document.getElementById('dropTag6').innerHTML = /*HTML*/`
    <button onclick="showBody3()">
        ◀
        </button>
        <div>
        <img src="IMG/body4.png" />
        </div>
        <button onclick="showBody1()">▶</button>
    `;
}


function showLegs1() {

    document.getElementById('dropTag7').innerHTML = /*HTML*/`
    <button onclick="showLegs4()">
        ◀
        </button>
        <div>
        <img src="IMG/legs1.png" />
        </div>    
        <button onclick="showLegs2()">▶</button>
    `;
}


function showLegs2() {

    document.getElementById('dropTag7').innerHTML = /*HTML*/`
    <button onclick="showLegs1()">
        ◀
        </button>
        <div>
        <img src="IMG/legs2.png" />
        </div>
        <button onclick="showLegs3()">▶</button>
    `;
}


function showLegs3() {

    document.getElementById('dropTag7').innerHTML = /*HTML*/`
    <button onclick="showLegs2()">
        ◀
        </button>
        <div>
        <img src="IMG/legs3.png" />
        </div>
        <button onclick="showLegs4()">▶</button>
    `;
}


function showLegs4() {

    document.getElementById('dropTag7').innerHTML = /*HTML*/`
    <button onclick="showLegs3()">
        ◀
        </button>
        <div>
        <img src="IMG/legs4.png" />
        </div>
        <button onclick="showLegs1()">▶</button>
    `;
}

function show1() {
    blankAll();
    document.getElementById('dropTag1').innerHTML = /*HTML*/`

    De to viktigste verktøyene vi skal bruke er disse:
    <ul>
                <li>
                    Koderedigeringsprogrammet
                    <a href="https://code.visualstudio.com/">
                        Visual Studio code</a>
                        <br />
                        Vi skal bruke noen <i>extentions:</i>
                        <ul>
                            <li>Javascript-booster</li>
                            <li>es6-string-html</li>
                            <li>live-server</li>
                            <li>live-share</li>
                        </ul>
                        </li>
                    <li>Nettleseren<a href="https://google.com/intl/no/chrome/">Google Chrome</a></li>
                </ul>

                `;
}

function show2() {
    blankAll();
    document.getElementById('dropTag2').innerHTML = /*HTML*/`

    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li>&lt;div&gt;</li>
        <li>&lt;input type="text"&gt;</li>
        <li>&lt;button&gt;</li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
            </ul>
            `;
}

function show3() {
    blankAll();
    document.getElementById('dropTag3').innerHTML = /*HTML*/`
            
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li>background-color</li>
                <li>color</li>
                <li>padding</li>
                <li>margin</li>
                <li>border</li>
                <li>text-align</li>
                <li>font-size</li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                </li>
                </ul>
                `;
}
function show4() {
    blankAll();
    document.getElementById('dropTag4').innerHTML = /*HTML*/`
    
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering ved
    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>background-color</li>
        <li>color</li>
        <li>padding</li>
        <li>margin</li>
        <li>border</li>
        <li>border-radius</li>
        <li>text-align</li>
        <li>font-size</li>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.</li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                Reference</a></li>        
    </ul>
                
                `;
}

function show5() {
    blankAll();
    showHead1();
    showBody1();
    showLegs1();



}
function blankAll() {
    document.getElementById('dropTag1').innerHTML = ``;
    document.getElementById('dropTag2').innerHTML = ``;
    document.getElementById('dropTag3').innerHTML = ``;
    document.getElementById('dropTag4').innerHTML = ``;
    document.getElementById('dropTag5').innerHTML = ``;
    document.getElementById('dropTag6').innerHTML = ``;
    document.getElementById('dropTag7').innerHTML = ``;

}

function layout1() {


    document.getElementById('container').classList = [];
    document.getElementById('container').classList.add('layout1');
}
function layout2() {
    document.getElementById('container').classList = [];
    document.getElementById('container').classList.add('layout2');
}
function layout3() {
    document.getElementById('container').classList = [];
    document.getElementById('container').classList.add('layout3');
}
function layout4() {
    document.getElementById('container').classList = [];
    document.getElementById('container').classList.add('layout4');
}