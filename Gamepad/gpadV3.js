class GamepadExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
	
	//static v = navigator.getGamepads()[0].axes;
	
  getInfo() {
    return {
      id: 'gamepadBlocks',
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
        } , {
          opcode: 'buttonDown',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'button [b] is down?',
          arguments: {
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
					
				}
      ],
			
		}
  }
  
  //Corresponds to opcode above

  X1() { return navigator.getGamepads()[0].axes[0];  }
  Y1() {  return navigator.getGamepads()[0].axes[1]*(-1);  }
	X2() {  return navigator.getGamepads()[0].axes[2];  }
	Y2() {  return navigator.getGamepads()[0].axes[3]*(-1);  }
  buttonDown ({b}) {  return navigator.getGamepads()[0].buttons[b - 1].pressed;  }
	
}
console.log("ASDf");
//console.log( typeof navigator.getGamepads()[0].axes );
Scratch.extensions.register(new GamepadExtension());
