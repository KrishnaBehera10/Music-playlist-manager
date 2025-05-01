class Song {
  constructor(title, duration, artist, genre, album) {
    this.title = title;
    this.duration = duration;
    this.artist = artist;
    this.genre = genre;
    this.album = album;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.song = [];
  }
  addSong(song) {
    this.song.push(song);
    this.UI();
  }

  UI() {
    let playlist = document.querySelector(".list");
    let empty = document.querySelector(".empty");

    playlist.innerHTML = "";

    if (this.song.length === 0) {
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
    }
    this.song.forEach((Element, index) => {
      let li = document.createElement("li");
      li.innerHTML = `
            <div class="li_list">
              <p>${Element.title}</p>
              <p>${Element.artist}</p>
              <div>Album : ${Element.album} 
              <span><i class="ri-timer-flash-line" style="margin-right: 2px"></i> ${Element.duration}</span>
              <span class="genre">${Element.genre}</span></div>
            </div>
            <button class="remove" data-index=${index} >remove</button>
          `;

      playlist.appendChild(li);
    });

    let remove = document.querySelectorAll(".remove");
    remove.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let index = e.target.getAttribute("data-index");
        this.song.splice(index, 1);
        this.UI();
      });
    });
  }
}

let playlist = new Playlist("my fevourite");

let addSong = document.querySelector(".add");
//  -------------->> addeventListener
addSong.addEventListener("click", () => {
  let songtitle = document.querySelector(".song").value;
  let duration = document.querySelector(".duration").value;
  let artist = document.querySelector(".artist").value;
  let genre = document.querySelector(".genre").value;
  let album = document.querySelector(".album").value;

  if (songtitle && duration && artist && genre && album) {
    let song = new Song(songtitle, duration, artist, genre, album);
    playlist.addSong(song);

    document.querySelector(".song").value = "";
    document.querySelector(".duration").value = "";
    document.querySelector(".artist").value = "";
    document.querySelector(".genre").value = "";
    document.querySelector(".album").value = "";
  } else {
    alert("add playlist");
  }
});
