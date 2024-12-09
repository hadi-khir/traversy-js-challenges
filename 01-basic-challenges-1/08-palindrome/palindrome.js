function isPalindrome(palindrome) {

    const normalized = palindrome.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < normalized.length / 2; i++) {

        if (normalized[i] !== normalized[normalized.length - i - 1]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
