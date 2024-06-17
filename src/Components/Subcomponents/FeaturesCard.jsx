
import { icons } from '../../constants';
import './FeaturesCard.css'; // Import the custom CSS file

function FeaturesCard({ head, content, FeatureIcons }) {
  return (
    <div className="gradient-border w-auto h-auto  rounded-custom">
      <div className="inner flex flex-col gap-14">
        <h1 className="text-2xl font-bold text-white">{head}</h1>
        <p className="text-gray-400 text-lg">{content}</p>
        <div className="icons-tag flex flex-row justify-between">
          <div className="w-14 h-14 flex justify-between items-center">
            <img src={FeatureIcons} className="object-fit" alt="" />
          </div>
          <a href="" className="w-34 flex justify-between flex-row items-center">
            <p className="text-white">Learn More</p>
            <img src={icons.arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
