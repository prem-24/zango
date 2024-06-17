
import classNames from 'classnames';

function GradientHeading({ name, className }) {
  return (
    <h1 className={classNames("text-2xl font-bold text-center py-10 sm:text-4xl lg:text-5xl", className)}>
      <span className="bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
        {name}
      </span>
    </h1>
  );
}

export default GradientHeading;
