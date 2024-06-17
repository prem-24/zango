


function SecButton({ name, icon }) {
    return (
        <button className="border-myBtn py-3 bg-secBtBg  rounded-lg  border-solid  border-2 hover:bg-myBtn-800 flex gap-4 justify-between items-center text-white font-bold px-4 ">
            <p className="text-base font-normal"> {name}</p>
            <img className="h-6 w-6 object-cover " src = {icon} alt="" />
          
        </button>
    );
}

export default SecButton;


