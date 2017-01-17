function A() {
	this.foo = 'hello';
}	
if (!global.foo) {
	global.foo = new A();
}
module.exports = global.foo;