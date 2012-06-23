Using namespaceLogger
=====================

Include the Javascript file or paste the code in the console to initialize the namespaceLogger:

    Found 538 fields in namespace [object Window]
    Found 1 special field: namespaceLogger
    Found 1 non-function special field: namespaceLogger
    Full log in window.namespaceLogger.lastLog 

A special field in the window namespace is one that is not found by default in Chrome.
So for example "document", "console" or "Text" are left out.   
    
To get updates call window.namespaceLogger.log:

    setInterval(window.namespaceLogger.log,100);
    
If you include jQuery now, you'll see this:

    2 new Fields: $, jQuery 
    
Logging on other namespaces
===========================

Use the setNamespace function to watch namespaces other than the global window:

    window.namespaceLogger.setNamespace(jQuery);
    setInterval(window.namespaceLogger.log,100);

Setting a hi variable in the window.jQuery namespace:
    
    jQuery.hi = "Hello!"
    "Hello!"
    1 new Field: hi 

Accessing the log as an object
==============================

The last log is stored in window.namespaceLogger.lastLog:

printLog
========

After completing the log, namespaceLogger calls window.namespaceLogger.printLog to print the results, if there are any changes.

You can replace this function. It takes the log as found in window.namespaceLogger.lastLog as it's first argument.