function PrimaryButton({ name, icon }) {
  return (
    <button className="bg-myBtn py-3 rounded-lg hover:bg-myhover flex gap-4 justify-between items-center text-white font-bold px-4 transition-transform transform hover:scale-105">
      <p className="text-base font-normal transition-transform transform hover:scale-110"> {name}</p>
      <img className="h-8 w-8 object-cover transition-transform transform hover:scale-110" src={icon} alt="" />
    </button>
  );
}

export default PrimaryButton;
