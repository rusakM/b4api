class ApiFeatures {
  constructor(query, queryString, defaultSortBy = "-title") {
    this.query = query;
    this.queryString = queryString;
    this.defaultSortBy = defaultSortBy;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "limit", "fields", "sort"];
    excludedFields.forEach(item => delete queryObj[item]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort(this.defaultSortBy);
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }

    return this;
  }
}

module.exports = ApiFeatures;
