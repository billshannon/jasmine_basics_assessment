exports.outputLetterGrader = function (grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else if (grade >= 0) {
        return 'F'
    }
};

exports.outputAverageScore = function (score) {
    var sum = score.reduce(function (a, b) {
        return a + b;
    });
    var avg = sum / score.length;
    return avg
};

exports.outputMedianScore = function (values) {
    var sortValues = values.map(function (v) {
        return v;
    }).sort(function (a, b) {
        return a - b;
    });
    var middle = Math.floor((sortValues.length - 1) / 2);
    if (sortValues.length % 2) {
        return sortValues[middle];
    } else {
        return (sortValues[middle] + sortValues[middle + 1]) / 2.0;
    }
    return middle
};


exports.outputModeScore = function (scores) {

    scores.sort();
    var max = 0, result, freq = 0;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] === scores[i + 1]) {
            freq++;
        }
        else {
            freq = 0;
        }
        if (freq > max) {
            result = scores[i];
            max = freq;
        }
    }
    return result
};
