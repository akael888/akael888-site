import Link from "next/link";

interface WorkHistoryCardProps {
  role: string;
  duration: string;
  company: string;
  companyLink?: string;
  details?: string;
}

const WorkHistoryCard: React.FC<WorkHistoryCardProps> = ({
  role,
  duration,
  company,
  companyLink,
  details,
}) => {
  return (
    <>
      <div className="border-1 hover:border-black border-white flex w-full">
        <div className="p-2 w-full flex flex-col gap-2">
          <div>
            <div>
              <p className="text-lg font-bold">{role}</p>
            </div>
            <div>
              <p className="font-bold">{duration}</p>
            </div>
          </div>

          <div>
            {companyLink ? (
              <Link href={`https://${companyLink}`} className="italic font-bold hover:text-emerald-500">{company}</Link>
            ) : (
              <p className="italic">{company}</p>
            )}
          </div>
          {details ? (
            <div>
              <p>{details}</p>
            </div>
          ) : null}
        </div>
        {/* <div className="w-[10%] flex justify-center items-center">
          <div className="bg-black rounded-full border-1 w-[10px] h-[10px]"></div>
        </div> */}
      </div>
    </>
  );
};

export default WorkHistoryCard;
