class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    }
  }

  mapIntoObject(arr) {
    return arr.reduce((accum, current) => {
      accum[current.id] = current;
      return accum;
    }, {})
  }

  getState = () => {
    return this.data;
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  };
}

export default DataApi;
