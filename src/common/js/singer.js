const AVATAR_HOST = 'https://y.gtimg.cn/music/photo_new/T001R300x300M000'

export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = AVATAR_HOST + `${id}.jpg?max_age=2592000`
  }
}
