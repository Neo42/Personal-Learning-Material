Console operation
$('#main');
$('header nav ol>li');
$$('header nav ol>li');
$_;
inspect(document.querySelector('#header'));
monitorEvents(document.querySelector('#header'), 'click');

alert('Boom!');
console.log('');
console.dir(document.querySelector('body'))
console.info('1')
console.warn('!!!')

console.group('page link');
console.dir(document.querySelectorAll('a'))
console.groupEnd();

console.group('paragraphs');
console.dir(document.querySelectorAll('p'))
console.groupEnd();

console.time('loop')
for(var i = 10000000-1; i>=0; i--){};
console.timeEnd('loop');

console.assert(document.querySelectorAll('a').length===140,"Sorry, only two");

Selecting elements:
document.getElementById('')
document.getElementsByTagName('header').firstChild
document.getElementByClassName('')
document.querySelector('')
document.querySelectorAll('')
document.getElementsByName('')

Node operation:
myNode.nodeType//1:element_node, 2:attribute_node, 3:text_node
myNode.nodeName
myNode.nodeValue //value able to be changed
myNode.childNode //A node, not value
myNode.parentNode
myNode.firstChild
myNode.lastChild
