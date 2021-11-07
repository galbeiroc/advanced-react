class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((accum, current) => {
      accum[current.id] = current;
      return accum;
    }, {})
  }

  getArticles () {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors () {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
