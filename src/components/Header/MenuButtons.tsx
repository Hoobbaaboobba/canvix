const buttons = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Contact Us",
  },
];

const MenuButtons = () => {
  return (
    <ul className="hidden gap-8 md:flex">
      {buttons.map((button, index) => (
        <li key={index} className="text-lg text-white hover:underline">
          <a href="">{button.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default MenuButtons;
