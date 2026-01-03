interface WorkHistoryCardProps {
  role: string;
  duration: string;
  company: string;
  details?: string;
}

const WorkHistoryCard: React.FC<WorkHistoryCardProps> = ({role,duration,company,details}) => {
  return (
    <>
      <div className="flex w-full">
        <div className="border-1 p-2 w-[90%]">
          <div>
            <p className="text-2xl font-bold">{role}</p>
          </div>
          <div>
            <p className="font-bold">{duration}</p>
          </div>
          <div>
            <p className="italic">{company}</p>
          </div>
          <div>
            <p>{details}</p>
          </div>
        </div>
        <div className="w-[10%] flex justify-center items-center">
          <div className="bg-black rounded-full border-1 w-[10px] h-[10px]"></div>
        </div>
      </div>
    </>
  );
};

export default WorkHistoryCard;
