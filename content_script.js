walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
    var v = textNode.nodeValue;

  if(v.match(/plug/i)) {
    v = v.replace(/(P|p)lug/gi, function(match, p1, offset, string) {
        // p - 14 = b
        b = String.fromCharCode(p1.charCodeAt(0) - 14);
        return b + "uttplug";
      });
  }
	textNode.nodeValue = v;
}


