import { HolidayCard } from "./HolidayCard";

export function HolidayList({ holidayList }) {
  // const [holidayList, setHolidayList] = useState();
  return (
    <>
      {holidayList.map(({ holidayDate, holidayName }) => {
        return <HolidayCard key={crypto.randomUUID()}date={holidayDate} name={holidayName} />;
      })}
    </>
  );
}
