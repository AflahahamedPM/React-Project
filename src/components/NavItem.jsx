import React, { memo, useState } from 'react';

const NavItem = memo(({ children }) => {
  const [isHovered, setIsHovered] = useState(false);  
  const underlineAnimation = {
    display: 'inline-block',
    paddingBottom: '3px',
    backgroundImage: 'linear-gradient(#e8604c, #e8604c)',
    backgroundPosition: isHovered ? '100% 100%' : '0 100%', 
    backgroundSize: isHovered ? '100% 2px' : '0% 2px', 
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.3s, background-position 0s 0.3s', 
  };

  return (
    <p
      style={underlineAnimation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className='text-lg font-semibold  text-myBlue cursor-pointer'
    >
      {children}
    </p>
  );
});

export default NavItem;
