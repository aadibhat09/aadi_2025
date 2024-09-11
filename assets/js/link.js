const link = document.getElementById("switch");
const count = document.getElementById("count");
const funWebsites = [
  "https://interactive.parade.com/healthy-now-starter-kit/p/1",
  "https://findtheinvisiblecow.com/",
  "https://www.mapcrunch.com/",
  "https://theuselessweb.com/",
  "http://hackertyper.com/",
  "http://papertoilet.com/",
  "https://chat.openai.com/",
  "https://pointerpointer.com/",
  "https://www.nytimes.com/games/wordle/index.html",
  "http://www.staggeringbeauty.com/",
  "https://screamintothevoid.com/",
  "https://duotrigordle.com/",
  "https://archive.org/web/",
  "http://dontevenreply.com/",
  "https://stellarium-web.org/",
  "http://www.shutupandtakemymoney.com/",
  "https://play2048.co/",
  "http://www.drivemeinsane.com/",
  "https://www.pinterest.com/",
  "https://apod.nasa.gov/apod/astropix.html",
  "https://musclewiki.com/",
  "https://www.duolingo.com/",
  "https://www.internetlivestats.com/",
  "http://hubski.com/",
  "https://thisissand.com/",
  "https://lizardpoint.com/",
  "http://radio.garden/search",
  "https://www.musictheory.net/",
  "https://radiooooo.com/",
  "https://sleepyti.me/",
  "https://trypap.com/",
  "https://www.codecademy.com/",
  "https://29a.ch/sandbox/2011/neonflames/#",
  "https://explore.org/livecams/cats/kitten-rescue-cam",
  "https://www.whatshouldireadnext.com/",
  "https://myfridgefood.com/",
  "https://www.onread.com/",
  "https://www.omfgdogs.com/#",
  "http://weavesilk.com/",
  "https://eyebleach.me/",
  "https://en.wikipedia.org/wiki/List_of_conspiracy_theories",
  "https://www.merriam-webster.com/word-of-the-day",
  "https://pokemonshowdown.com/",
  "https://www.sporcle.com/",
  "https://www.poptropica.com/",
  "https://koalabeast.com/",
  "http://orteil.dashnet.org/cookieclicker/",
  "https://habitica.com/static/front",
  "http://www.foddy.net/2010/10/qwop/",
  "http://www.flashbynight.com/",
  "https://xkcd.com/",
  "http://youarelistening.to/",
  "https://www.incredibox.com/",
  "https://asoftmurmur.com/",
  "https://www.rainymood.com/",
  "http://flashbynight.com/drench/",
  "https://quickdraw.withgoogle.com/",
  "https://www.dafont.com/",
  "https://spacejam.com/",
  "https://www.retailmenot.com/",
  "https://www.mint.com/",
  "https://tastedive.com/",
  "https://www.addictivetips.com/",
  "https://archive.org/details/msdos_Oregon_Trail_The_1990",
  "https://www.instructables.com/",
  "https://www.snopes.com/",
  "https://nicenews.com/",
  "https://www.theonion.com/",
  "https://lifehacker.com/",
  "https://mix.com/",
  "https://www.wizardingworld.com/",
  "https://codepen.io/akm2/full/rHIsa",
  "https://www.lego.com/en-us/kids",
  "https://www.ocearch.org/tracker/?list",
];
function switchLink() {
  link.href = funWebsites[Math.floor(Math.random() * funWebsites.length)];
  document.getElementById("count").innerText = String(
    parseInt(document.getElementById("count").innerText) + 1
  );
  if (document.getElementById("count").innerText == "1") {
    document.getElementById("s").innerText = "";
  } else {
    document.getElementById("s").innerText = "s";
  }
}
