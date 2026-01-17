import { motion } from "motion/react";
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
      <motion.div
        className=" flex w-full"
        initial={{ opacity: 0, x: 20 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
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
              <Link
                href={`https://${companyLink}`}
                className="italic font-bold hover:text-gray-500 underline"
              >
                {company}
              </Link>
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
      </motion.div>
    </>
  );
};

export default WorkHistoryCard;
