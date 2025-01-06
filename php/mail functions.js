globalThis.mailFunctions = [
    snip(`mail($\{});$\{}`, {
        label: "mail()",
        detail: "Mail",
        type: "method",
        info: `The mail() function allows you to send emails directly from a script.`
    }),
    snip(`ezmlm_hash($\{});$\{}`, {
        label: "ezmlm_hash()",
        detail: "Mail",
        type: "method",
        info: `The ezmlm_hash() function calculates the hash value needed when keeping EZMLM mailing lists in a MySQL database.<br><br>
This function accepts an email address, for which it calculates an integer hash value. This value is compatible with the EZMLM mailing list manager, and can then be used with the EZMLM database for user management.`
    })
];