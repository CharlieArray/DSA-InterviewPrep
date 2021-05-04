function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partitionDance(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function partitionDance(array, start, end){
    const pivot = end-1;
      let order = - 1;
      let i = start;
      while (i != pivot) {
      if(array[i] > array[pivot]){
         swap(array, i, pivot)
         temp = i 
         i = pivot
         pivot = temp
         order *= - 1
      }
      i += order
    }
}

let array = [8, 6, 12, 5, 15, 9]

quickSort(array)