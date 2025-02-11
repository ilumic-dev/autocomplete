window.phpIntellisense.exceptionFunctions = [
    //? ------------------ Exception()
    window.cmSnip(`Exception($\{})$\{}`, {
        label: "Exception()",
        type: "method",
        info: `The Exception() function creates an exception object.`
    }),
    //? ------------------ getCode()
    window.cmSnip(`getCode();$\{}`, {
        label: "getCode()",
        type: "method",
        info: `The <code>getCode()</code> method returns an integer which can be used to identify the exception.`
    }),
    //? ------------------ getFile()
    window.cmSnip(`getFile();$\{}`, {
        label: "getFile()",
        type: "method",
        info: `The <code>getFile()</code> method returns the absolute path to the file where an exception occurred.`
    }),
    //? ------------------ getMessage()
    window.cmSnip(`getMessage();$\{}`, {
        label: "getMessage()",
        type: "method",
        info: `The <code>getMessage()</code> method returns a description of the error or behaviour that caused the exception to be thrown.`
    }),
    //? ------------------ getLine()
    window.cmSnip(`getLine();$\{}`, {
        label: "getLine()",
        type: "method",
        info: `The <code>getLine()</code> method returns the line number of the line of code which threw the exception.`
    }),
    //? ------------------ getPrevious()
    window.cmSnip(`getPrevious();$\{}`, {
        label: "getPrevious()",
        type: "method",
        info: `If the exception was triggered by another one, then the <code>getPrevious()</code> method returns the other exception. Otherwise it returns null.`
    }),
    //? ------------------ getTrace()
    window.cmSnip(`getTrace();$\{}`, {
        label: "getTrace()",
        type: "method",
        info: `The <code>getTrace()</code> method returns a stack trace in the form of an array.<br><br>
Stack traces contain information about all of the functions that are running at a given moment. The stack trace provided by this method has information about the stack at the time that the exception was thrown.`
    }),
    //? ------------------ getTraceAsString()
    window.cmSnip(`getTraceAsString();$\{}`, {
        label: "getTraceAsString()",
        type: "method",
        info: `The <code>getTraceAsString()</code> method returns a stack trace in the form of a string.<br><br>
Stack traces contain information about all of the functions that are running at a given moment. The stack trace provided by this method has information about the stack at the time that the exception was thrown.`
    }),
]