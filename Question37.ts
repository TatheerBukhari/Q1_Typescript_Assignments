//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

interface Shirt {
    size: string;
    message: string;
  }
  
  function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return { size, message };
  }
  
  // Create a large shirt with the default message
  const largeShirt = make_shirt();
  console.log(`Size: ${largeShirt.size}, Message: ${largeShirt.message}`);
  
  // Create a medium shirt with the default message
  const mediumShirt = make_shirt("medium");
  console.log(`Size: ${mediumShirt.size}, Message: ${mediumShirt.message}`);
  
  // Create a custom-sized shirt with a different message
  const customShirt = make_shirt("small", "I love JavaScript");
  console.log(`Size: ${customShirt.size}, Message: ${customShirt.message}`);
  