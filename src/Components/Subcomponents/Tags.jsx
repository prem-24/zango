

const Tag = ({ version, message, linkText }) => {
  return (
    <div className="versionTag w-full h-16 flex justify-center items-center">
      <div className="tag flex shadow-md bg-white w-80 py-5 rounded-full items-center gap-4 h-8">
        <section className="circle-container">
          <div className="circle"></div>
        </section>
        <p className="font-medium">
          {message} <span className="font-medium text-lg">{version}</span>.
          <span className="font-medium text-base text-gray-400">
            {" "}
            {linkText}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Tag;
