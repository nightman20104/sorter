class Sorter {
  constructor() {
    this.massiv = [];
  }

  add(element) {
    this.massiv.push(element);
  }

  at(index) {
    return this.massiv[index];
  }

  get length() {
    return this.massiv.length;
  }

  toArray() {
    return this.massiv;
  }

  sort(indices) {
      indices.sort();
      let temporaryMassiv = [];
      function compareNumbers(a, b) {
        return a - b;
      }
      for (let i = 0; i < indices.length; i++)  {
        temporaryMassiv[i] = this.massiv[indices[i]];
      }
      if (this.compareFunction)  {
        temporaryMassiv.sort(this.compareFunction);
      }
      else {
        temporaryMassiv.sort(compareNumbers);
      }
      let element = 0;
      for (let i = 0; i < indices.length; i++) {
        this.massiv[indices[i]] = temporaryMassiv[element];
        element++;
      }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
