var a1 = [10, 100, 50, 20];

var bsort = function (a) {
    var numPasses = a.length - 1;
    for (i = 0; i < numPasses; i++) {
        for (j = 0; j < a.length - i; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        } //end inner for
    } //end outer for
    return a;
}

console.log(bsort([4, 2, 6, 500, 89, 23, 45, 98]));
