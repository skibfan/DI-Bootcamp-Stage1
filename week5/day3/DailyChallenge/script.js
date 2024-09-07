class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch(){
        alert(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}


let film = new Video('LoTR', 'Bob', 13680)
film.watch()

let film2 = new Video('Matrix', 'Robert', 8160)
film2.watch()
