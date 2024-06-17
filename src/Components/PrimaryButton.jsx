function PrimaryButton({ name, icon }) {
  return (
    <button className="bg-myBtn py-3 rounded-lg   hover:bg-myBtn-800 flex gap-4 justify-between items-center text-white font-bold px-4 ">
      <p className="text-base font-normal"> {name}</p>
      <img className="h-8 w-8 object-cover " src={icon} alt="" />
    </button>
  );
}

export default PrimaryButton;
