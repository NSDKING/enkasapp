'use client';

interface CrossIconProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CrossIcon: React.FC<CrossIconProps> = ({ setIsOpen, isOpen }) => (
  <div className="w-12 h-12 relative rounded mb-10" onClick={() => setIsOpen(!isOpen)}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-1 h-full bg-black rounded transform rotate-45"></div>
      <div className="w-1 h-full bg-black rounded transform -rotate-45"></div>
    </div>
  </div>
);

export default CrossIcon;

