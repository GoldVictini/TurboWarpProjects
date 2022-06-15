class GamepadExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  

  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'gamepadBlocks',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Gamepad Values',

      blocks: [
				{
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
          opcode: 'X1',
          blockType: Scratch.BlockType.REPORTER,
	  			text: 'Stick1 X'
        },	{
          opcode: 'Y1',
          blockType: Scratch.BlockType.REPORTER,
	  			text: 'Stick1 Y'
        },  {
          opcode: 'X2',
          blockType: Scratch.BlockType.REPORTER,
	  			text: 'Stick2 X'
        },	{
          opcode: 'Y2',
          blockType: Scratch.BlockType.REPORTER,
	  			text: 'Stick2 Y'
        }
      ]
			
		}
  }
  

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  X1() {
    // You can just return a value: any string, boolean, or number will work.
    // If you have to perform an asynchronous action like a request, just return a Promise.
    // The block will wait until the Promise resolves and return the resolved value.
    
    // console.log(gamepads[0].axes[0], gamepads[0].axes[1]);
    var gamepads = navigator.getGamepads();
		//console.log( gamepads[1].axes.toString() );
		/*
		for (const gamepad of navigator.getGamepads()) {
		  if (!gamepad) continue;
		  for (const [index, axis] of gamepad.axes.entries()) {
		    console.log(index+" "+axis);
		  }
		}
		console.log(""); */
		
    return gamepads[0].axes[0];
  }
  Y1() {
    var gamepads = navigator.getGamepads();
    return gamepads[0].axes[1]*(-1);
  }
	X2() {
    var gamepads = navigator.getGamepads();
    return gamepads[0].axes[2];
  }
	Y2() {
    var gamepads = navigator.getGamepads();
    return gamepads[0].axes[3]*(-1);
  }
}
console.log("ASDf");

Scratch.extensions.register(new GamepadExtension());
