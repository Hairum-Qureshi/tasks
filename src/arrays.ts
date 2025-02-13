/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        const numbersCopy = [...numbers];
        numbersCopy.splice(1, 0, numbers[0]);
        return numbersCopy;
    } else {
        const findFirstAndLast = (num: number): boolean =>
            numbers.indexOf(num) == 0 ||
            numbers.indexOf(num) == numbers.length - 1;
        const firstAndLast = numbers.filter(findFirstAndLast);
        return firstAndLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringsToNumbers: number[] = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    return stringsToNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((value) => {
        if (value.includes("$")) {
            if (isNaN(Number(value.replace("$", "")))) {
                return 0;
            } else {
                return Number(value.replace("$", ""));
            }
        } else {
            if (isNaN(Number(value))) {
                return 0;
            } else {
                return Number(value);
            }
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((message: string): boolean => !message.endsWith("?"))
        .map((message: string) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length > 0) {
        const checkRGB: boolean[] = colors.map(
            (color: string): boolean =>
                color === "red" || color === "green" || color == "blue"
        );
        return checkRGB.every((bool: boolean): boolean => bool == true);
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    let stringRep = "";
    if (addends.length == 0) {
        stringRep = "0=0";
    } else {
        addends.map((num: number): number => (sum += num));
        stringRep += sum.toString() + "=";
        addends.map((num: number): string =>
            addends.indexOf(num) != addends.length - 1
                ? (stringRep += `${num}+`)
                : (stringRep += num.toString())
        );
    }
    return stringRep;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const valuesCopy = [...values];
    const findNegatives = (num: number): boolean => num < 0;
    const negativeNumbers = valuesCopy.filter(findNegatives);
    let sum = 0;
    if (negativeNumbers.length != 0) {
        const firstNegative = negativeNumbers[0];
        const getNegativeIndex: number[] = valuesCopy.map((): number =>
            valuesCopy.indexOf(firstNegative)
        );
        const negativeIndex: number = getNegativeIndex[0];

        const numsBeforeNegative = (num: number): boolean =>
            valuesCopy.indexOf(num) < negativeIndex;
        valuesCopy
            .filter(numsBeforeNegative)
            .map((num: number): number => (sum += num));
        valuesCopy.splice(negativeIndex + 1, 0, sum);
        return valuesCopy;
    } else {
        valuesCopy.map((num: number): number => (sum += num));
        const lastElem = valuesCopy.length - 1;
        valuesCopy.splice(lastElem + 1, 0, sum);
        return valuesCopy;
    }
}
