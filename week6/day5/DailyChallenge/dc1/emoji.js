export const emojis = [
    {
      emoji: "😀",
      name: "Grinning Face"
    },
    {
      emoji: "😂",
      name: "Face with Tears of Joy"
    },
    {
      emoji: "😍",
      name: "Smiling Face with Heart-Eyes"
    },
    {
      emoji: "😎",
      name: "Smiling Face with Sunglasses"
    },
    {
      emoji: "🔥",
      name: "Fire"
    },
    {
      emoji: "❤️",
      name: "Red Heart"
    },
    {
      emoji: "👍",
      name: "Thumbs Up"
    },
    {
      emoji: "🎉",
      name: "Party Popper"
    },
    {
      emoji: "🚀",
      name: "Rocket"
    },
    {
      emoji: "🍕",
      name: "Pizza"
    }
  ];
  
  export const getTwoEmoji = (corEmoji) => {
    let availableEmojis = emojis.filter(emoji => emoji !== corEmoji);
    
    let firstEm = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
    availableEmojis = availableEmojis.filter(emoji => emoji !== firstEm);
    
    let secondEm = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
    
    return [firstEm, secondEm];
} 


export const getCorEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)]
}

