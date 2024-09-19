import RequestCard from "./requests-card/RequestCard.tsx";
import { MyRequest } from "../../lib/models/MyRequest.ts";
interface IRequestsList {
  requests: MyRequest[];
}
const RequestsList = ({requests} : IRequestsList) => {
  return (
    <div className='grid grid-cols-2 gap-[44px] '>
      {requests.map(request => {
        return (
          <RequestCard request={request}/>
        )
      })}
    </div>
  );
};

export default RequestsList;