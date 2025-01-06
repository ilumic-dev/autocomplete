window.phpIntellisense.keywords = [
    //? ------------------ echo
    window.cmSnip(`echo "$\{}";$\{}`, {
        label: "echo",
        type: "keyword",
        info: `The <code>echo</code> keyword is used to output text. The echo statement can output multiple strings
separated by commas.`
    }),
    //? ------------------ null
    {
        "label": "null",
        "type": "keyword"
    },
    //? ------------------ true
    {
        "label": "true",
        "type": "keyword"
    },
    //? ------------------ false
    {
        "label": "false",
        "type": "keyword"
    },
    //? ------------------ abstract
    window.cmSnip(`abstract $\{}`, {
        label: "abstract",
        type: "keyword",
        info: `The <code>abstract</code> keyword declares a class as abstract.<br><br>
Abstract classes cannot be instantiated, but they can be extended.`
    }),
    //? ------------------ and
    window.cmSnip(`and $\{}`, {
        label: "and",
        type: "keyword",
        info: `The <code>and</code> keyword is a logical operator.<br><br>
Logical operators are used to combine conditional statements.<br><br>
The return value will only be <code>true</code> if both statements return <code>true</code>, otherwise it will return <code>false</code>.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The difference between <code>and</code> and <code>&&</code> is that <code>and</code> has very low precedence, meaning that most other operations get evaluated first.`
    }),
    //? ------------------ as
    window.cmSnip(`as $\{}`, {
        label: "as",
        type: "keyword",
        info: `The <code>as</code> keyword is used by the <code>foreach</code> loop to establish which variables contain the key and value of an element.<br><br>
The <code>as</code> keyword can also be used by namespaces and traits to give them an alias.`
    }),
    //? ------------------ break
    window.cmSnip(`break;$\{}`, {
        label: "break",
        type: "keyword",
        info: `The <code>break</code> keyword is used to break out of <code>for</code> loops, <code>foreach</code> loops, <code>while</code> loops, <code>do..while</code> loops and <code>switch</code> conditions.<br><br>
In the <code>switch</code> block, all the code following a case statement will be executed until a break keyword is found. This could also be code belonging to another case.`
    }),
    //? ------------------ callable
    window.cmSnip(`callable $\{}`, {
        label: "callable",
        type: "keyword",
        info: `The <code>callable</code> keyword is used to force a function argument to be a reference to a function.<br><br>
<b>A callable can be one of the following:</b>
<ul>
    <span class="li">An anonymous function</span>
    <span class="li">A string containing the name of a function</span>
    <span class="li">An array describing a static class method</span>
    <span class="li">An array describing an object method</span>
</ul>
`
    }),
    //? ------------------ case
    window.cmSnip(`case $\{}:
    $\{}`, {
        label: "case",
        type: "keyword",
        info: `The <code>case</code> keyword is used to jump to a line of code when an expression has a specific value in a switch conditional.`
    }),
    //? ------------------ catch
    window.cmSnip(`catch ($\{}) {
    $\{}
}$\{}`, {
        label: "catch",
        type: "keyword",
        info: `The <code>catch</code> keyword is used to handle exceptions that are thrown by the code in a preceding <b>try block</b>.`
    }),
    //? ------------------ class
    window.cmSnip(`class $\{} {
    $\{}
}$\{}`, {
        label: "class",
        type: "keyword",
        info: `The <code>class</code> keyword is used to create classes.`
    }),
    //? ------------------ clone
    window.cmSnip(`clone $\{};$\{}`, {
        label: "clone",
        type: "keyword",
        info: `The <code>clone</code> keyword is used to create a copy of an object.<br><br>
If any of the properties was a reference to another variable or object, then only the reference is copied. Objects are always passed by reference, so if the original object has another object in its properties, the copy will point to the same object. This behavior can be changed by creating a <code>__clone()</code> method in the class.`
    }),
    //? ------------------ const
    window.cmSnip(`window.phpIntellisense.$\{} = $\{};$\{}`, {
        label: "const",
        type: "keyword",
        info: `The <code>const</code> keyword is used to create constants. Unlike with the <code>define()</code> function, constants created using the <code>const</code> keyword must be declared in the global scope.`
    }),
    //? ------------------ continue
    window.cmSnip(`continue;$\{}`, {
        label: "continue",
        type: "keyword",
        info: `The <code>continue</code> keyword is used to is used to end the current iteration in a <code>for</code>, <code>foreach</code>, <code>while</code>
or <code>do..while</code> loop, and continues to the next iteration.`
    }),
    //? ------------------ declare
    window.cmSnip(`declare($\{}) {
    $\{}
}$\{}`, {
        label: "declare",
        type: "keyword",
        info: `The <code>declare</code> keyword sets an execution directive for a block of code. If the <code>declare</code> 
statement is not followed by a block then the directive applies to the rest of the code in the
file.<br><br>
There are three directives which can be declared: <code>ticks</code>, <code>encoding</code> and
<code>strict_types</code>.<br><br>
The <code>ticks</code> directive will send a tick event each time a specified number of instructions
have been executed. A tick function can be registered which will run each time a tick event
fires.<br><br>
The <code>encoding</code> directive is used to indicate what character encoding the file is using. It
cannot be used on a block, it has to apply to the whole file.<br><br>When the <code>strict_types</code> directive is set, values of the wrong type passed into function
arguments with type hints will throw a fatal error instead of being cast to the correct type.`
    }),
    //? ------------------ default
    window.cmSnip(`default:
    $\{}`, {
        label: "default",
        type: "keyword",
        info: `The <code>default</code> keyword is used in a <code>switch</code> block to specify which code to run when none
of the <code>case</code> statements were matched by the expression.`
    }),
    //? ------------------ do
    window.cmSnip(`do {
    $\{}
}$\{}`, {
        label: "do",
        type: "keyword",
        info: `The <code>do</code> keyword creates a loop which always runs at least once. It is used together with
the <code>while</code> keyword to create a <code>do...while</code> loop.`
    }),
    //? ------------------ else
    window.cmSnip(`else {
    $\{}
}$\{}`, {
        label: "else",
        type: "keyword",
        info: `The <code>else</code> keyword specifies a block of code which should run when the condition of an if
statement is not met.`
    }),
    //? ------------------ else if
    window.cmSnip(`else if($\{condition}) {
    $\{}
}$\{}`, {
        label: "else if",
        type: "keyword",
        info: `The <code>elseif</code> keyword tests a new condition if the condition of a previous <code>if</code> or <code>elseif</code>
statement was not met. It is equivalent to putting an <code>if</code> statement inside an else block.`
    }),
    //? ------------------ empty
    window.cmSnip(`empty($\{})`, {
        label: "empty()",
        type: "method",
        info: `The <code>empty</code> is a function which returns true if a variable does not exist, or if its value is considered empty. The <code>empty</code> keyword also evaluates expressions which are not in a variable.<br><br><b>A value is considered empty if its value is any of the following:</b><ul>
                <span class='li'>An empty string</span>
                <span class='li'>An empty array</span>
                <span class='li'>The integer 0</span>
                <span class='li'>The floating point number 0.0</span>
                <span class='li'>The string 0</span>
                <span class='li'>Boolean false</span>
                <span class='li'>null</span>
            </ul>`
    }),
    //? ------------------ enddeclare
    window.cmSnip(`enddeclare;$\{}`, {
        label: "enddeclare",
        type: "keyword",
        info: `The <code>enddeclare</code> keyword is used to close a <code>declare</code> block which was started using the
<code>declare(...):</code> syntax.`
    }),
    //? ------------------ endfor
    window.cmSnip(`endfor;$\{}`, {
        label: "endfor",
        type: "keyword",
        info: `The <code>endfor</code> keyword is used to close the code block of a <code>for</code> loop which was started
using the <code>for(...):</code> syntax.`
    }),
    //? ------------------ endforeach
    window.cmSnip(`endforeach;$\{}`, {
        label: "endforeach",
        type: "keyword",
        info: `The <code>endforeach</code> keyword is used to close the code block of a <code>foreach</code> loop which was
started using the <code>foreach(...):</code> syntax.`
    }),
    //? ------------------ endif
    window.cmSnip(`endif;$\{}`, {
        label: "endif",
        type: "keyword",
        info: `The <code>endif</code> keyword is used to mark the end of an <code>if</code> conditional which was started with
the <code>if(...):</code> syntax. It also applies to any variation of the <code>if</code> conditional, such as
<code>if...elseif</code> and <code>if...else</code>.`
    }),
    //? ------------------ endswitch
    window.cmSnip(`endswitch;$\{}`, {
        label: "endswitch",
        type: "keyword",
        info: `The <code>endswitch</code> keyword is used to mark the end of a <code>switch</code> conditional which was
started with the <code>switch(...):</code> syntax.`
    }),
    //? ------------------ extends
    window.cmSnip(`extends $\{}`, {
        label: "extends",
        type: "keyword",
        info: `The <code>extends</code> keyword is used to derive a class from another class. This is called
inheritance. A derived class has all the public and protected properties of the class that it
is derived from.`
    }),
    //? ------------------ final
    window.cmSnip(`final $\{class} $\{}`, {
        label: "final",
        type: "keyword",
        info: `The <code>final</code> keyword is used to prevent a class from being inherited and to prevent
inherited method from being overridden.`
    }),
    //? ------------------ finally
    window.cmSnip(`finally {
    $\{}
}`, {
        label: "finally",
        type: "keyword",
        info: `The <code>finally</code> keyword is used in <code>try...finally</code> and <code>try...catch...finally</code>
structures to run a block of code whether an exception occurred.`
    }),
    //? ------------------ fn
    window.cmSnip(`fn($\{arguments}) => $\{expression};$\{}`, {
        label: "fn",
        type: "keyword",
        info: `The <code>fn</code> keyword is used to create arrow functions. Arrow functions are only available in
PHP versions 7.4 and up.<br><br>Arrow functions have access to all variables from the scope in which they were created.`
    }),
    //? ------------------ for
    window.cmSnip(`for ($\{initialization}; $\{condition}; $\{update}) {
    $\{}
}$\{}`, {
        label: "for",
        type: "keyword",
        info: `The <code>for</code> keyword is used to create a for 
loop, which loops through a block of code a specified number of times.`
    }),
    //? ------------------ foreach
    window.cmSnip(`foreach ($\{$array} as $\{$key} => $\{$value}) {
    $\{}
}$\{}`, {
        label: "foreach",
        type: "keyword",
        info: `The <code>foreach</code> keyword is used to create 
foreach loops, which loops through a block of code for each element in an array.`
    }),
    //? ------------------ function
    window.cmSnip("function ${name}(${params}) {\n\t${}\n}${}", {
        label: "function",
        type: "keyword",
        info: `The <code>function</code> keyword is used to create a function.`
    }),
    //? ------------------ global
    window.cmSnip(`global $\{$name};$\{}`, {
        label: "global",
        type: "keyword",
        info: `The <code>global</code> keyword imports variables from the global scope into the local scope of a function.`
    }),
    //? ------------------ if
    window.cmSnip(`if ($\{condition} {
    $\{}
}$\{}`, {
        label: "if",
        type: "keyword",
        info: `The <code>if</code> keyword is used to create an if conditional. The <code>elseif</code> and <code>else</code> keywords can be used to specify code that runs when the condition is not met.`
    }),
    //? ------------------ implements
    window.cmSnip(`implements $\{interface} {
    $\{}
}$\{}`, {
        label: "implements",
        type: "keyword",
        info: `The <code>implements</code> keyword is used to declare that a class must have the methods described in the specified interface. This is called polymorphism. Polymorphism makes it easy to use a variety of different objects in the same way.`
    }),
    //? ------------------ include
    window.cmSnip(`include('$\{filename}');$\{}`, {
        label: "include()",
        type: "method",
        info: `The <code>include</code> function is used to embed PHP code from another file. If the file is not found, a warning is shown and the program continues to run.`
    }),
    //? ------------------ include_once
    window.cmSnip(`include_once('$\{filename}');$\{}`, {
        label: "include_once()",
        type: "method",
        info: `The <code>include_once</code> keyword is used to embed PHP code from another file. If the file is not found, a warning is shown and the program continues to run. If the file was already included previously, this statement will not include it again.`
    }),
    //? ------------------ instanceof
    window.cmSnip(`instanceof $\{class}$\{}`, {
        label: "instanceof",
        type: "keyword",
        info: `The <code>instanceof</code> keyword is used to check if an object belongs to a class. The comparison returns true if the object is an instance of the class, it returns false if it is not.`
    }),
    //? ------------------ insteadof
    window.cmSnip(`insteadof $\{name};$\{}`, {
        label: "insteadof",
        type: "keyword",
        info: `The <code>insteadof</code> keyword allows you to select from which trait a method should be taken if more than one trait has a method with the same name.`
    }),
    //? ------------------ interface
    window.cmSnip(`interface $\{name} {
    $\{}
}$\{}`, {
        label: "interface",
        type: "keyword",
        info: `The <code>interface</code> keyword is used to create interfaces.<br><br>
An interface is a structure which defines a list of methods that must exist in a class.<br><br>
Interfaces are a good way to allow many different classes to be used in the same way.<br><br>
The <code>implements</code> keyword can be used to make a class use an interface.`
    }),
    //? ------------------ isset
    window.cmSnip(`isset($\{$name});$\{}`, {
        label: "isset()",
        type: "method",
        info: `The <code>isset()</code> function checks whether a variable is set, which means that it has to be declared and is not NULL.<br><br>
This function returns true if the variable exists and is not NULL, otherwise it returns false.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If multiple variables are supplied, then this function will return true only if all the variables are set.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> A variable can be unset with the unset() function.`
    }),
    //? ------------------ list
    window.cmSnip(`list($\{variables}) = [$\{values}];$\{}`, {
        label: "list",
        type: "keyword",
        info: `The <code>list</code> keyword keyword assigns elements of an array to a list of variables.<br><br>
If there are not enough elements in the array it will output a notice and assign null to the remaining variables.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Since PHP 7.1.0, which elements are assigned to the variables can be selected using arrow <code>=></code> syntax.`
    }),
    //? ------------------ namespace
    window.cmSnip(`namespace $\{name};$\{}`, {
        label: "namespace",
        type: "keyword",
        info: `The <code>namespace</code> keyword is used to declare in which namespace a PHP file is operating. Namespaces prevent conflicts between classes that have the same name and can be used to organize code by grouping related classes together.`
    }),
    //? ------------------ new
    window.cmSnip(`new $\{};$\{}`, {
        label: "new",
        type: "keyword"
    }),
    //? ------------------ or
    window.cmSnip(`or $\{}`, {
        label: "or",
        type: "keyword",
        info: `The <code>or</code> keyword is a logical operator.<br><br>
Logical operators are used to combine conditional statements.<br><br>
The return value will be <code>true</code> if any one of the statements return <code>true</code>, otherwise it will return <code>false</code>.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The difference between <code>or</code> and <code>||</code> is that or has very low precedence, meaning that most other operations get evaluated first.`
    }),
    //? ------------------ print
    window.cmSnip(`print "$\{}";$\{}`, {
        label: "print",
        type: "keyword",
        info: `The <code>print</code> keyword is used to output text.<br><br>
Unlike <code>echo</code>, <code>print</code> can only output one string at a time. Also, print has a return value, which is always 1.`
    }),
    //? ------------------ private
    window.cmSnip(`private $\{$name} = $\{value};$\{}`, {
        label: "private",
        type: "keyword",
        info: `The <code>private</code> keyword is an access modifier. It marks a property or method as private.<br><br>
Private properties and methods can only be used by the class in which the property or method was defined. Derived classes and outside code cannot use them.`
    }),
    //? ------------------ protected
    window.cmSnip(`protected $\{$name} = $\{value};$\{}`, {
        label: "protected",
        type: "keyword",
        info: `The <code>protected</code>  keyword is an access modifier. It marks a property or method as protected.<br><br>
Protected properties and methods can only be used by the class in which the property or method was defined and any classes that derive from it. Any other code cannot use them.`
    }),
    //? ------------------ public
    window.cmSnip(`public $\{$name} = $\{value};$\{}`, {
        label: "public",
        type: "keyword",
        info: `The <code>public</code> keyword is used to embed PHP code from another file. If the file is not found, a fatal error is thrown and the program stops.`
    }),
    //? ------------------ require
    window.cmSnip(`require('$\{filename}');`, {
        label: "require",
        type: "method",
        info: `The <code>require</code> function is used to embed PHP code from another file. If the file is not found, a fatal error is thrown and the program stops.`
    }),
    //? ------------------ require_once
    window.cmSnip(`require_once('$\{filename}');`, {
        label: "require_once",
        type: "method",
        info: `The <code>require_once</code> function is used to embed PHP code from another file. If the file is not found, a fatal error is thrown and the program stops. If the file was already included previously, this statement will not include it again.`
    }),
    //? ------------------ return
    window.cmSnip(`return $\{};$\{}`, {
        label: "return",
        type: "keyword"
    }),
    //? ------------------ static
    window.cmSnip(`static $\{}`, {
        label: "static",
        type: "keyword",
        info: `The <code>static</code> keyword is used to declare properties and methods of a class as static. Static properties and methods can be used without creating an instance of the class.<br><br>
The static keyword is also used to declare variables in a function which keep their value after the function has ended.`
    }),
    //? ------------------ switch
    window.cmSnip(`switch ($\{expression}) {
    $\{cases}
}$\{}`, {
        label: "switch",
        type: "keyword",
        info: `The <code>switch</code> keyword is used to create a switch conditional.<br><br>
Switch conditionals choose a block of code to run based on the value of an expression.`
    }),
    //? ------------------ throw
    window.cmSnip(`throw new Exception('$\{message}');`, {
        label: "throw",
        type: "keyword",
        info: `The <code>throw</code> keyword is used to throw exceptions. Exceptions are a way to change the program flow if an unexpected situation arises, such as invalid data.<br><br>
The <code>try...catch...finally</code> structure can be used to handle exceptions.`
    }),
    //? ------------------ trait
    window.cmSnip(`trait $\{$name} {
    $\{statements}
}`, {
        label: "trait",
        type: "keyword",
        info: `The <code>trait</code> keyword is used to create traits. Traits are a way to allow classes to inherit multiple behaviours.`
    }),
    //? ------------------ try
    window.cmSnip(`try {
    $\{statements}
}$\{}`, {
        label: "try",
        type: "keyword",
        info: `The <code>try</code> keyword is used to create a try-catch block.<br><br>
Try-catch blocks are used to handle errors in a program.`
    }),
    //? ------------------ use
    window.cmSnip(`use $\{namespace};$\{}`, {
        label: "use",
        type: "keyword",
        info: `The <code>use</code> keyword has two purposes: it tells a class to inherit a trait, and it gives an alias to a namespace.`
    }),
    //? ------------------ var
    window.cmSnip(`var $\{$name} = $\{value};$\{}`, {
        label: "var",
        type: "keyword",
        info: `The <code>var</code> keyword creates a property in a class. Since PHP 5, it is equivalent to the <code>public</code> keyword.`
    }),
    //? ------------------ while
    window.cmSnip(`while ($\{condition}) {
    $\{statements}
}$\{}`, {
        label: "while",
        type: "keyword",
        info: `The <code>while</code> keyword is used to create a <code>while</code> loop and is also used to set the looping condition of a <code>do...while</code>.`
    }),
    //? ------------------ xor
    window.cmSnip(`xor $\{}`, {
        label: "xor",
        type: "keyword",
        info: `The <code>xor</code> keyword is a logical operator.<br><br>
Logical operators are used to combine conditional statements.<br><br>
The return value will only be <code>true</code> if one of the statements is <code>true</code> and the other one is <code>false</code>.`
    }),
    //? ------------------ yield
    window.cmSnip(`yield $\{}`, {
        label: "yield",
        type: "keyword",
        info: `The <code>yield</code> keyword is used to create a generator function. Generator functions act as iterators which can be looped through with a <code>foreach</code> loop.<br><br>
The value given by the <code>yield</code> keyword is used as a value in one of the iterations of the loop.`
    }),
    //? ------------------ yield from
    window.cmSnip(`yield from $\{}`, {
        label: "yield from",
        type: "keyword",
        info: `The <code>yield from</code> keyword is used to create a generator function. Generator functions act as iterators which can be looped through with a <code>foreach</code> loop.<br><br>
The <code>yield from</code> keyword provides the values from an iterator one by one each time the generator function is called until there are no items left in the iterator, then the generator will move on to the next <code>yield</code> keyword.`
    })
]